<template>
  <img
    :src="src"
    alt="#"
    :style="calculatedStyles"
  >
  <!-- <NuxtImg ? ></NuxtImg> -->
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  src: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '100%',
  },
  attributes: {
    type: Object,
    default: () => ({}),
  },
  autoWidth: {
    type: Boolean,
    default: false,
  },
  customWidth: {
    type: String,
    default: null,
  }
});

const calculatedStyles = computed(() => {
  const styles = {
    borderRadius: '20px'
  }
  if (props.width) {  
    styles.width = props.width;
  }
  return styles;
});

</script>
