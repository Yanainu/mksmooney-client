import { ref } from 'vue';
import { FetchData } from '../api';

const SaveFeedbackService = () => {
  const isSaving = ref(false);
  const submitSuccess = ref(true);

  const { $fetchData } = useNuxtApp();

  const saveFeedback = async (params) => {
    isSaving.value = true;
    try {
      const { data } = await $fetchData('feedbacks', {
        method: 'POST',
        body: {
          data: {
            ...params,
          }
          // data: {
          //   additionalMessage: formDataEntered.value.additionalMessage,
          //   name: formDataEntered.value.name,
          //   company: formDataEntered.value.company,
          //   position: formDataEntered.value.position,
          //   email: formDataEntered.value.email,
          //   phone: formDataEntered.value.phone,
          //   agreeToNews: formDataEntered.value.agreeToNews,
          // },
        },
      });
      return data;
    } catch (err) {
      console.error(err);
      submitSuccess.value = false;
      return null;
    } finally {
      isSaving.value = false;
      submitSuccess.value = true;
    }
  };

  return {
    isSaving,
    submitSuccess,
    saveFeedback,
  };
};

export default SaveFeedbackService;
