<template>
  <div class="navigation-item">
    <nuxt-link 
      v-if="isNewTab"
      class="navigation-item__link" 
      :to="link" 
      target="_blank"
    >
      {{ title }} 
    </nuxt-link>

    <nuxt-link 
      v-else
      class="navigation-item__link" 
      :to="link" 
    >
      {{ title }} 
    </nuxt-link>
  </div>
</template>

<script setup>

 defineProps({
  title: {
    type: String,
    default: '',
  },
  link: {
    type: String,
    default: '',
  },
  isNewTab: {
    type: Boolean,
    default: false,
  }
});
</script>

<style lang="postcss" scoped>

.navigation-item {
  transition: all 300ms ease-out;

  &__link {
    color: var(--white);
    font-size: 12px;
    text-decoration: none;
    text-transform: uppercase;
  }
}
</style>
