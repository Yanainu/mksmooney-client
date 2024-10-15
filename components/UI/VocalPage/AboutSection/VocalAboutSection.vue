<template>
  <div class="about-section">
    <AboutSectionDesktop 
      v-if="currentWidth > 600"
      class="about-section-mode--desktop"
      :section-data="aboutSectionData"
    />

    <AboutSectionMobile 
      v-else
      class="about-section-mode--mobile"
      :section-data="aboutSectionData"
    />
  </div>
</template>

<script setup>
import { toRefs } from 'vue';
import { storeToRefs } from 'pinia';
import { 
  Helpers,
  Models
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
