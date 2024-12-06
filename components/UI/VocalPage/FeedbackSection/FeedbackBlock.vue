
<template>
  <div 
    v-if="isPublished"
    class="feedback-block"
  >
    <div class="feedback-block__title">
      {{ author }}
    </div>
  
    <div class="feedback-block__description">
      {{ text }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  blockData: {
    type: Object,
    default: () =>({}),
  },
});

const text = computed(() => props.blockData?.attributes?.text_markdown);
const author = computed(() => props.blockData?.attributes?.author);
const isPublished = computed(() => props.blockData?.attributes?.publish);

</script>

<style lang="postcss" scoped>
.feedback-block {
  padding: 30px;
  border: 2px solid var(--light-blue);
  border-radius: 20px;
  width: 60%;
  margin-bottom: 20px;


  @media (max-width: 1050px) {
    width: 70%;
  }

  @media (max-width: 700px) {
    width: 100%;
  }

  &__title {
    color: var(--light-blue);
    font-family: 'Gilroy';
    font-weight: 800;
    font-size: 24px;
    line-height: 24px;
    letter-spacing: -0.03em;
    text-transform: uppercase;
    margin-bottom: 25px;
  }

  &__description {
    color: var(--dark-blue);
    font-family: 'Lack';
    font-size: 14px;
    line-height: 16.8px;
  }

}

</style>
  


