<template>
  <div class="navigation">
      <div class="navigation-icons">
        <nuxt-icon 
          class="navigation-icons--bg"
          name="menu-back--mobile" 
          />

        <nuxt-icon 
          class="navigation-icons--logo"
          name="menu-logo--mobile" 
          />

        <div 
          class="navigation-icons--menu">

          <nuxt-icon
            v-if="!menuIsOpen" 
            @click="openMenu"
            class="menu--closed"
            name="menu-burger--closed" 
          />
          <nuxt-icon 
            v-if="menuIsOpen" 
            @click="closeMenu"
            class="menu--opened"
            name="menu-burger--opened" 
          />
        </div>



      </div>

      <div 
        v-if="menuIsOpen"
        class="navigation-links">
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



// fetch
const HeaderNavigation = Services.HeaderNavigationService();
const { 
  headerNavigationData,
} = toRefs(HeaderNavigation)
// const headerNavigationItems = headerNavigationData?.NavigationItem

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






const menuIsOpen = ref(false)

const openMenu = () => {
  console.log('click')
  menuIsOpen.value = true;
}

const closeMenu = () => {
  menuIsOpen.value = false;
}

// отключение меню через 600мс после ухода мыши с него
const timer = ref(null);

function mouseMoveHandle() {
  clearTimeout(timer.value);
}

function mouseLeaveHandle() {
  clearTimeout(timer.value);
  timer.value = setTimeout(() => {
    menuIsOpen.value = false;
  }, 5000);
}

// переключение видимости меню по клику (для мобильной версии)
function toggleMenu() {
  window.removeEventListener('click', closeMenu);
  menuIsOpen.value = !menuIsOpen.value;
}

const WindowWidthComposable = Helpers.checkWindowWidth();
const currentWidth = toRefs(WindowWidthComposable);

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
    position: absolute;
    top: 40px;
    background-color: v-bind(menuBgColor);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;

    width: 190px;
    padding: 16px 0;

    &__item {
      color: var(--white);
      font-weight: 800;
      font-size: 12px;
    }
  }

  &-icons {
    position: sticky;
    display: flex;
    align-items: center;

    &--bg {
      color: v-bind(menuBgColor);
    }

    &--logo {
      position: absolute;
      left: -40px;
      top: -10px;
      color: v-bind(menuLogoColor);
    }

    &--menu {
      position: absolute;
      top: 3px;
      right: 20px;
      color: var(--white);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }
}

/* .menu {
  &--opened {
    position: absolute;
    top: 6px;
  }
  &--closed {
    position: absolute;
    top: 3px;
  }
} */


/* 
  @media (max-width: 600px) {
    height: fit-content;
  } */




</style>
