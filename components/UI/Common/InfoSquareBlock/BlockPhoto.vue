
<template>
  <div 
    class="info-block--is-photo"
    :style="{
      backgroundImage: `url(${getFormattedUrl(blockData?.photo)})`,
      backgroundPosition: imagePosition,
      backgroundSize: 'cover',
    }">
  </div>
</template>

<script setup>
import { 
  toRefs, 
  computed, 
} from 'vue';

import { 
  Helpers, 
  Stores 
} from '~/composables';

const props = defineProps({
  blockData: {
    type: Object,
    default: () =>({}),
  },
  theme: {
    type: String,
    default: 'vocal',
  },
  imagePosition: {
    type: String,
    default: 'top',
  }
});

const ColorsStore = Stores.ColorsStore();
const { 
  fateIncPrimary,
  vocalLight, 
} = toRefs(ColorsStore);

const MediaURLComposable = Helpers.getMediaUrl();
const { getFormattedUrl } = MediaURLComposable;

const themeColor = computed(() => {
  if (props.theme === 'vocal') {
    return vocalLight.value;
  }
  return fateIncPrimary.value;
});

</script>

<style lang="postcss" scoped>

.info-block {
  flex-grow: 1;

  &--is {
    &-photo {
      height: 100%;
      border: 2px solid v-bind(themeColor);
      border-radius: 20px;
      overflow: hidden;
      border: none;

      animation: fadeIn 1.3s;

      @keyframes fadeIn {
        from { opacity: 0; }
        to   { opacity: 1; }
      }
    }
  }

  @media (max-width: 800px) {
    height: auto;
  }

  @media (max-width: 800px) {
    padding: 13px;
  }
}
</style>
  


