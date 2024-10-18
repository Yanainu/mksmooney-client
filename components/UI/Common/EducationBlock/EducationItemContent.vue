<template>
  <div 
    class="education-item"
    :class="`education-item--align-${side}`">

    <div 
      v-if="side === 'right'"
      class="education-item__time">
      {{ content?.year }}
    </div>

    <div class="education-item__text">
      <div class="education-item__title">
        {{ content?.title }}
      </div>

      <div class="education-item__description">
        {{ content?.description }}
      </div>
    </div>

    <div 
      v-if="side === 'left'"
      class="education-item__time">
      {{ content?.year }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  content: {
    type: Object,
    default: () => ({}),
  },
  side: {
    type: String,
    default: 'left'
  }
});

</script>

<style lang="postcss" scoped>
.education-item {
  display: flex;

  &--align {
    &-left {
      justify-content: flex-end;
      margin-right: 10px;

      .education-item__text {
        margin-right: 20px;
      }

      .education-item__title {
        text-align: right;
      }
    }

    &-right {
      justify-content: flex-start;
      margin-left: 10px;

      .education-item__time {
        margin-right: 20px;
      }

      .education-item__description {
        text-align: left;
      }
    }
  }

  &__title {
    color: var(--dark-blue);
    font-size: 14px;
    letter-spacing: 0.03em;

    @media (max-width: 600px) {
      font-size: 12px;
    }
  }

  &__description {
    color: var(--light-blue);
    font-size: 14px;
    text-align: right;

    @media (max-width: 600px) {
      font-size: 12px;
    }
  }

  &__time {
    color: var(--light-blue);
    font-size: 18px;
    font-weight: 800;
    line-height: 22px;
    text-decoration: underline;
    text-decoration-color: var(--dark-blue);
    text-decoration-style: dashed;
    text-decoration-thickness: 1px;
    text-underline-offset: 2px;

    @media (max-width: 600px) {
      font-size: 16px;
    }
  } 
}
</style>
