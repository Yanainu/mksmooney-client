
<template>
  <div 
    :class="{'info-block--empty': isEmpty}"
    class="info-block">

    <div class="info-block__top content-top">
      <div class="content-top__title">
        {{ blockData?.title }}
      </div>

      <div class="content-top__subtitle">
        {{ blockData?.subTitle }}
      </div>
    </div>
    
    <div class="info-block__top content-bottom">
      <div class="content-bottom__subtitle">
        {{ blockData?.description }}
      </div>
    </div>

  </div>
</template>

<script setup>
import { 
  toRefs, 
  computed, 
} from 'vue';

import { Stores } from '~/composables';
 
const props = defineProps({
  blockData: {
    type: Object,
    default: () =>({}),
  },
  theme: {
    type: String,
    default: 'vocal',
  },
  height: {
    type: String,
    default: '100%'
  }
});

const ColorsStore = Stores.ColorsStore();
const { 
  fateIncPrimary,
  vocalLight, 
} = toRefs(ColorsStore);

const themeColor = computed(() => {
  if (props.theme === 'vocal') {
    return vocalLight.value;
  }
  return fateIncPrimary.value;
});

const isEmpty = computed(() => {
  if (props.blockData?.id) {
    return String(props.blockData?.id).includes('empty')
  }
  return true;
});

</script>

<style lang="postcss" scoped>
.info-block {
  border: 2px solid v-bind(themeColor);
  border-radius: 20px;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #FFFFFF;

  &--empty {
    border: none;
    background: transparent;
  }
}

.content-top {
  display: flex;
  justify-content: space-between;

  &__title {
    font-family: 'Gilroy';
    font-weight: 800;
    font-size: 24px;
    line-height: 24px;
    color: v-bind(themeColor);
    letter-spacing: -0.03em;
    margin-right: 10px;
    text-transform: uppercase;
    text-wrap: wrap;

    @media (max-width: 1100px) {
      font-size: 20px;
    }

    @media (max-width: 500px) {
      font-size: 14px;
      line-height: 17px;
    }
  }

  &__subtitle {
    font-family: 'Lack';
    color: var(--dark-blue);
    font-size: 14px;

  }

  &__right {
    &--is {
      &-text {
        font-family: 'Lack';
        color: var(--dark-blue);
        font-size: 14px;
        line-height: 16.8px;
        margin-top: 5px;
        text-wrap: nowrap;

        @media (max-width: 500px) {
          margin-top: 0;
          font-size: 12px;
          line-height: 14px;
        }
      }
    }
  }
}

.content-bottom {
  &__subtitle {
    color: var(--dark-blue);
    font-size: 14px;

    @media (max-width: 500px) {
      font-size: 12px;
      line-height: 14px;
      min-height: auto;
    }
  }
}

.text-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

</style>
  


