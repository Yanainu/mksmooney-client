
<template>
  <SectionTemplate>
    <template #sectionTitle>
      {{ data?.title }} 
    </template>

    <template #sectionContent>
      <EducationBlock 
        :blocksData="data?.VocalEducationBlock"
      />
    </template>
  </SectionTemplate>
</template>

<script setup>
import { CommonComponents } from '~/components/UI';

const { 
  SectionTemplate,
  EducationBlock
} = CommonComponents;

defineProps({
  data: {
    type: Object,
    default: () =>({}),
  },
});

</script>
  


