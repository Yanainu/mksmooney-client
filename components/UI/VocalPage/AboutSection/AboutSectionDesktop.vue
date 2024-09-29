
<template>
  <div class="section about-section">
    <div class="about-section__left-content left-content">

      <div class="left-content__photo">
        <ImageWrapper >
          <img  
            :style="{
              width: '100%'
            }"
            :src="sectionData?.leftPhotoUrl"
            alt="#" />
        </ImageWrapper>
      </div>

      <ColorBgSpot 
        class="left-content__spot"
        :color="vocalSecondary"
        :shadowSize="'150px'"
      />

      <div class="left-content__main left-main">
        <div class="left-main__text">
          <div class="left-main__text--is-primary primary">
            {{  sectionData?.data?.title }} 
            <span class="primary__dark">{{ sectionData?.data?.titleMainWord }}</span>
          </div>

          <div class="left-main__text--is-secondary secondary">
            {{  sectionData?.data?.description }}

            <nuxt-link 
              class="secondary__light" 
              :to="sectionData?.data?.descriptionLinkURL"
              target="_blank"
              >
              {{ sectionData?.data?.descriptionLink }}
            </nuxt-link>
          </div>
        </div>

        <div class="left-main__button">          
          <ButtonLink
            :text="sectionData?.data?.buttonText"
            :link="sectionData?.data?.buttonLink"
            :color="vocalPrimary"
          />
        </div>
      </div>

    </div>
        
    <div class="about-section__right about-right">
      <ImageWrapper>
        <img  
          :style="{
            width: '100%'
          }"
          :src="sectionData?.rightPhotoUrl" 
          alt="#" />
      </ImageWrapper>

      <ColorBgSpot 
        class="about-right__spot--primary"
        :shadowSize="'200px'"
        :color="vocalPrimary"
      />

      <ColorBgSpot 
        class="about-right__spot--secondary"
        :sizshadowSizee="'400px'"
        :color="vocalSecondary"
      />
    </div> 
  </div>
</template>

<script setup>
import { CommonComponents } from '~/components/UI';

const { 
  ButtonLink,
  ImageWrapper,
  ColorBgSpot
} = CommonComponents;

const props = defineProps({
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
    justify-content: space-between;
    gap: 17px;


    & img {
      width: 30%;
    }
  }
}

.about-right {
  height: fit-content;
  display: flex;

  position: relative;

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
    width: 120px;
    border-radius: 15px;
    overflow: hidden;
    height: fit-content;
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


