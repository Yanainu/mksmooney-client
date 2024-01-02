<template>
    <div class="main-layout">
      <Header />

      <Main /> 
    </div>
  </template>
<script setup>

import Header from '@/components/UI/Header/Header.vue';
import Main from '@/components/UI/Main/Main.vue';

</script>

<style lang="postcss">
.main-layout {
  height: 100vh;
  width: 100vw;
}
</style>
