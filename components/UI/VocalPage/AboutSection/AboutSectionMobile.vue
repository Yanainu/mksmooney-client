
<template>
  <div class="section about-section">
    <div class="about-section__left-content about-content">
      <div class="about-content__photo">
        <img  
          :style="{
            width: '100%'
          }"
          :src="sectionData?.leftPhotoUrlFormatted"
          alt="#" />
      </div>

      <div class="about-content__main about-main">
        <div class="about-main__text">
          <div class="about-main__text--is-primary primary">
            {{ sectionData?.title }} 
            <span class="primary__dark">{{ sectionData?.titleMainWord }}</span>
          </div>

          <div class="about-main__text--is-secondary secondary">
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

        <div class="about-main__button">
          <button>
            {{  sectionData?.buttonText }}
          </button>
        </div>
      </div>

    </div>
        
    <div class="about-section__right">
      <img  
        :style="{
          width: '100%'
        }"
        :src="rightPhotoUrlFormatted" 
        alt="#" />
    </div> 
  </div>
</template>

<script setup>

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
  /* align-items: flex-start; */

  height: 350px;

  &__left-content {
    display: flex;
    justify-content: space-between;
    gap: 17px;

    & img {
      width: 100%;
    }
  }

  &__right {
    /* max-width: 400px; */
    padding-top: 14px;

    /* width: 33%; */
    height: 100%;
    display: flex;
    align-items: flex-end;

    @media (max-width: 900px) {
      display: none;
    }

  }
}

.about-content {
  &__photo {
    min-width: 120px;
  }
}

.about-main {
  font-family: 'Gilroy';
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__text {
    &--is {
      &-primary {
        font-weight: 800;
        font-size: 72px;
        color: var(--light-blue);
        /* width: 610px; */
        width: 100%;
        /* width: 36%; */

        .primary__dark {
          color: v-bind(vocalPrimary);
        }
      }

      &-secondary {
        color: var(--dark-blue);
        font-weight: 400;
        font-size: 18px;
        line-height: 21.6px;
        width: 440px;

        .secondary__light {
          color: var(--light-blue);
          text-decoration: none;
        }
      }
    }

  }
  
}
</style>


