<template>
  <header
    class="header"
  >
    <HeaderNavigation />
  </header>
</template>

<script setup>
import HeaderNavigation from '@/components/UI/Header/HeaderNavigation.vue';

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
  padding: 20px;
  height: 150px;
  background: var(--black);

  @media (max-width: 600px) {
    height: fit-content;
  }
}
</style>
