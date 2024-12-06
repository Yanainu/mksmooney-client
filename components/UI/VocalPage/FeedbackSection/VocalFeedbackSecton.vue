
<template>
  <SectionTemplate>
    <template #sectionTitle>
      {{ data?.title }} 
    </template>

    <template #sectionContent>
      <div class="feedback-section">
        <FeedbackBlock
          v-for="item in feedbacks"
          class="info-blocks__item"
          :key="item.id"
          :blockData="item"
        />
      </div>



      <!-- будущая форма, работает, пока не используем - нужно доделать визуал -->

      <div class="form-temporary-wrap">
        <button 
          :style="{
            height: '50px',
          }"
          @click="showForm"
        >
          оставить отзыв
        </button>

        <div 
          v-if="isFormVisible"
          class="form-temporary"
        >
          <FeedbackForm />

          <button 
            @click="hideForm"
          >
            закрыть форму
          </button>
        </div>
      </div>

     

    </template>
  </SectionTemplate>
</template>

<script setup>
import { computed, toRefs } from 'vue';
import { CommonComponents } from '~/components/UI';
import { Stores } from '~/composables';
import FeedbackBlock from './FeedbackBlock.vue'
import FeedbackForm from './FeedbackForm.vue';

const { 
  SectionTemplate,
  InfoSquareBlock,
  ColorBgSpot
} = CommonComponents;

defineProps({
  data: {
    type: Object,
    default: () =>({}),
  },
  feedbacks: {
    type: Array,
    default: () => []
  }
});

const isFormVisible = ref(false);

const showForm = () => {
  isFormVisible.value = true;
}
const hideForm = () => {
  isFormVisible.value = false;
}
</script>

<style lang="postcss" scoped>
.feedback-section {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 140px;

  @media (max-width: 700px) {
    padding-left: 0;
  }
}
.form-temporary {
  display: flex;
  flex-direction: column;

  &-wrap {
    display: flex;
    flex-direction: column;
  }
}
</style>
  


