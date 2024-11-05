<template>
  <div class="spot"/>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: 'var(--white)',
  },
  shadowSize: {
    type: String,
    default: '150px',
  },
  containerWidth: {
    type: String,
    default: '1px',
  },
  containerHeight: {
    type: String,
    default: '1px',
  }
});
</script>
  
<style lang="postcss" scoped>
.spot {
  background: v-bind(color);
  box-shadow: 0px 0px 500px v-bind(shadowSize) v-bind(color);
  z-index: -1;
  width: v-bind(containerWidth);
  height: v-bind(containerHeight);
}
</style>
