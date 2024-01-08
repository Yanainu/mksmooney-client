<template>
  <div class="mobile-navigation-menu">
    <div v-for="menuItem in menuItems" :key="menuItem.name" class="mobile-navigation-menu__item">
      <HeaderNavigationItemMobile 
        :title="menuItem.title"
        :link="menuItem.link"
        :dropdown="menuItem.dropdown"
      />
    </div>
  </div>
</template>

<script setup>
import HeaderNavigationItemMobile from '@/components/UI/Header/HeaderNavigationItemMobile.vue';

defineProps({
  menuItems: {
    type: Object,
    default: () => ({}),
  },

});
</script>

<style lang="postcss" scoped>
.mobile-navigation-menu {
  /* min-width: 220px; */
  position: absolute;
  right: 0;

  display: flex;
  flex-direction: column;
  background: var(--grey);
  transition: all 300ms ease-out;

  /* box-shadow: 0px 0px 4px rgba(85, 64, 229, 0.25), 0px 20px 32px rgba(99, 99, 99, 0.32); */
  border-radius: 20px;
  overflow: hidden;

  z-index: 1;

  &__item {
    border-radius: 0;
    /* padding: 8px 0;  */
    font-size: 16px;
  }

  /* &__button {
    width: 100%;
    padding-top: 12px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
  } */

  @media (max-width: 600px) {
    width: 100%;
    border-radius: 0px 0px 8px 8px;
    box-shadow: 0px 2px 4px #0d1d40;
    top: 60px;
  }
}

</style>
