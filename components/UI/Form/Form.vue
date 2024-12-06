
<template>
  <div>
    form
  </div>
</template>

<script setup>


defineProps({
  // data: {
  //   type: Object,
  //   default: () =>({}),
  // },
});

const formDataEntered = ref({
  additionalMessage: '',
  name: '',
  company: '',
  position: '',
  email: '',
  phone: '',
  agreeToNews: null,
  agreeToPersonalDataProcessing: true,
});

const submitSuccess = ref(false);

const { $fetchData } = useNuxtApp();

const clearFormData = () => {
  Object.keys(formDataEntered.value).forEach((key) => {
    formDataEntered.value[key] = '';
  });
};

const submitForm = async () => {
  // eslint-disable-next-line no-unused-vars
  try {
    const { data } = await $fetchData('messages', {
      method: 'POST',
      body: {
        data: {
          additionalMessage: formDataEntered.value.additionalMessage,
          name: formDataEntered.value.name,
          company: formDataEntered.value.company,
          position: formDataEntered.value.position,
          email: formDataEntered.value.email,
          phone: formDataEntered.value.phone,
          agreeToNews: formDataEntered.value.agreeToNews,
        },
      },
    });
    if (data?.value) {
      submitSuccess.value = true;
      clearFormData();
    }
  } catch (error) {
    console.log('fail, error = ', error.name);
  }
};

</script>
  








