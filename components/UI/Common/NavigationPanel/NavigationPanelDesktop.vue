<template>
  <div class="navigation">
    <div v-if="navigationType === 'header'" class="navigation-icons">
      <nuxt-icon 
        class="navigation-icons-header--bg"
        name="menu-back--header" 
        />

      <nuxt-icon 
        class="navigation-icons-header--logo"
        name="menu-logo" 
        />
    </div>

    <div v-if="navigationType === 'footer'" class="navigation-icons">
      <nuxt-icon 
        class="navigation-icons-footer--bg"
        name="menu-back--footer" 
        />

      <nuxt-icon 
        class="navigation-icons-footer--logo"
        name="menu-logo" 
        />
    </div>

    <div 
      class="navigation-links"
      :class="`navigation-links--mode-${navigationType}`"
    >
      <div
        v-for="item in navigationItems"
        :key="item?.id" 
        class="navigation-links__item" >

        <NavigationItem
          :title="item?.title"
          :dropdown="item?.dropdown"
          :link="item?.link"
          :isNewTab="navigationType === 'footer'"
        />
      </div>        
    </div>
  </div>
</template>

<script setup>
import { 
  computed,
  toRefs
} from 'vue';

import { Stores } from '~/composables';

import NavigationItem from './NavigationItem';

const props = defineProps({
  currentPage: {
    type: String,
    default: 'vocal',
  },
  navigationType: { // header/footer
    type: String,
    default: 'header'
  },
  navigationData: {
    type: Object,
    default: () => ({})
  }
});

const navigationItems = computed(() => {
  if (props.navigationData) {
    return props.navigationData?.NavigationItem;
  }
  return [];
})

const ColorsStore = Stores.ColorsStore();
const { 
  formattedColors
} = toRefs(ColorsStore);

const menuBgColor = computed(() => {
  if (formattedColors.value) {
    return formattedColors.value[props.currentPage]?.primary;
  }
  return '#6E9DC7';
})

const menuLogoColor = computed(() => {
  if (formattedColors.value) {
    return formattedColors.value[props.currentPage]?.secondary;
  }
  return '#E2CD98';
})
</script>
  
<style lang="postcss" scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
}

.navigation {
  position: relative;

  &-icons {
    @media (max-width: 850px) {
      transform: scale(0.9);
    }
  }

  &-links {
    display: flex;
    gap: 50px;
    position: absolute;
    top: 12px;

    &--mode {
      &-header {
        right: 100px;
      }

      &-footer {
        left: 100px;
      }
    }

    @media (max-width: 850px) {
      gap: 30px;
      right: 170px;
    }

    &__item {
      color: var(--white);
      font-weight: 800;
      font-size: 12px;
    }
  }

  &-icons-header {
    position: sticky;
    
    &--bg {
      display: inline-block;
      color: v-bind(menuBgColor);
    }

    &--logo {
      position: absolute;
      left: 61px;
      top: -20px;
      color: v-bind(menuLogoColor);
    }
  }

  &-icons-footer {    
    &--bg {
      display: inline-block;
      color: v-bind(menuBgColor);
    }

    &--logo {
      position: absolute;
      right: 61px;
      top: -20px;
      color: v-bind(menuLogoColor);
    }
  }
}
</style>
