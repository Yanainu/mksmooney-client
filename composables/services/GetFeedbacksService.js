
import { ref } from 'vue';
import { FetchData } from '../api';

const GetFeedbacksService = () => {
  const isLoading = ref(false);
  const feedbacksData = ref(null);

  const fetchFeedbacks = async () => {
    isLoading.value = true;

    try {
      const result = await FetchData('feedbacks');
      feedbacksData.value = result?.value?.data;
      return result;
    } catch (err) {
      console.error(err);
      return null;
    } finally {
      isLoading.value = false;
    }
  };

  return {
    fetchFeedbacks,
    isLoading,
    feedbacksData,
  };
};

export default GetFeedbacksService;

