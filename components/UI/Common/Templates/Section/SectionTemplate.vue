<template>
  <div class="section">
    <div class="section__title">
      <slot name="sectionTitle" />
    </div>

    <div class="section__content">
      <slot name="sectionContent" />
    </div>
  </div>
</template>

<script setup>
import { toRefs } from 'vue';
import { Stores } from '~/composables';

  const ColorsStore = Stores.ColorsStore();
  const { 
    vocalPrimary,
  } = toRefs(ColorsStore);

</script>

<style lang="postcss">
.section {
  margin-top: 160px;

  @media (max-width: 600px) {
    margin-top: 150px;
  }

  &__title {
    padding-left: 140px;
    color: v-bind(vocalPrimary);
    font-family: 'Gilroy';
    font-weight: 800;
    font-size: 42px;
    line-height: 42px;
    letter-spacing: -0.03em;
    margin-bottom: 40px;
    text-transform: uppercase;

    animation: fadeIn 1s;

    @keyframes fadeIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }

    @media (max-width: 600px) {
      padding-left: 0;
      text-align: center;
      font-size: 32px;
      line-height: 32px;
    }
  }

  &__content { 
    display: flex;
    justify-content: center;
  }

}
</style>
