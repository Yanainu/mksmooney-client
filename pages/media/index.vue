<template>
  <div>
    <Header />
    <MusicPlayer />
    <Footer />

  </div>
</template>

<script setup>
import MusicPlayer from '@/components/UI/MusicPlayer/MusicPlayer.vue'
import Header from '@/components/UI/Header/Header.vue';
import Footer from '@/components/UI/Footer/Footer.vue';

const playList = ref([
  {
    // song of title
    title: 'fast_lane_to_love',
    // sound file
    file: '/audio/2_fast_lane_to_love.mp3',
    // howler instance
    howl: null,
    // song of author
    author: 'Cherrystones',
    // song of cover
    // cover: cover1
  },
  {
    title: '/audio/embers.mp3',
    file: '/audio/embers.mp3',
    howl: null,
    author: 'Cherrystones',
}
])
const player = ref(null);

</script>

<style lang="postcss">

</style>
