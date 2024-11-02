
<template>
  <SectionTemplate>
    <template #sectionTitle>
      {{ data?.title }} 
    </template>

    <template #sectionContent>
      <div
        :class="{ 'info-blocks--mobile': currentWidth < 800}"
        class="info-blocks">

        <ColorBgSpot 
          class="blocks-spot"
          :color="vocalSecondary"
          :shadow-size="'140px'"
        />

        <InfoSquareBlock
          v-for="block in data?.InfoSquareBlocks"
          class="info-blocks__item"
          :key="block.id"
          theme="vocal"
          :blockData="block"
          minWidth="171px"
          is-link
          wrapper-height="333px"
          width="25%"
        />

        <ColorBgSpot 
          v-if="currentWidth < 500"
          class="block4-spot"
          :color="vocalPrimary"
          :shadow-size="'170px'"
        />

      </div>
    </template>
  </SectionTemplate>
</template>

<script setup>
import { toRefs } from 'vue';
import { CommonComponents } from '~/components/UI';
import { 
  Helpers, 
  Stores 
} from '~/composables';

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
});

const WindowWidthComposable = Helpers.checkWindowWidth();
const { currentWidth } = toRefs(WindowWidthComposable);

const ColorsStore = Stores.ColorsStore();
const { 
  vocalPrimary,
  vocalSecondary
} = toRefs(ColorsStore);

</script>

<style lang="postcss" scoped>
.info-blocks {
  display: flex;
  gap: 20px;
  position: relative;
  flex-basis: 1;
  flex-grow: 1;

  &--mobile {
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;

    .info-blocks__item {
      height: 220px;
      width: 47%;

      &:nth-child(odd) {
        margin-top: 70px;
      }

      &:nth-child(4) {
        position: relative;
      }
    }

  }
}

.blocks-spot {
  position: absolute; 
  top: 100px;
  left: -50px;
}

.block4-spot {
  position: absolute; 
  top: 550px;
  right: -150px;
}
</style>
  


