
<template>  
  <div class="mobile-info-blocks">
    <div class="mobile-info-blocks__top-grid top-grid">
      <InfoSquareBlock
        class="top-grid__photo-block"
        theme="vocal"
        :blockData="photoBlock"
        width="50%"
        photo-fill-space
        photoPosition="center"
      />

      <div class="top-grid__items">
        <InfoSquareBlock
          v-for="block in topGridData"
          class="top-grid__item"
          :key="block.id"
          theme="vocal"
          :blockData="block"
          width="100%"
          mobileHeight="135px"  
          wrapper-height="135px"
          photo-fill-space        
        />
      </div>

      <ColorBgSpot 
        class="top-grid__spot"
        :color="vocalPrimary"
        :shadow-size="'140px'"
      />
    </div>

    <div class="mobile-info-blocks__bottom-grid bottom-grid">
      <div class="bottom-grid__left">
        <InfoSquareBlock
          v-for="block in bottomGridLeftData"
          class="bottom-grid__item"
          :key="block.id"
          theme="vocal"
          :blockData="block"
          mobileHeight="135px"
          wrapper-height="135px"
          width="100%"          
        />
      </div>

      <div class="bottom-grid__right">
        <InfoSquareBlock
          v-for="block in bottomGridRightData"
          class="bottom-grid__item"
          :key="block.id"
          theme="vocal"
          :blockData="block"
          mobileHeight="135px"    
          wrapper-height="135px"
          width="100%"                
        />
      </div>

      <ColorBgSpot 
        class="bottom-grid__spot"
        :color="vocalSecondary"
        :shadow-size="'130px'"
      />
    </div>

  </div>
</template>

<script setup>
import { toRefs, computed } from 'vue';
import { CommonComponents } from '~/components/UI';
import { 
  Stores 
} from '~/composables';

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

const photoBlock = computed(() => {
  if (props.data?.length) {
    const apiData = [...props.data];

    const result = apiData?.find(item => item.isPhotoOnly === true);
    return result;
  }
  return {};
})

const topGridData = computed(() => {
  if (props.data?.length) {
    const apiData = [...props.data];

    const firstDatesBlocks = apiData?.filter(item => item.subTitle === '(2011)');
    return firstDatesBlocks;
  }
  return [];
})

const bottomGridLeftData = computed(() => {
  if (props.data?.length) {
    const apiData = [...props.data];
    const filteredBlocks = apiData?.filter(item => {
      return String(item.title).includes('Твой путь') || String(item.title).includes('Hinode')   
    });

    filteredBlocks?.splice(1, 0, { id: 'empty1' });

    return filteredBlocks;
  }
  return [];
})

const bottomGridRightData = computed(() => {
  if (props.data?.length) {
    const apiData = [...props.data];
    const filteredBlocks = apiData?.filter(item => {
      return String(item.title).includes('J-FEST') 
        || String(item.title).includes('World Karaoke Grand')  
        || String(item.title).includes('Игра')  
    });

    return filteredBlocks;
  }
  return [];
})
</script>

<style lang="postcss" scoped>
.mobile-info-blocks {
  width: 100%;

  &__top-grid {
    width: 100%;
    display: flex;
    margin-bottom: 10px;
  }

  &__bottom-grid {
    display: flex;
    gap: 10px;
  }
}

.top-grid {
  position: relative;
  width: 100%;

  &__photo-block {
    width: 50%;
    margin-right: 10px;
  }

  &__items {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__spot {
    position: absolute;
    left: 0;
    top: 250px;
  }
}

.bottom-grid {
  position: relative;
  width: 100%;

  &__left {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__right {
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 10px;
  }

  &__spot {
    position: absolute;
    right: 150px;
    top: 270px;
  }
}
</style>
  


