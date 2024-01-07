<template>
  <div class="block">

    <div class="block__title">
      <span v-if="block.titleLink">
        <a
          class="block__title-link"
          :href="block.titleLink"
          rel="noopener noreferrer"
          target="_blank"
        >
          {{ block.title }}
        </a>
        <span> ({{ block.additionalTitle }})</span>
      </span>

      <span v-else>
          {{ block.title }} ({{ block.additionalTitle }})
      </span>

    </div>
    <div class="block__description">
      

      <span v-if="block.hasSpecialLinks">
        Треки на     
        <a
          class="block__description-link"
          :href="block.descriptionLinkAmazon"
          rel="noopener noreferrer"
          target="_blank"
        >
          Amazon
        </a>
        <!-- <span> ({{ block.additionalTitle }})</span> -->
         и 
        <a
          class="block__description-link"
          :href="block.descriptionLinkSpotify"
          rel="noopener noreferrer"
          target="_blank"
        >
          Spotify
        </a>
        <!-- <span> ({{ block.additionalTitle }})</span> -->
      </span>

      

      <span v-else>
        {{ block.description }}
      </span>
    </div>
      
  </div>
</template>


<script setup>
// import { ref, onBeforeUnmount, onMounted, computed } from 'vue';

const props = defineProps({
  block: {
    type: Object,
    default: () => ({}),
  },
});

</script>

<style lang="postcss" scoped>
.block {
  margin-bottom: 10px;

  &__title {    
    font-size: 18px;
    padding: 4px;
    width: fit-content;
    border-bottom: 1px solid var(--wine-light);

    &-link {
      text-decoration: none;
      color: var(--wine-light);
      font-size: 18px;
      font-weight: 600;

      &:hover {
        color: var(--grey2)
      }
    }
  }

  &__description {
    padding: 8px;
    font-size: 15px;

    &-link {
      text-decoration: none;
      color: var(--wine-light);
      font-size: 18px;
      font-weight: 600;
      margin-left: 4px;
      /* margin-right: 2px; */

      &:hover {
        color: var(--grey2)
      }
    }
  }

}
</style>