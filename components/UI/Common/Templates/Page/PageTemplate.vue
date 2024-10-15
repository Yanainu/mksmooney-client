<template>
  <div class="page">
    <div class="page__header">
      <CommonHeader />
    </div>

    <div class="page__content">
      <slot name="pageContent" />
    </div>

    <!-- <div class="page__footer">
      <Footer />
    </div> -->
  </div>
</template>

<script setup>
import { CommonComponents } from '@/components';

const { 
  CommonHeader,
  Footer
 } = CommonComponents;
</script>

<style lang="postcss">
.page {
  height: 100vh;
  padding: 40px 50px;

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
