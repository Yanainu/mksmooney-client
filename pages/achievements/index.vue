<template>
  <div class="achievements-layout">
    <Header />
    <Achievements /> 
  </div>
</template>

<script setup>
import Header from '@/components/UI/Header/Header.vue';
import Achievements from '@/components/UI/Achievements/Achievements.vue';

</script>

<style lang="postcss">
.achievements-layout {
  height: 100vh;
  width: 100vw;
  }
</style>
