
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
      <ColorBgSpot 
        class="info-blocks__left-spot"
        :color="vocalPrimary"
        :shadow-size="'140px'"
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
      <ColorBgSpot 
        class="info-blocks__right-spot"
        :color="vocalSecondary"
        :shadow-size="'250px'"
      />
    </div>

  </div>
</template>

<script setup>
import { computed, toRefs } from 'vue';
import { CommonComponents } from '~/components/UI';
import { Stores } from '~/composables'

const { 
  InfoSquareBlock,
  ColorBgSpot
} = CommonComponents;

const props = defineProps({
  data: {
    type: Object,
    default: () =>({}),
  },
});

const ColorsStore = Stores.ColorsStore();
const { 
  vocalPrimary,
  vocalSecondary
} = toRefs(ColorsStore);

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
    position: relative;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    width: 77%;

    @media (max-width: 950px) {
      gap: 14px;
    }

    .info-blocks__left-spot {
      position: absolute;
      top: 250px;
      left: 0;
    }

    &__item {
      flex-grow: 1;
    }
  }

  &__right-grid {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 23%;
    height: 100%;

    .info-blocks__right-spot {
      position: absolute;
      top: 200px;
      right: 0;
    }

    .info-blocks__item:first-child {
      margin-bottom: 20px;
    }


  }
}
</style>
  


