
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

        <ColorBgSpot 
          class="feedback-section__spot1"
          :color="vocalPrimary"
          :shadow-size="'150px'"
        />

        <ColorBgSpot 
          class="feedback-section__spot2"
          :color="vocalSecondary"
          :shadow-size="'150px'"
        />

        <ColorBgSpot 
          class="feedback-section__spot3"
          :color="vocalSecondary"
          :shadow-size="'150px'"
        />

        <ColorBgSpot 
          class="feedback-section__spot4"
          :color="vocalPrimary"
          :shadow-size="'120px'"
        />

        <ColorBgSpot 
          class="feedback-section__spot5"
          :color="vocalPrimary"
          :shadow-size="'200px'"
        />

        <ColorBgSpot 
          class="feedback-section__spot6"
          :color="vocalSecondary"
          :shadow-size="'200px'"
        />
      </div>



      <!-- будущая форма, работает, пока не используем - нужно доделать визуал -->

      <!-- <div class="form-temporary-wrap">
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
      </div> -->

     

    </template>
  </SectionTemplate>
</template>

<script setup>
import { computed, toRefs } from 'vue';
import { CommonComponents } from '~/components/UI';
import { Stores } from '~/composables';
import FeedbackBlock from './FeedbackBlock.vue'
// import FeedbackForm from './FeedbackForm.vue';

const { 
  ColorBgSpot,
  SectionTemplate,
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

// для формы

// const isFormVisible = ref(false);

// const showForm = () => {
//   isFormVisible.value = true;
// }
// const hideForm = () => {
//   isFormVisible.value = false;
// }

const ColorsStore = Stores.ColorsStore();
const { 
  vocalPrimary,
  vocalSecondary
} = toRefs(ColorsStore);

</script>

<style lang="postcss" scoped>
.feedback-section {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 140px;
  position: relative;

  @media (max-width: 700px) {
    padding-left: 0;
  }

  &__spot1 {
    position: absolute;
    top: 200px;
    left: 150px;
  }

  &__spot2 {
    position: absolute;
    top: 500px;
    right: 400px;
  }

  &__spot3 {
    position: absolute;
    top: 1000px;
    left: 200px;
  }

  &__spot4 {
    position: absolute;
    top: 1700px;
    right: 400px;
  }

  &__spot5 {
    position: absolute;
    top: 2300px;
    left: 200px;
  }

  &__spot6 {
    position: absolute;
    top: 2500px;
    right: 300px;
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
  


