<template>
  <div class="coaching">
    <Header />

      <div class="main">
        coaching page
      </div>
    <Footer />
  </div>
</template>
<script setup>

import Header from '@/components/UI/Header/Header.vue';
import Footer from '@/components/UI/Footer/Footer.vue';

</script>

<style lang="postcss">
.coaching {
  height: 100vh;
}

.main {
  height: 100%;
  text-align: center;
  font-size: 20px;
}
</style>
