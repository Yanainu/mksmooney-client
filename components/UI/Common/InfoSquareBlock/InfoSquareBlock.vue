
<template>
  <div class="info-block-wrapper">
    <nuxt-link 
      :to="blockData?.link"
      class="info-block__link"
      target="_blank">
        <div 
          v-if="blockData?.isPhotoOnly"
          class="info-block--is-photo"
          :style="{
            backgroundImage: `url(${getFormattedUrl(blockData?.photo)})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }"
          >
        </div>

        <div 
          v-else 
          class="info-block"
          :class="{'info-block--hovered': isBlockHovered}"
          @mouseenter="handleHover(true)"
          @mouseleave="handleHover(false)">
          <div class="info-block__text-content text-content">
            <div class="text-content__top content-top">
              <div class="content-top__left">
                <div class="content-top__title">
                  {{ blockData?.title }}
                </div>
              </div>

              <div class="content-top__right">
                <div v-if="blockData?.hasArrowIconTop" class="content-top__right--is-icon">
                  <nuxt-icon
                    class="menu--closed"
                    name="menu-burger--closed"
                    @click="openMenu" 
                  />
                </div>  
                
                <div v-else class="content-top__right--is-text">
                  {{ blockData?.subTitle }}
                </div>
              </div>
            </div>

            <div class="text-content__bottom content-bottom">
              <div class="content-bottom__subtitle">
                {{ blockData?.description }}
              </div>

              <div 
                v-if="blockData?.hasArrowIconBottom"
                class="content-bottom__arrow-icon">

                <nuxt-icon
                  v-if="!isBlockHovered"
                  class="arrow-icon arrow-icon--position-bottom"
                  name="info-block-arrow--default"

                />

                <nuxt-icon
                  v-if="isBlockHovered"
                  class="arrow-icon arrow-icon--position-bottom"
                  name="info-block-arrow--hovered"
                />
                
              </div>
            </div>
          </div>

          <div 
            v-if="blockData?.photo" 
            class="info-block__image"
            :style="{
              backgroundImage: `url(${getFormattedUrl(blockData?.photo)})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }">
          </div>
        </div>
    </nuxt-link>
  </div>
</template>

<script setup>
import { 
  toRefs, 
  computed, 
  ref 
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
  minWidth: {
    type: String,
    default: '170px'
  }
});

const ColorsStore = Stores.ColorsStore();
const { 
  fateIncPrimary,
  vocalLight, 
} = toRefs(ColorsStore);

const PhotoURLComposable = Helpers.getPhotoUrl();
const { getFormattedUrl } = PhotoURLComposable;

const themeColor = computed(() => {
  if (props.theme === 'vocal') {
    return vocalLight.value;
  }
  return fateIncPrimary.value;
});

const isBlockHovered = ref(false);

const handleHover = (value) => {
  isBlockHovered.value = value;
}

</script>

<style lang="postcss" scoped>
.info-block-wrapper {
  min-height: 333px;
  width: 260px;

  @media (max-width: 1150px) {
    width: 100%;
  }

  @media (max-width: 800px) {
    width: 47%;
  }

  @media (max-width: 500px) {
    min-height: 220px;
  }
}

.info-block {
  border: 2px solid v-bind(themeColor);
  border-radius: 20px;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #FFFFFF;

  @media (max-width: 800px) {
    height: auto;
  }

  @media (max-width: 800px) {
    padding: 13px;
  }

  &--is {
    &-photo {
      height: 100%;
      border: 2px solid v-bind(themeColor);
      border-radius: 20px;
      overflow: hidden;
      border: none;
    }
  }

  &__image {
    width: 100%;
    height: 130px;
    min-height: 130px;
    max-height: 130px;
    border-radius: 20px;
    overflow: hidden;

    @media (max-width: 800px) {
      min-height: 150px;
      max-height: 150px;
    }

    @media (max-width: 600px) {
      min-height: 86px;
      max-height: 86px;
    }
  }

  &--hovered {
    transition: all 300ms ease-out;
    cursor: pointer;
    background: v-bind(vocalLight);

    .content-top__title,
    .content-bottom__subtitle,
    .content-top__right--is-text,
    .content-bottom__arrow-icon {
      color: #FFFFFF;
    }
  }

  &__link { 
    text-decoration: none;
  }
}

.content-top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;

  &__title {
    font-family: 'Gilroy';
    font-weight: 800;
    font-size: 24px;
    line-height: 24px;
    color: v-bind(themeColor);
    letter-spacing: -0.03em;
    margin-right: 10px;

    @media (max-width: 500px) {
      font-size: 14px;
      line-height: 17px;
    }
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
    min-height: 83px;
    color: var(--dark-blue);
    margin-bottom: 10px;

    @media (max-width: 500px) {
      font-size: 12px;
      line-height: 14px;
      min-height: auto;
    }
  }

  &__arrow-icon {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
    color: var(--dark-blue);

  }
}

.text-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.arrow-icon {
  @media (max-width: 500px) {
      transform: scale(0.6);
    }
}
</style>
  


