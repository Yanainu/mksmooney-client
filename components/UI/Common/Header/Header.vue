<template>
  <div class="header">
    <NavigationDesktop
      class="header__navigation--desktop"
      v-if="currentWidth > 600"
      location="header"
    />

    <NavigationMobile 
      class="header__navigation--mobile"
      v-else
      location="header"
    />
  </div>
</template>

<script setup>
import { 
  ref, 
} from 'vue';
import { 
  Helpers,
} from '~/composables';

import { CommonComponents } from '@/components';

const { 
  NavigationDesktop,
  NavigationMobile
 } = CommonComponents;

const props = defineProps({
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
}
</style>
