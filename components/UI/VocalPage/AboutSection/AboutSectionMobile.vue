
<template>
  <div class="section about-section">
    <div class="about-section__photo--first">
      <ContentImage 
        width="100%"
        class="photo-left"
        :src="getFormattedUrl(sectionData?.leftPhoto)"
      />
    </div>

    <div class="about-section__title title">
      <div class="title--is-primary primary">
        {{  sectionData?.title }} 
        <span class="primary__dark">
          {{ sectionData?.titleMainWord }}
        </span>
      </div>
    </div>

    <div class="about-section__photo--second">
      <ContentImage 
        width="100%"
        class="photo-left"
        :src="getFormattedUrl(sectionData?.rightPhoto)"
      />
    </div>

    <div class="about-section__description description">
      {{ sectionData?.description }}

      <nuxt-link 
        class="description__link" 
        :to="sectionData?.descriptionLinkURL"
        target="_blank"
        >
        {{ sectionData?.descriptionLink }}
      </nuxt-link>
    </div>

    <div class="about-section__button-link">
      <ButtonLink
        :text="sectionData?.buttonText"
        :link="sectionData?.buttonLink"
        :color="vocalPrimary"
      />
    </div>
  </div>
</template>

<script setup>
import { toRefs } from 'vue';
import { CommonComponents } from '~/components/UI';
import { Stores, Helpers } from '~/composables';

const { 
  ButtonLink,
  ContentImage
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
} = toRefs(ColorsStore);

const MediaURLComposable = Helpers.getMediaUrl();
const { getFormattedUrl } = MediaURLComposable;

</script>
  
<style lang="postcss" scoped>
.about-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__photo {
    margin-bottom: 10px;

    &--first {
      width: 109px;
    }

    &--second {
      margin-bottom: 20px;
    }
  }

  &__title { 
    font-family: 'Gilroy';
    font-weight: 800;
    font-size: 48px;
    text-align: center;
    letter-spacing: -2px;
    margin-bottom: 20px;
  }

  &__description {
    color: var(--dark-blue);
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 20px;
    padding: 0 30px;
  }
}

.description {
  &__link {
    color: var(--light-blue);
    text-decoration: none;
  }
}

.primary {
  color: var(--light-blue);

  &__dark {
    color: v-bind(vocalPrimary);
  }
}
</style>


