
<template>  
  <div
    :class="{ 'info-blocks--mobile': currentWidth < 800}"
    class="info-blocks">

    <InfoSquareBlock
      v-for="block in data?.InfoSquareBlocks"
      class="info-blocks__item"
      :key="block.id"
      theme="vocal"
      :blockData="block"
      minWidth="171px"
    />

    <ColorBgSpot 
      v-if="currentWidth < 500"
      class="block4-spot"
      :color="vocalPrimary"
      :shadow-size="'170px'"
    />

  </div>

</template>

<script setup>
import { toRefs } from 'vue';
import { CommonComponents } from '~/components/UI';
import { 
  Helpers, 
  Stores 
} from '~/composables';

const { 
  InfoSquareBlock,
  ColorBgSpot
} = CommonComponents;

defineProps({
  data: {
    type: Object,
    default: () =>({}),
  },
});

const WindowWidthComposable = Helpers.checkWindowWidth();
const { currentWidth } = toRefs(WindowWidthComposable);

const ColorsStore = Stores.ColorsStore();
const { 
  vocalPrimary,
} = toRefs(ColorsStore);

</script>

<style lang="postcss" scoped>

</style>
  


