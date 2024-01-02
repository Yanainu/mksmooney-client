<template>
    <header
      class="header"
    >
      <HeaderNavigation />
  
      
    </header>
  </template>
  
  <script setup>
  import HeaderNavigation from '@/components/UI/Header/HeaderNavigation.vue';
  // import Logo from '@/components/Logo/Logo.vue';
  // import HeaderNavigationMobile from '@/components/UI/Header/HeaderNavigationMobile.vue';

  import { ref } from 'vue';
  
  
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

  
  
  </script>
  
  <style lang="postcss" scoped>
  .header {
    /* position: sticky;
    top: 0;
    z-index: 10; */
    padding: 20px;
    height: 120px;
  
    background: var(--black);

  
  }
  
  </style>
  