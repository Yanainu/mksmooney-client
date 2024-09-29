<template>
  <div class="navigation">
      <div class="navigation-icons">
        <nuxt-icon 
          class="navigation-icons--bg"
          name="menu-back" 
          />

        <nuxt-icon 
          class="navigation-icons--logo"
          name="menu-logo" 
          />
      </div>

      <div class="navigation-links">
        <div
          class="navigation-links__item"
          v-for="navigationItem in headerNavigationItems" 
          :key="navigationItem?.id" >

          <NavigationItem
            :title="navigationItem?.title"
            :dropdown="navigationItem?.dropdown"
            :link="navigationItem?.link"
          />
        </div>        
      </div>
  </div>
</template>

<script setup>
import { 
  ref, 
  onBeforeUnmount, 
  onMounted, 
  computed 
} from 'vue';
import { 
  Stores,
  Services,
  Helpers
} from '~/composables'
import NavigationItem from './NavigationItem.vue'

const props = defineProps({
  currentPage: {
    type: String,
    default: 'vocal',
  },
});

const WindowWidthComposable = Helpers.checkWindowWidth();
const { currentWidth } = toRefs(WindowWidthComposable);

const menuScale = computed(() => {
  if (currentWidth.value < 900 && currentWidth.value > 600) {
    return 0.7;
  } 
  return 1;
})

// fetch
const HeaderNavigation = Services.HeaderNavigationService();
const { 
  headerNavigationData,
} = toRefs(HeaderNavigation)

const headerNavigationItems = computed(() => {
  if (headerNavigationData.value) {
    return headerNavigationData?.value.NavigationItem;
  }
  return [];
})

const ColorsStore = Stores.ColorsStore();
const { 
  Colors,
  formattedColors
} = toRefs(ColorsStore);

const menuBgColor = computed(() => {
  console.log('formattedColors.value', formattedColors.value, 'props.currentPage', props.currentPage)
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

  &-links {
    display: flex;
    gap: 50px;
    position: absolute;
    right: 100px;
    top: 12px;

    @media (max-width: 900px) {
      gap: 30px;
      right: 170px;
    }

    &__item {
      color: var(--white);
      font-weight: 800;
      font-size: 12px;
    }
  }

  &-icons {
    position: sticky;
    
    @media (max-width: 900px) {
      transform: scale(0.8);
    }

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
}


/* 
  @media (max-width: 600px) {
    height: fit-content;
  } */




</style>
