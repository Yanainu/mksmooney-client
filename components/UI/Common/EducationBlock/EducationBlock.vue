<template>
  <div class="edication">
    <div class="edication__grid">
      <EdicationBlockRow 
        v-for="block in blocksData"
        :key="block.id"
        :rowData="block"
      />
    </div>

    <div class="arrow"></div>
  </div>
</template>

<script setup>
import { toRefs } from 'vue';
import { Stores } from '~/composables';
import EdicationBlockRow from './EdicationBlockRow.vue'

defineProps({
  blocksData: {
    type: Object,
    default: () => ({}),
  },
});

const ColorsStore = Stores.ColorsStore();
const { 
  vocalPrimary,
} = toRefs(ColorsStore);

</script>

<style lang="postcss" scoped>
.edication {
  position: relative;
  width: 64%;

  display: flex;
  justify-content: center;
  align-items: center;

  &__grid {
    width: 100%;
  }
}

.arrow {
  position: absolute;
  top: 0;
  display: inline-block;
  width: 1px;
  height: 260px;
  margin: 0 13.8px;
  border-radius: 9999px;
  background-color: v-bind(vocalPrimary);
}

.arrow::before,
.arrow::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: calc(50% - 1px);
  width: 1.5px;
  height: 25px;
  border-radius: 9999px;
  background-color: v-bind(vocalPrimary);
  transform-origin: 50% calc(100% - 0.5px);
}

.arrow::before {
  transform: rotate(35deg);
}

.arrow::after {
  transform: rotate(-35deg);
}
</style>
