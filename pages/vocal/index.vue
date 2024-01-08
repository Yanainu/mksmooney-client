<template>
  <div class="vocal">
    <Header />

      <div class="main">
        vocal page
      </div>
    <Footer />
  </div>
</template>
<script setup>

import Header from '@/components/UI/Header/Header.vue';
import Footer from '@/components/UI/Footer/Footer.vue';

</script>

<style lang="postcss">
.vocal {
  height: 100vh;
}

.main {
  height: 100%;
  text-align: center;
  font-size: 20px;
}
</style>
