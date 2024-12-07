
<template>
  <div class="section about-section">
    <div class="about-section__left-content left-content">
      <div class="left-content__photo">
        <ContentImage 
          width="100%"
          class="photo-left"
          :src="getFormattedUrl(sectionData?.leftPhoto)"
        />
      </div>

      <ColorBgSpot 
        class="left-content__spot"
        :color="vocalSecondary"
        :shadow-size="'150px'"
      />

      <div class="left-content__main left-main">
        <div class="left-main__text">
          <div class="left-main__text--is-primary primary">
            {{  sectionData?.data?.title }} 
            <span class="primary__dark">
              {{ sectionData?.titleMainWord }}
            </span>
          </div>

          <div class="left-main__text--is-secondary secondary">
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

        <div class="left-main__button">          
          <ButtonLink
            :text="sectionData?.buttonText"
            :link="sectionData?.buttonLink"
            :color="vocalPrimary"
          />
        </div>
      </div>
    </div>
        
    <div 
      v-if="currentWidth >= 730"
      class="about-section__right about-right">
      <ContentImage 
        class="about-right__photo"
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
    /* justify-content: space-between; */
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

  &__photo {

  }

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

  &__spot {
    position: absolute;
    top: 140px;
    left: -100px;
  }

  &__photo {
    min-width: 120px;
    width: 11%;
  }
}

.left-main {
  font-family: 'Gilroy';
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__text {
    width: 543px;
    
    &--is {
      &-primary {
        font-weight: 800;
        font-size: 70px;
        color: var(--light-blue);
        letter-spacing: -4px;

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
</style>


