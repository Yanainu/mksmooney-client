
<template>
  <div class="player">
    <div class="player__top-content top-content">
      <div class="top-content__buttons">
        <div class="buttons">
          <button
            class="button button--light" 
            @click="prevSong" 
            title="Previous Song" >

            <nuxt-icon 
              class="button--theme-light" 
              name="player-btn-previous" />

          </button>
          <button
            class="button button--dark play" 
            @click="playAudio">

            <nuxt-icon 
              v-if="!currentlyPlaying"
              class="button--theme-dark" 
              name="player-btn-play" />

            <nuxt-icon 
              v-if="currentlyPlaying"
              class="button--theme-dark" 
              name="player-btn-pause" />
          </button>

          <button
            class="button button--light" 
            @click="nextSong" >

            <nuxt-icon 
              class="button--theme-light" 
              name="player-btn-next" />
          </button>
        </div>
      </div>

      <div class="top-content__info">
        <transition name="slide-fade" mode="out-in">
          <p 
            class="top-content__name" 
            :key="currentSong">
            {{ songsWithUrl[currentSong]?.title }}
          </p>
        </transition>
        
        <transition name="slide-fade" mode="out-in">
          <p class="top-content__artist" :key="currentSong">
            {{ songsWithUrl[currentSong]?.artist}}
          </p>
        </transition>
      </div>
    </div>

    <div class="player__bottom-content bottom-content">
      <div 
        class="bottom-content__progress-bar bar"
        ref="progressBar"
        @click="handleClick">

        <div class="bar__wrapper">
          <div class="bar__progress" 
            :style="{ 
              width: `${currentProgressBar}%`
            }"/>
        </div>
      </div>

      <div class="bottom-content__time time" >
        <div class="time__current">
          {{ fancyTimeFormat(currentTime) }}
        </div>
        <div class="time__total"> 
          {{ fancyTimeFormat(trackDuration)  }}
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { 
  ref,
  toRefs,
  computed,
  watch,
  onBeforeUnmount,
  onMounted
} from 'vue';

import { 
  Stores,
  Helpers 
} from '~/composables';

const ColorsStore = Stores.ColorsStore();
const { 
  vocalPrimary,
  vocalLight
} = toRefs(ColorsStore);

const MediaURLComposable = Helpers.getMediaUrl();
const { getFormattedUrl } = MediaURLComposable;

const props = defineProps({
  songs: {
    type: Array,
    default: () => [],
  },
});

const songsWithUrl = computed(() => {
  if (props.songs?.length) {
    const result = props.songs.map(songObject => {
      return {
        ...songObject,
        formattedUrl: getFormattedUrl(songObject?.audio),
      }
    })
    return result;
  }
  return [];
})

const progressBar = ref(null);
const handleClick = (event) => {
  const coords = progressBar.value.getBoundingClientRect();
  const clickedX = event.clientX - coords.left;
  const fullBarWidth = coords.width;
  const neededPercent = clickedX / fullBarWidth
  audio.value.currentTime = audio.value.duration * neededPercent
}

const audio = ref('');
const currentlyPlaying = ref(false);
const currentlyStopped = ref(false);
const currentTime = ref(0);
const checkingCurrentPositionInTrack = ref('');
const trackDuration = ref(0);
const currentProgressBar = ref(0);
const currentSong = ref(0);
const audioFile = ref('');

//methods
const pausedMusic = () => {
  clearTimeout(checkingCurrentPositionInTrack.value);
}

const stopAudio = () => {
  audio.value.pause();
  currentlyPlaying.value = false;
  pausedMusic();
}

const playAudio = () => {
  if (
    currentlyStopped.value == true &&
    currentSong.value + 1 == songsWithUrl.value.length
  ) {
    currentSong.value = 0;
    changeSong();
  }
  if (!currentlyPlaying.value) {
    getCurrentTimeEverySecond(true);
    currentlyPlaying.value = true;
    audio.value.play();
  } else {
    stopAudio();
  }
  currentlyStopped.value = false;
}


const changeSong = (index) => {
  const wasPlaying = currentlyPlaying.value;
  if (index !== undefined) {
    stopAudio();
    currentSong.value = index;
  }
  audioFile.value = songsWithUrl.value[currentSong.value].formattedUrl;
  audio.value = new Audio(audioFile.value);

  audio.value.addEventListener("loadedmetadata", function() {
    trackDuration.value = Math.round(audio.value.duration);
  });
  audio.value.addEventListener("ended", handleEndedSong);

  if (wasPlaying) {
    playAudio();
  }
}

const nextSong = () => {
  if (currentSong.value < songsWithUrl.value?.length - 1) {
    changeSong(currentSong.value + 1);
  } else {
    changeSong(0);
  }
}

const	prevSong = () => {
  if (currentSong.value == 0) {
    changeSong(4);
  } else {
    changeSong(currentSong.value - 1);
  }
}

onMounted(() => {
  setTimeout(() => {
    changeSong();
    audio.value.loop = false;
  }, 1000);
});

const handleEndedSong = () => {
  currentlyPlaying.value = false;
  nextSong();
  changeSong();
  playAudio();
}

const	getCurrentTimeEverySecond = () => {
  checkingCurrentPositionInTrack.value = setTimeout(
    () => {
      currentTime.value = audio.value.currentTime;
      currentProgressBar.value =
        audio.value.currentTime / trackDuration.value * 100;
      getCurrentTimeEverySecond(true);
    },
    1000
  );
} 

const fancyTimeFormat = (s) => {
  return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;
}

watch(
  () => currentTime.value,
  () => {
    currentTime.value = Math.round(currentTime.value);
  }
);

onBeforeUnmount(() => {
  audio.value.removeEventListener("ended", handleEndedSong);
  audio.value.removeEventListener("loadedmetadata", handleEndedSong);

  clearTimeout(checkingCurrentPositionInTrack.value);
});
</script>  

<style lang="postcss" scoped>
.player {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 140px;

  @media (max-width: 700px) {
    padding-left: 0;
  }
}

.top-content {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;

  &__name {
    font-family: 'Lack';
    font-size: 18px;
    line-height: 21.6px;
    color: var(--dark-blue);

    @media (max-width: 500px) {
      font-size: 14px;
    }
  }

  &__artist {
    font-family: 'Lack';
    font-size: 14px;
    line-height: 16.8px;
    color: v-bind(vocalLight);

    @media (max-width: 500px) {
      font-size: 12px;
    }
  }

  @media (max-width: 700px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
}

.bottom-content {
  &__time {
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
}

.time {
  &__current,
  &__total {
    font-size: 14px;
    color: var(--dark-blue);
    font-family: 'Lack';

    @media (max-width: 500px) {
      font-size: 12px;
    }
  }
}

.buttons {
  display: flex;
}

.button {
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;

  &:first-child {
    padding-right: 10px;
  }

  &:not(:first-child) {
    padding: 0 10px;
  }

  &--light {
    color: v-bind(vocalLight);
  }

  &--dark {
    color: v-bind(vocalPrimary);
  }

  &:active {
    opacity: 0.75;
    transform: scale(0.75);
  }

  &-theme {
    &--light {
      color: v-bind(vocalLight);
    }

    &--dark {
      color: v-bind(vocalPrimary);
    }
  }
}

.bar {
  width: 100%;
  height: 5px;
  margin-bottom: 10px;
  cursor: pointer;

  &__wrapper {
    width: 100%;
    background: var(--grey);
    border-radius: 30px;
  }

  &__progress {
    height: 5px;
    background-color: v-bind(vocalLight);
    border-radius: 30px;
  }
}
</style>
