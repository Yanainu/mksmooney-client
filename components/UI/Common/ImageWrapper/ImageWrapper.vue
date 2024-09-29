<template>
  <div class="image-wrapper">
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  width: {
    type: String,
    default: '100%',
  },
  // height: {
  //   type: String,
  //   default: '100%',
  // },
});
</script>
  
<style lang="postcss" scoped>
.image-wrapper {
  border-radius: 20px;
  width: v-bind(width);
  /* height: v-bind(height); */
  overflow: hidden;
}

</style>
