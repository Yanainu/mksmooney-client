<template>
  <div class="header">
    <NavigationPanelDesktop
      v-if="currentWidth > 700"
      :navigationData="headerNavigationData"
      :currentPage="currentPage"
      class="header__navigation--desktop"
      navigationType="header"
    />

    <NavigationPanelMobile 
      v-else
      :navigationData="headerNavigationData"
      :currentPage="currentPage"
      class="header__navigation--mobile"
      navigationType="header"
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

import { CommonComponents } from '@/components';

const { 
  NavigationPanelDesktop,
  NavigationPanelMobile
 } = CommonComponents;

defineProps({
  currentPage: {
    type: String,
    default: 'vocal',
  },
});

const WindowWidthComposable = Helpers.checkWindowWidth();
const { currentWidth } = toRefs(WindowWidthComposable);

const NavigationStore = Models.NavigationStore();
const { headerNavigationData } = storeToRefs(NavigationStore)

</script>
  
<style lang="postcss" scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;

  &__navigation {
    &--desktop {
      @media (max-width: 730px) {
        transform: scale(0.9);
      }
    }
  }
}
</style>
