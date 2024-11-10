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

      <VocalMediaSection 
        :data="playerSectionData"
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
  VocalAchievementsSection,
  VocalMediaSection
} = VocalPageComponents;

const PageModel = Models.VocalPageStore();
const { 
  aboutSectionData,
  educationSectionData,
  workPlacesSectionData,
  achievementsSectionData,
  playerSectionData
} = storeToRefs(PageModel);

</script>

<style lang="postcss">
</style>
