<template>
    <div class="main-layout">
      <Header />
      <Main /> 

      <Footer />
    </div>
  </template>
<script setup>

import Header from '@/components/UI/Header/Header.vue';
import Main from '@/components/UI/Main/Main.vue';
import Footer from '@/components/UI/Footer/Footer.vue';
//мой варик
// import useMyFetch from '@/composables/useMyFetch';

// const result  = await useMyFetch('main-page', { 
//   // method: "POST",
//   // body: data,
// })
// console.log('res', result)


// пашин варик
const { $fetchData } = useNuxtApp();

const { data } = await $fetchData('main-page', {
  params: {
    populate: 'deep',
  },
});

const testField = data?.value?.data?.attributes?.testField;
console.log('main', testField)
</script>

<style lang="postcss">
.main-layout {
  height: 100vh;
  width: 100vw;
}
</style>
