<template>
    <span>
      <img 
      class="logo"
      :width="width" 
      :height="height" 
      src="https://mksmooney.ru/wp-content/uploads/2022/12/logo-small-gray.png" 
      alt="" 
      >
    </span>
  </template>
  
  <script setup>
  const props = defineProps({
    width: {
      type: String,
      default: null,
    },
    height: {
      type: String,
      default: null,
    },
  });
  

  </script>
  
  <style lang="postcss">
  .logo {
  }
  </style>
  