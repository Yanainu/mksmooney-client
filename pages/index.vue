<template>
  <PageTemplate>
    <template #pageContent>
      <VocalAboutSection 
        :data="aboutSectionData"
      />

      <VocalEducationSection 
        :data="educationSectionData"
      />

    </template>
  </PageTemplate>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { toRefs } from 'vue';

import { 
  CommonComponents, 
  VocalPageComponents 
} from '@/components';

import { 
  Models, 
  Stores 
} from '~/composables';

// Components
const { PageTemplate } = CommonComponents;

const { 
  VocalAboutSection,
  VocalEducationSection
} = VocalPageComponents;

const PageModel = Models.VocalPageStore();
const { 
  aboutSectionData,
  educationSectionData
} = storeToRefs(PageModel);

const ColorsStore = Stores.ColorsStore();
const { 
  vocalPrimary,
  vocalSecondary
} = toRefs(ColorsStore);

</script>

<style lang="postcss">
</style>
