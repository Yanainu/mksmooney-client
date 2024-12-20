
<template>
  <div class="section about-section">
    <div class="about-section__left-content left-content">
      <div class="left-content__top">
        <div class="left-content__top-photo">
          <ContentImage 
            width="100%"
            class="photo-left"
            :src="getFormattedUrl(sectionData?.leftPhoto)"
          />
        </div>

        <div class="left-content__top-text">
          <div class="left-content__top-text--is-primary primary">
            {{  sectionData?.title }} 
            <span class="primary__dark">
              {{ sectionData?.titleMainWord }}
            </span>
          </div>

          <div class="left-content__top-text--is-secondary secondary">
            {{  sectionData?.description }}

            <nuxt-link 
              class="secondary__light" 
              :to="sectionData?.descriptionLinkURL"
              target="_blank"
              >
              {{ sectionData?.descriptionLink }}
            </nuxt-link>
          </div>
        </div>
      </div>

      <div class="left-content__bottom">
        <div class="left-content__bottom-empty" />
        
        <div class="left-content__bottom-button">
          <ButtonLink
            :text="sectionData?.buttonText"
            :link="sectionData?.buttonLink"
            :color="vocalPrimary"
          />
        </div>
      </div>

      <ColorBgSpot 
        class="left-content__spot"
        :color="vocalSecondary"
        :shadow-size="'150px'"
      />
    </div>
        
    <div 
      v-if="currentWidth >= 730"
      class="about-section__right about-right">
      <ContentImage 
        class="photo-right"
        :src="getFormattedUrl(sectionData?.rightPhoto)"
      />
    </div> 
    
    <ColorBgSpot 
      class="about-right__spot--primary"
      :shadow-size="'200px'"
      :color="vocalPrimary"
    />

    <ColorBgSpot 
      class="about-right__spot--secondary"
      :sizshadow-sizee="'400px'"
      :color="vocalSecondary"
    />
  </div>
</template>

<script setup>
import { toRefs } from 'vue';

import { CommonComponents } from '~/components/UI';
import { Stores, Helpers } from '~/composables';

const { 
  ButtonLink,
  ContentImage,
  ColorBgSpot
} = CommonComponents;

defineProps({
  sectionData: {
    type: Object,
    default: () =>({}),
  },
});

const ColorsStore = Stores.ColorsStore();
const { 
  vocalPrimary,
  vocalSecondary
} = toRefs(ColorsStore);

const WindowWidthComposable = Helpers.checkWindowWidth();
const { currentWidth } = toRefs(WindowWidthComposable);

const MediaURLComposable = Helpers.getMediaUrl();
const { getFormattedUrl } = MediaURLComposable;

</script>
  
<style lang="postcss" scoped>
.about-section {
  display: flex;
  gap: 20px;
  height: 350px;
  width: 100%;
  justify-content: space-between;

  &__left-content {
    display: flex;
    gap: 17px;
  }
}

.about-right {
  height: 100%;
  width: 36%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  position: relative;
  border-radius: 20px;
  overflow: hidden;

  &__spot {
    &--primary {
      position: absolute;
      right: 0;
      top: 100px;
    }

    &--secondary {
      position: absolute;
      right: 100px;
      top: 350px;
    }
  }
}

.left-content {
  width: 65%;
  position: relative;
  display: flex;
  flex-direction: column;

  &__top {
    display: flex;
    gap: 17px;

    &-photo {
      min-width: 120px;
      width: 11%;
    }

    &-text {
      width: 543px;
      font-family: 'Gilroy';
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    
      &--is {
        &-primary {
          font-weight: 800;
          font-size: 70px;
          color: var(--light-blue);
          letter-spacing: -4px;

          animation: fadeIn 1.5s;

          @keyframes fadeIn {
            from { opacity: 0; }
            to   { opacity: 1; }
          }

          @media (max-width: 900px) {
            font-size: 56px;
          }

          .primary__dark {
            color: v-bind(vocalPrimary);
          }
        }

        &-secondary {
          color: var(--dark-blue);
          font-weight: 400;
          font-size: 18px;
          width: 100%;
          max-width: 440px;

          .secondary__light {
            color: var(--light-blue);
            text-decoration: none;
          }
        }
      }
    }
  }

  &__bottom {
    display: flex;
    gap: 17px;
    align-items: flex-end;
    height: 174px;

    &-empty {
      min-width: 120px;
      width: 11%;
    }

    &-button {

    }
  }

  &__spot {
    position: absolute;
    top: 140px;
    left: -100px;
  }

}

.photo-left {
  animation: fadeIn 1.8s;

  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
}

.photo-right {
  animation: fadeIn 2.1s;

  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
}
</style>


