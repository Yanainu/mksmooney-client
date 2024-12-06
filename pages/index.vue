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
        :data="mediaSectionData"
      />

      <VocalFeedbackSection 
        :data="feedbackSectionData"
        :feedbacks="feedbacks"
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
  VocalMediaSection,
  VocalFeedbackSection
} = VocalPageComponents;

const PageModel = Models.VocalPageStore();
const { 
  aboutSectionData,
  educationSectionData,
  workPlacesSectionData,
  achievementsSectionData,
  mediaSectionData,
  feedbackSectionData
} = storeToRefs(PageModel);

const FeedbacksStore = Models.FeedbacksStore();
const { 
  feedbacks,
} = storeToRefs(FeedbacksStore);

</script>

<style lang="postcss">
</style>
