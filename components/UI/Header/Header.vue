<template>
    <header
      class="header"
    >
        <HeaderNavigation />
  
      <div class="header__navigation--mobile">
        <button
              class="header__adaptive-menu-button"
              @click="mobileMenuOpened = !mobileMenuOpened"
            >
            <!-- icon  -->
            </button>
      </div>
  
      <div class="header__logo">
        logo
        <!-- <Icon name="uil:menu-burger22" color="black" /> -->
  
      </div>
    </header>
  </template>
  
  <script setup>
  import HeaderNavigation from '@/components/UI/Header/HeaderNavigation.vue';
  // import IconLoader from '@/components/IconLoader/IconLoader.vue';
  // import IconMenuBurger from '@/assets/icons/menu-burger22.svg';
  // import IconMenuBurgerClose from '@/assets/icons/menu-burger--close.svg';
  // import IconAttach from '@/assets/icons/icon-attach.svg'
  import { ref } from 'vue';
  
  const mobileMenuOpened = ref(false);
  
  const headerDataMenuItemsMock = [
    {
      name: 'Обо мне',
      link: '#'
    },
    {
      name: 'Достижения',
      link: '#'
    },
    {
      name: 'Медиа',
      link: '#'
    },
    {
      name: 'Контакты',
      link: '#'
    },
    {
      name: 'Донат',
      link: '#'
    },
  ]
  // const { scrolled } = checkPageScroll();
  
  </script>
  
  <style lang="postcss" scoped>
  .header {
    position: sticky;
    top: 0;
    z-index: 10;
    padding: 20px;
  
    background: #0d1d40;
  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  
  }
  
  </style>
  