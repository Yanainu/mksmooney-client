
<template>
  <div class="info-blocks">

    <div class="info-blocks__left-grid">
      <InfoSquareBlock
        v-for="block in leftGridData"
        class="info-blocks__item"
        :key="block.id"
        theme="vocal"
        :blockData="block"
        wrapperHeight="200px"
        width="30%"
      />
    </div>

    <div class="info-blocks__right-grid">
      <InfoSquareBlock
        v-for="block in rightGridData"
        class="info-blocks__item"
        :key="block.id"
        theme="vocal"
        :blockData="block"
        wrapperHeight="200px"
        width="100%"
        photo-fill-space
      />
    </div>

  </div>
</template>

<script setup>
import { computed } from 'vue';
import { CommonComponents } from '~/components/UI';

const { 
  InfoSquareBlock,
} = CommonComponents;

const props = defineProps({
  data: {
    type: Object,
    default: () =>({}),
  },
});

const leftGridData = computed(() => {
  if (props.data?.length) {
    const apiData = [...props.data]
    apiData?.splice(2, 0, { id: 'empty1' });
    apiData?.splice(4, 0, { id: 'empty2' });
    apiData?.splice(6, 0, { id: 'empty3' });

    apiData.splice(9, 2)
    return apiData;
  }
  return [];
})

const rightGridData = computed(() => {
  if (props.data?.length) {
    const apiData = [...props.data]
    const result = apiData.slice(-2);
    return result;
  }
  return [];
})

</script>

<style lang="postcss" scoped>
.info-blocks {
  display: flex;
  height: 640px;
  
  &__left-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    width: 77%;

    &__item {
      flex-grow: 1;
    }
  }

  &__right-grid {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    width: 23%;
  }
}
</style>
  


