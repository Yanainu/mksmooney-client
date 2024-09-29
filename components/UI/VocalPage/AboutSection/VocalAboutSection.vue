<template>
  <div class="about-section">
    <AboutSectionDesktop 
      class="about-section-mode--desktop"
      v-if="currentWidth > 600"
      :sectionData="aboutSectionData"
    />
<!-- 
    <AboutSectionMobile 
      class="about-section-mode--mobile"
      v-else
      :sectionData="aboutSectionData"
    /> -->
  </div>
</template>

<script setup>
import { 
  Helpers,
} from '~/composables';

import AboutSectionDesktop from './AboutSectionDesktop.vue';
import AboutSectionMobile from './AboutSectionMobile.vue';

const WindowWidthComposable = Helpers.checkWindowWidth();
const { currentWidth } = toRefs(WindowWidthComposable);

const PageModel = Models.VocalPageStore();
const { 
  aboutSectionData,
} = storeToRefs(PageModel);

</script>
  
<style lang="postcss" scoped>

</style>
