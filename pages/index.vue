<template>
  <PageTemplate>
    <template #pageContent>
      <VocalAboutSection 
        :data="aboutSectionData"
      />

      <VocalEducationSection 
        :data="educationSectionData"
      />

      <VocalWorkPlacesSection
        :data="workPlacesSectionData"
      />

      <VocalAchievementsSection
        :data="achievementsSectionData"
      />

    </template>
  </PageTemplate>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { 
  CommonComponents, 
  VocalPageComponents
} from '@/components';

import { Models } from '~/composables';

const { PageTemplate } = CommonComponents;

const { 
  VocalAboutSection,
  VocalEducationSection,
  VocalWorkPlacesSection,
  VocalAchievementsSection
} = VocalPageComponents;

const PageModel = Models.VocalPageStore();
const { 
  aboutSectionData,
  educationSectionData,
  workPlacesSectionData,
  achievementsSectionData
} = storeToRefs(PageModel);

</script>

<style lang="postcss">
</style>
