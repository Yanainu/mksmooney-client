<template>
    <div class="navigation-menu">
      <div v-for="menuItem in menuItems" :key="menuItem?.id" class="navigation-menu__item">
        <NavigationItem
          :title="menuItem?.title"
          :dropdown="menuItem?.dropdown"
          :link="menuItem?.link"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import NavigationItem from '@/components/UI/Header/HeaderNavigationItem.vue';
  import { ref } from 'vue';
  
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
      link: '/donate'
    },
  ]
  
  </script>
  
  <style lang="postcss" scoped>
  .navigation-menu {
    display: flex;
    justify-content: space-between;
    width: 50%;
    height: 100px;
  }
  
  </style>
  