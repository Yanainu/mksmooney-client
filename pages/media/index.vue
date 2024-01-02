<template>
  <div>
    <!-- <div>
      vue3-audio-player
    </div>
    <AudioPlayer
      :option="{
        // src: '/audio/embers.mp3',
        :audio-list="audioList.map(elm => elm.url)"

        title: 'embers',
      }"
    /> -->

    <hr />

    <div>
    <!-- {{ currentAudioName || audioList[0].name }}
    <AudioPlayer
      ref="audioPlayer"
      :audio-list="audioList.map(elm => elm.url)"
      :before-play="handleBeforePlay"
      theme-color="#ff2929"
    /> -->
  </div>


    <AVWaveform src='/audio/embers.mp3' />
    <AVWaveform src='/audio/2_fast_lane_to_love.mp3' />

  </div>
  
</template>
<script setup>
import { AVWaveform } from 'vue-audio-visual'

// import AudioPlayer from 'vue3-audio-player'



// import AudioPlayer from '@liripeng/vue-audio-player'

const currentAudioName = ref('');

const audioList = ref([
  {
    name: 'audio1',
    url: '/audio/embers.mp3'
  },
  {
    name: '/audio/2_fast_lane_to_love.mp3',
    url: '/audio/2_fast_lane_to_love.mp3'
  }
])

const handleBeforePlay = (next) => {
  currentAudioName.value = audioList[this.$refs.audioPlayer.currentPlayIndex].name;
  next()
}

</script>

<style lang="postcss">

</style>
