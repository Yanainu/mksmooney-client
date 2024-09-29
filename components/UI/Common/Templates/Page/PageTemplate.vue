<template>
  <div class="page">
    <div class="page__header">
      <Header />
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

// Components
const { 
  Header,
  Footer
 } = CommonComponents;
// import Main from '@/components/UI/Main/Main.vue';
// import Footer from '@/components/UI/Footer/Footer.vue';

</script>

<style lang="postcss">
.page {
  height: 100vh;
  /* width: 100vw; */
  padding: 40px 50px;

  @media (max-width: 600px) {
    padding: 20px 20px;
  }

  &__header {
    margin-bottom: 70px;
  }
}
</style>
