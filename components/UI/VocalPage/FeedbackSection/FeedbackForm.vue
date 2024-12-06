
<template>

  <div class="form">
    <div>
      form test
    </div>

    <input
      :value="formData.author"
      @input="updateInput"
      @focus="handleInputFocus"
      @blur="handleInputBlur"
      @change="handleChange($event)"
    >

    <textarea
      :value="formData.text"
  
      @input="handleInputText($event)"
      @focus="handleFocusTextarea"
      @blur="handleBlurTextarea"
      @change="handleChangeText($event)"
    />
      <!-- :rows="rows" -->
      <!-- :style="{ backgroundColor: backgroundColor, resize: resize }" -->


    <button @click="submitForm">
      save
    </button>

  </div>
</template>

<script setup>
import { 
  Stores,
  Services,
} from '~/composables';

defineProps({
  blockData: {
    type: Object,
    default: () =>({}),
  },
});

const SaveFeedbackService = Services.SaveFeedbackService();
const { saveFeedback } = SaveFeedbackService;

const formData = ref({
  author: '',
  text: '',
})

const saveParams = computed(() => {
  return {
    author: formData.value.author,
    text: formData.value.text,
    text_markdown: formData.value.text,
  }
})

const submitForm = async () => {
  saveFeedback(saveParams.value)
};

const updateInput = (event) => {
  console.log('updateInput', event.target.value)
  formData.value.author = event.target.value;
}

const handleChange = (value) => {
  console.log('handleChange', value)
}

const handleInputFocus = () => {
  
}

const handleInputBlur = () => {

}

const handleInputText = (event) => {
  formData.value.text = event.target.value;

}

const handleChangeText = () => {

}

const handleFocusTextarea = () => {

}

const handleBlurTextarea = () => {
  
}



</script>

<style lang="postcss" scoped>
.form {
  height: 200px;
  border: 1px solid grey;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}

</style>
  


