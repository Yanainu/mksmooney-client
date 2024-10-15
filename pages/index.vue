<template>
  <PageTemplate>
    <template #pageContent>
      <VocalAboutSection />
      
    </template>
  </PageTemplate>
</template>

<script setup>
// import { storeToRefs } from 'pinia';
import { CommonComponents , VocalPageComponents } from '@/components';
// import { Models } from '~/composables';

// Components
const { PageTemplate } = CommonComponents;
const { VocalAboutSection } = VocalPageComponents;

// const PageModel = Models.VocalPageStore();
// const { 
//   vocalPageData,
// } = storeToRefs(PageModel);

</script>

<style lang="postcss">
</style>
