<template>
  <div class="music-player">
    <div class="heading">
      <h1>FYE</h1>
    </div>

    <div class="audioPlayer" id="app">
      <a class="nav-icon" @click="isPlaylistActive=!isPlaylistActive" :class="{'isActive': isPlaylistActive}" title="Music List">
          <span></span>
          <span></span>
          <span></span>
        </a>
      <div class="audioPlayerList" :class="{'isActive': isPlaylistActive}">
        <div class="item" v-for="(item,index) in musicPlaylist" :key="index" v-bind:class="{ 'isActive':isCurrentSong(index) }" v-on:click="changeSong(index),isPlaylistActive=!isPlaylistActive">
          <p class="title">{{ item.title }}</p>
          <p class="artist">{{ item.artist }}</p>
        </div>
        
          <p class="debugToggle" v-on:click="toggleDebug()">debug: {{ debug }}</p>

      </div>
      
      <div class="audioPlayerUI" :class="{'isDisabled': isPlaylistActive}">
        <div  class="albumImage">
          <transition name="ballmove" enter-active-class="animated zoomIn" leave-active-class="animated fadeOutDown" mode="out-in">
            <img @load="onImageLoaded()" :src="musicPlaylist[currentSong].image" :key="currentSong" ondragstart="return false;" id="playerAlbumArt">
          </transition>
          <div class="loader" :key="currentSong">Loading...</div>
        </div>

        <div class="albumDetails">
          <transition name="slide-fade" mode="out-in">
            <p class="title" :key="currentSong">
              {{ musicPlaylist[currentSong].title }}
            </p>
          </transition>
          
          <transition name="slide-fade" mode="out-in">
            <p class="artist" :key="currentSong">
              {{ musicPlaylist[currentSong].artist }}
            </p>
          </transition>
        </div>

        <div class="playerButtons">
          <!-- BTNS -->
          <a class="button" :class="{'isDisabled':(currentSong==0)}" @click="prevSong" title="Previous Song">
            <nuxt-icon 
              class="zmdi zmdi-skip-previous" 
                name="player-back" />
          </a>
          <a class="button play" @click="playAudio" title="Play/Pause Song">
            <nuxt-icon 
              v-if="!currentlyPlaying"
              :class="[currentlyStopped ? 'zmdi-stop' : (currentlyPlaying ? 'zmdi-pause-circle' : 'zmdi-play-circle')]"
              class="zmdi" 
              name="player-playy" />
            <nuxt-icon 
              v-if="currentlyPlaying"
              :class="[currentlyStopped ? 'zmdi-stop' : (currentlyPlaying ? 'zmdi-pause-circle' : 'zmdi-play-circle')]"
              class="zmdi" 
              name="player-pause" />
          </a>
          <a class="button" :class="{'isDisabled':(currentSong==musicPlaylist.length-1)}" @click="nextSong" title="Next Song">
            <nuxt-icon 
              class="zmdi" 
              name="player-next" />
          </a>
        </div>

        <div class="currentTimeContainer" 
          style="{
            textAlign: center;
          }">
          <div class="currentTime">{{ fancyTimeFormat(currentTime) }}</div>
          <div class="totalTime"> {{ fancyTimeFormat(trackDuration)  }}</div>
        </div>

        <div 
          class="currentProgressBar-wrapper"
          ref="progressBar"
          @click="handleClick">
          <div class="currentProgressBar">
            <div class="currentProgress" 
            
            :style="{ 
              width: `${currentProgressBar}%`
            }">
          </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  
</template>

<script setup>
// перемотка
const progressBar = ref(null);
const handleClick = (event) => {
  const coords = progressBar.value.getBoundingClientRect();
  const clickedX = event.clientX - coords.left;
  const fullBarWidth = coords.width;
  const neededPercent = clickedX / fullBarWidth
  audio.value.currentTime = audio.value.duration * neededPercent
}

//data
  const audio = ref('');
  const imgLoaded = ref(false);
  const currentlyPlaying = ref(false);
  const currentlyStopped = ref(false);
  const currentTime = ref(0);
  const checkingCurrentPositionInTrack = ref('');
  const trackDuration = ref(0);
  const currentProgressBar = ref(0);
  const isPlaylistActive = ref(false);
  const currentSong = ref(0);
  const debug = ref(false);
  const audioFile = ref('');

  const musicPlaylist = ref([
    {
      title: "Embers",
      artist: "Fye",
      url: "/audio/embers.mp3",
      image: "https://source.unsplash.com/crs2vlkSe98/400x400"
    },
    {
      title: "Fast lane to love",
      artist: "Fye",
      url: "/audio/2_fast_lane_to_love.mp3",
      image: "https://source.unsplash.com/35bE_njbG9E/400x400"
    },
    {
      title: "Кто споет о тебе",
      artist: "Fye",
      url: "/audio/3_кто_споёт_о_тебе.mp3",
      image: "https://source.unsplash.com/Esax9RaEl2I/400x400"
    },
    {
      title: "Lonely in gorgerous",
      artist: "Fye",
      url: "/audio/4_lonely_in_gorgeous.mp3",
      image: "https://source.unsplash.com/j0g8taxHZa0/400x400"
    },
    {
      title: "Black mirror on the wall",
      artist: "Fye",
      url: "/audio/5_black_mirror_on_the_wall.mp3",
      image: "https://source.unsplash.com/j0g8taxHZa0/400x400"
    }
  ])



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
      currentSong.value + 1 == musicPlaylist.value.length
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
    imgLoaded.value = false;
    if (index !== undefined) {
      stopAudio();
      currentSong.value = index;
    }
    audioFile.value = musicPlaylist.value[currentSong.value].url;
    audio.value = new Audio(audioFile.value);

    audio.value.addEventListener("loadedmetadata", function() {
      console.log('trackduration',trackDuration.value)
      trackDuration.value = Math.round(audio.value.duration);
    });
    audio.value.addEventListener("ended", handleEnded);
    if (wasPlaying) {
      playAudio();
    }
  }

  const togglePlaylist = () => {
    isPlaylistActive.value = !isPlaylistActive.value;
  }

  const nextSong = () => {
    if (currentSong.value < musicPlaylist.value.length - 1) {
      changeSong(currentSong.value + 1);
    }
  }

	const	prevSong = () => {
    changeSong(currentSong.value - 1);
  }
		
	const	isCurrentSong = (index) => {
    if (currentSong.value == index) {
      return true;
    }
    return false;
  }

	const	getCurrentSong = (currentSong) => {
    return musicPlaylist.value[currentSong].url;
  }

  onMounted(() => {
    changeSong();
		audio.value.loop = false;
  });

  onMounted(() => {
    changeSong();
		audio.value.loop = false;
  })

  const handleEnded = () => {
    if (currentSong.value + 1 == musicPlaylist.value.length) {
      stopAudio();
      currentlyPlaying.value = false;
      currentlyStopped.value = true;
    } else {
      currentlyPlaying.value = false;
      currentSong.value += 1;
      changeSong();
      playAudio();
    }
  }

	const	onImageLoaded = () => {
    imgLoaded.value = true;
  }

	const	getCurrentTimeEverySecond = (startStop) => {
    checkingCurrentPositionInTrack.value = setTimeout(
      () => {
        console.log('audio.value.currentTime', audio.value.currentTime)
        currentTime.value = audio.value.currentTime;
        currentProgressBar.value =
          audio.value.currentTime / trackDuration.value * 100;
        getCurrentTimeEverySecond(true);
      },
      1000
    );
  }

	const	toggleDebug = () => {
    debug.value = !debug.value;
    document.body.classList.toggle('debug');
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
    audio.value.removeEventListener("ended", handleEnded);
		audio.value.removeEventListener("loadedmetadata", handleEnded);

		clearTimeout(checkingCurrentPositionInTrack.value);
  });



</script>

<style lang="postcss">
@import './playerStyles.css';
</style>
