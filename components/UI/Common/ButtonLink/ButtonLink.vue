
<template>
  <div class="button-link">
    <nuxt-link 
      class="button-link__link"
      :to="link"
      target="_blank">
      {{ text }}
    </nuxt-link >
  </div>
</template>

<script setup>
import { 
  ref, 
  onBeforeUnmount, 
  onMounted, 
  computed 
} from 'vue';
import { 
  Helpers,
} from '~/composables';

const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  link: {
    type: String,
    default: '#',
  },
  color: {
    type: String,
    default: 'var(--white)',
  },
  width: {
    type: String,
    default: '260px',
  },
});

const ColorsStore = Stores.ColorsStore();
const { 
  vocalPrimary,
  vocalSecondary
} = toRefs(ColorsStore);

</script>
  
<style lang="postcss" scoped>
.button-link {
  width: v-bind(width);

  &__link { 
    display: block;
    text-align: center;
    background-color: v-bind(color);
    border-radius: 20px;
    padding: 12px 0;

    border: none;
    width: 100%;

    font-family: Gilroy;
    color: #ffffff;
    font-weight: 800;
    font-size: 16px;
    line-height: 16px;
    text-decoration: none;

    cursor: pointer;

    &:hover {
      background: white;
      color: v-bind(color);
      border: 1px solid v-bind(color);
    }

  }
}
</style>


