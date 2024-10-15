<template>
  <div class="header">
    <NavigationDesktop
      v-if="currentWidth > 600"
      class="header__navigation--desktop"
      location="header"
    />

    <NavigationMobile 
      v-else
      class="header__navigation--mobile"
      location="header"
    />
  </div>
</template>

<script setup>
import { toRefs } from 'vue';
import { 
  Helpers,
} from '~/composables';

import { CommonComponents } from '@/components';

const { 
  NavigationDesktop,
  NavigationMobile
 } = CommonComponents;

defineProps({
  currentPage: {
    type: String,
    default: 'vocal',
  },
});

const WindowWidthComposable = Helpers.checkWindowWidth();
const { currentWidth } = toRefs(WindowWidthComposable);

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
