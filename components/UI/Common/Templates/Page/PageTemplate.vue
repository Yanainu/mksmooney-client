<template>
  <div class="page">
    <CommonHeader 
      :currentPage="currentPage"
    />

    <div class="page__content">
      <slot name="pageContent" />
    </div>

    <CommonFooter 
      :currentPage="currentPage"
    />
  </div>
</template>

<script setup>
import { CommonComponents } from '@/components';

const { 
  CommonHeader,
  CommonFooter
 } = CommonComponents;

 defineProps({
  currentPage: {
    type: String,
    default: 'vocal',
  },
});
</script>

<style lang="postcss">
.page {
  padding: 40px 50px;

  &__content {
    padding-bottom: 135px;

  }
  @media (max-width: 750px) {
    padding: 30px;
  }

  @media (max-width: 600px) {
    padding: 20px;
  }

  &__header {
    margin-bottom: 70px;

    @media (max-width: 600px) {
      margin-bottom: 50px;
    }
  }
}
</style>
