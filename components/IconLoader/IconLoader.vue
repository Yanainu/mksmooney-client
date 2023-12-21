<template>
    <span>
      <component :is="currentIcon" class="icon" />
    </span>
  </template>
  
  <script setup>
  const props = defineProps({
    name: {
      type: String,
      default: null,
    },
  });
  
  const currentIcon = computed(() => defineAsyncComponent({
    loader: () => import(`../../assets/icons/${props.name}.svg`),
    loadingComponent: {
      template: '<span></span>',
    },
    errorComponent: {
      template: '<span>icon not found</span>',
    },
    delay: 0,
    timeout: 3000,
  }));
  </script>
  
  <style lang="postcss">
  .icon {
    display: block;
  }
  </style>
  