<template>
  <div class="info-item">
    <!-- <button
      class="info-item__button"
      type="button"
      @click="toggleMenu">
      {{ itemData.title }}
    </button> -->

    <div class="info-item__main-title">
      {{ itemData.title }}
    </div>

    <div  class="block__info">
      <!-- v-if="dropdownVisible" -->
      <div  
        v-for="infoItem in itemData.info"
        :key="infoItem.title"
        class="block__info-item info-item">

        <div class="info-item__title">
          <span v-if="infoItem.link">
            <a
              class="info-item__link"
              :href="infoItem.link"
              rel="noopener noreferrer"
              target="_blank"
            >
              {{ infoItem.title }}
            </a>
            <span> ({{ infoItem.additionalTitle }})</span>
          </span>

          <span v-else>
             {{ infoItem.title }} ({{ infoItem.additionalTitle }})
          </span>

        </div>

        <div class="info-item__description">
          {{ infoItem.description }}
        </div>  
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onBeforeUnmount, onMounted, computed } from 'vue';

const props = defineProps({
  
  itemData: {
    type: Object,
    default: () => ({}),
  },

});


const dropdownVisible = ref(false);

// переключение видимости меню по клику (для мобильной версии)
function toggleMenu() {
  // window.removeEventListener('click', closeMenu);
  dropdownVisible.value = !dropdownVisible.value;
}

</script>

<style lang="postcss" scoped>
.info-item {
  margin-bottom: 12px;

  &__button {
    width: fit-content;
    color: var(--black);
    border: 1px solid var(--blue);
    font-size: 16px;
    background: var(--white);
    border-radius: 4px;
    padding: 8px;
  }

  &__main-title {
    font-size: 18px;
    font-weight: 600;
  }

  &__title {
    font-weight: 600;
    margin-bottom: 8px;
  }

  &__link {
    text-decoration: none;
    color: var(--violet-light);
    font-size: 16px;
    font-weight: 600;
  }
}

.block {
  &__info {
    padding: 12px;
  }
}
</style>