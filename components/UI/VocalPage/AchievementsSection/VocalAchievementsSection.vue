
<template>
  <SectionTemplate>
    <template #sectionTitle>
      {{ data?.title }} 
    </template>

    <template #sectionContent>
      <AchievementsSectionDesktop 
        v-if="currentWidth > 950"
        class="about-section-mode--desktop"
        :data="data?.InfoSquareBlocks"
      />

      <AchievementsSectionMobile 
        v-else
        class="about-section-mode--mobile"
        :data="data"
      />
    </template>
  </SectionTemplate>
</template>

<script setup>
import { toRefs } from 'vue';
import { CommonComponents } from '~/components/UI';
import { Helpers } from '~/composables';
import AchievementsSectionDesktop from './AchievementsSectionDesktop.vue';
import AchievementsSectionMobile from './AchievementsSectionMobile.vue';

const { 
  SectionTemplate,
} = CommonComponents;

defineProps({
  data: {
    type: Object,
    default: () =>({}),
  },
});

const WindowWidthComposable = Helpers.checkWindowWidth();
const { currentWidth } = toRefs(WindowWidthComposable);

</script>

<style lang="postcss" scoped>

</style>
  


