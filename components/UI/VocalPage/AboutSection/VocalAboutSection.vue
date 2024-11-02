<template>
  <div class="about-section">
    <AboutSectionDesktop 
      v-if="currentWidth > 600"
      class="about-section-mode--desktop"
      :section-data="data"
    />

    <AboutSectionMobile 
      v-else
      class="about-section-mode--mobile"
      :section-data="data"
    />
  </div>
</template>

<script setup>
import { toRefs } from 'vue';
import { Helpers } from '~/composables';

import AboutSectionDesktop from './AboutSectionDesktop.vue';
import AboutSectionMobile from './AboutSectionMobile.vue';

defineProps({
  data: {
    type: Object,
    default: () => ({})
  },
});

const WindowWidthComposable = Helpers.checkWindowWidth();
const { currentWidth } = toRefs(WindowWidthComposable);

</script>
  
<style lang="postcss" scoped>

</style>
