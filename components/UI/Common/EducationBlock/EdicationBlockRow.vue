<template>
  <div class="education-row">
    <div class="education-row__left">
      <div 
        v-if="rowData.position === 'left'"
        class="left-content">

        <EducationItemContent 
          :content="rowData"
          side="left"
        />

      </div>
    </div>

    <div class="education-row__right">
      <div 
        v-if="rowData.position === 'right'"
        class="right-content">

        <EducationItemContent 
          :content="rowData"
          side="right"

        />

      </div>

      <nuxt-icon 
        class="education-row__dot"
        name="education-dot"
      />

    </div>
  </div>
</template>

<script setup>
import EducationItemContent from './EducationItemContent.vue';

defineProps({
  rowData: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style lang="postcss" scoped>
.education-row {
  display: flex;
  justify-content: space-between;
  

  &__left {
    width: 50%;
  }

  &__right {
    position: relative;
    width: 50%;
  }

  &__dot {
    color: var(--dark-blue);
    position: absolute;
    left: -5px;
    top: 16px;
    z-index: 2;
  }
}
</style>
