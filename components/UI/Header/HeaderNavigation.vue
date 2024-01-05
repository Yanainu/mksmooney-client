<template>
  <div class="header-navigation">
    <!-- desktop -->
    <div 
      v-if="currentWidth > 600" 
      class="header-navigation__desktop">
      <div 
        class="header-navigation__item--desktop"
        v-for="menuItem in menuItems" 
        :key="menuItem?.id" >

        <NavigationItem
          :title="menuItem?.title"
          :dropdown="menuItem?.dropdown"
          :link="menuItem?.link"
        />
      </div>
    </div>

    <div 
      v-if="currentWidth <= 600" 
      class="header-navigation__mobile">

        <div class="header-navigation__logo--mobile">
          <Logo 
            width="30px"
            height="30px"/>  
        </div>

        <!-- button + menu opened -->
        <div class="header-navigation__mobile-wrapper">
          <!-- button  -->
          <button
            class="header-navigation__button"
            @click="mobileMenuOpened = !mobileMenuOpened"
          > 
            <nuxt-icon 
              class="menu-icon" 
              v-if="!mobileMenuOpened" 
              name="menu-burger--open" />
            <nuxt-icon 
              class="menu-icon" 
              v-if="mobileMenuOpened" 
              name="menu-burger--close" />
          </button>

          <!-- mobile menu opened -->
          <div 
            v-if="mobileMenuOpened" 
            class="header-navigation__item--mobile">
            <HeaderNavigationMobile 
              :menu-items="menuItems" 
            />
          </div>
        </div>
        
    </div>
    <div v-if="currentWidth > 600" class="header-navigation__logo">
      <Logo 
        width="40px"
        height="40px"/>  
    </div>

  </div>
</template>
  
<script setup>
import NavigationItem from '@/components/UI/Header/HeaderNavigationItem.vue';

import HeaderNavigationMobile from '@/components/UI/Header/HeaderNavigationMobile.vue';

import { ref } from 'vue';

const mobileMenuOpened = ref(false);

const menuItems = [
  {
    id: 0,
    title: 'Обо мне',
    link: '#about',
    dropdown: {
      id: 10,
      title: 'Подробнее',
      dropdownItems: [
        {
          id: 11,
          title: 'Вокал',
          link: '/vocal',
        },
        {
          id: 12,
          title: 'Коучинг',
          link: '/coaching',
        },
        {
          id: 13,
          title: 'FATE INC.',
          link: '/fateinc',
        },
      ]
    },
  },
  {
    id: 1,
    dropdown: null,
    title: 'Достижения',
    link: '/achievements'
  },
  {
    id: 2,
    dropdown: null,
    title: 'Медиа',
    link: '/media'
  },
  {
    id: 3,
    dropdown: null,
    title: 'Контакты',
    link: '#contacts'
  },
  {
    id: 4,
    dropdown: null,
    title: 'Донат',
    link: 'https://www.tinkoff.ru/collectmoney/crowd/kozlova.yuliya25/zhKrv98773/?short_link=7hj3obOJed2&httpMethod=GET'
  },
]

// отслеживание ширины окна
const currentWidth = ref(0);

function updateCurrentWidth() {
  currentWidth.value = window.innerWidth;
}

if (process.client) {
  // window.addEventListener('click', closeMenu);// closeMenu лежит не тут
  updateCurrentWidth();
  window.addEventListener('resize', updateCurrentWidth);
}

onBeforeUnmount(() => {
  // window.removeEventListener('click', closeMenu);
  window.removeEventListener('resize', updateCurrentWidth);
});


</script>

<style lang="postcss" scoped>

.menu-icon {
  color: white;
}

.header-navigation {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;

  &__button {
    background: var(--background);
    border: none;
    border-radius: 4px;
    padding: none;
    cursor: pointer;
    transform: scale(1.5);
  }

  &__desktop {
    display: flex;
    justify-content: space-around;
    width: 80%;
  }

  &__mobile {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  &__logo {
    position: absolute;
    top: 99px;
  }
}

</style>
  