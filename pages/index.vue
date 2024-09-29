<template>
  <PageTemplate>
    <template #pageContent>
      <VocalAboutSection />
      
    </template>
  </PageTemplate>
</template>

<script setup>
import { 
  toRefs,
} from 'vue';
import { storeToRefs } from 'pinia';
import { CommonComponents } from '@/components';
import { Models } from '~/composables';
import { VocalPageComponents } from '@/components';

// Components
const { PageTemplate } = CommonComponents;
const { VocalAboutSection } = VocalPageComponents;

const PageModel = Models.VocalPageStore();
const { 
  vocalPageData,
} = storeToRefs(PageModel);



// const config = useRuntimeConfig();
// const backgroundUrl = computed(() => `url('${config.public.baseURL}${vocalPageData?.VocalAboutMe}')`);

</script>

<style lang="postcss">



</style>
