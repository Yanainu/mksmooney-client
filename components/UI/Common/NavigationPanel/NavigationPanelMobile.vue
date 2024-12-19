<template>
  <div 
    class="navigation" 
    :class="`navigation--type-${navigationType}`"
  >
    <div class="navigation__icons navigation-icons">
      <nuxt-icon 
        class="navigation__icon--bg"
        :name="menuBgIcon" 
        />

      <nuxt-icon 
        class="navigation__icon--logo"
        name="menu-logo--mobile" 
      />

      <div 
        v-if="navigationType === 'header'"
        class="navigation__icon--menu"
      >
        <nuxt-icon
          v-if="!menuIsOpen" 
          class="menu--closed"
          name="menu-burger--closed"
          @click="openMenu" 
        />

        <nuxt-icon 
          v-if="menuIsOpen" 
          class="menu--opened"
          name="menu-burger--opened"
          @click="closeMenu" 
        />
      </div>

      <div 
        v-if="navigationType === 'footer'" 
        class="navigation__contacts-title"
      >
        Контакты

        <nuxt-icon 
          v-if="!menuIsOpen" 
          class="menu-caret--closed"
          name="menu-caret--closed"
          @click="openMenu" 
        />

        <nuxt-icon 
          v-if="menuIsOpen" 
          class="menu-caret--opened"
          name="menu-caret--opened"
          @click="closeMenu" 
        />
      </div>
    </div>

    <div 
      v-if="menuIsOpen"
      class="navigation__links navigation-links">

      <div
        v-for="navigationItem in navigationItems"
        :key="navigationItem?.id" 
        class="navigation-links__item" >

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
  toRefs,
  computed 
} from 'vue';

import { 
  Stores,
} from '~/composables';

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

const menuBgIcon = computed(() => `menu-back-mobile--${props.navigationType}`)

const menuIsOpen = ref(false)

const openMenu = () => {
  menuIsOpen.value = true;
}

const closeMenu = () => {
  menuIsOpen.value = false;
}
</script>
  
<style lang="postcss" scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
}

.navigation {
  position: relative;

  &__icon {
    &--bg {
      color: v-bind(menuBgColor);
    }

    &--logo {
      position: absolute;
      top: -10px;
      color: v-bind(menuLogoColor);
    }
  }

  &__icons {
    position: sticky;
    display: flex;
    align-items: center;
  }

  &__links {
    position: absolute;
    background-color: v-bind(menuBgColor);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    width: 190px;
    padding: 16px 0;

    & .navigation-links__item {
      color: var(--white);
      font-weight: 800;
      font-size: 12px;
    }
  }

  &--type {
    &-header {
      .navigation__links {
        top: 40px;
      }

      .navigation__icon {
        &--logo {
          left: -40px;
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

    &-footer {
      .navigation__links {
        bottom: 40px;
      }

      .navigation__contacts-title {
        position: absolute;
        top: 7px;
        left: 20px;
        color: var(--white);
        cursor: pointer;
        text-transform: uppercase;
        font-weight: 800;
        font-size: 14px;
      }

      .navigation__icon {
        &--logo {
          right: -40px;
        }
      }
    }
  }

  
}

.menu {
  &--closed {
    margin-top: 3px;
  }
}
</style>
