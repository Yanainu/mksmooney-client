<template>
  <div class="navigation-item">
    <nuxt-link class="navigation-item__link" :to="link">
      {{ title }} 
    </nuxt-link>
  </div>
</template>

<script setup>

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  link: {
    type: String,
    default: '',
  },
});
</script>

<style lang="postcss" scoped>

.navigation-item {
  transition: all 300ms ease-out;

  &__link {
    color: var(--white);
    font-size: 12px;
    text-decoration: none;

    /* &:hover {
      color: var(--violet-light);
      border-radius: 4px;
    } */

  }
}



</style>
