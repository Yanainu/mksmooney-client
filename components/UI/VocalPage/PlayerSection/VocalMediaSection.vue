
<template>
  <SectionTemplate>
    <template #sectionTitle>
      {{ data?.title }} 
    </template>

    <template #sectionContent>
        <Player 
          :songs="data?.Songs"
        />
    </template>
  </SectionTemplate>

</template>

<script setup>
import { CommonComponents } from '~/components/UI';
import Player from './Player.vue';

const { 
  SectionTemplate,
} = CommonComponents;

defineProps({
  data: {
    type: Object,
    default: () =>({}),
  },
});
</script>
