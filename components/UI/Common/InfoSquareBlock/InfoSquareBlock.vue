
<template>
  <div 
    :class="{ 'info-block-wrapper--photo-fill ': blockData?.isPhotoOnly && photoFillSpace}"
    class="info-block-wrapper">

   <BlockPhoto 
      v-if="blockData?.isPhotoOnly"
      :theme="theme"
      :image-position="photoPosition"
      :blockData="blockData"/>

    <BlockLink
      v-else-if="isLink"
      :theme="theme"
      :blockData="blockData"/>
 
    <BlockNotLink
      v-else-if="!isLink"
      :theme="theme"
      :blockData="blockData"
      /> 

  </div>
</template>

<script setup>
import BlockLink from './BlockLink.vue';
import BlockNotLink from './BlockNotLink.vue';
import BlockPhoto from './BlockPhoto.vue';

defineProps({
  blockData: {
    type: Object,
    default: () =>({}),
  },
  theme: {
    type: String,
    default: 'vocal',
  },
  isLink: {
    type: Boolean,
    default: false,
  },
  wrapperHeight: {
    type: String,
    default: '100%'
  },
  width: {
    type: String,
    default: '25%',
  },
  photoFillSpace: {
    type: Boolean,
    default: false,
  },
  mobileHeight: {
    type: String,
    default: '220px',
  },
  photoPosition: {
    type: String,
    default: 'top',
  }
});

</script>

<style lang="postcss" scoped>
.info-block-wrapper {
  min-height: v-bind(wrapperHeight);
  width: v-bind(width);

  &--photo-fill {
    flex-grow: 1;
  }

  @media (max-width: 500px) {
    min-height: v-bind(mobileHeight);
  }
}

</style>
  


