<template>
  <footer class="footer">
    <NavigationPanelDesktop
      v-if="currentWidth > 700"
      :navigationData="footerNavigationData"
      :currentPage="currentPage"
      navigationType="footer"
      class="footer__navigation--desktop"
    />

    <NavigationPanelMobile 
      v-else
      :navigationData="footerNavigationData"
      :currentPage="currentPage"
      navigationType="footer"
      class="footer__navigation--mobile"
    />
  </footer>
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
const { footerNavigationData } = storeToRefs(NavigationStore)

</script>
  
<style lang="postcss" scoped>
.footer {
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
