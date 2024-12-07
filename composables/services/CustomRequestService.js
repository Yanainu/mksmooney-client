import { ref } from 'vue';
import { FetchData } from '../api';

const CustomRequestService = () => {
  const isLoading = ref(false);
  const customData = ref(null);

  const fetchCustomData = async (fetchKey) => {
    isLoading.value = true;

    try {
      const result = await FetchData(fetchKey);
      customData.value = result?.value?.data;
      return result;
    } catch (err) {
      console.error(err);
      return null;
    } finally {
      isLoading.value = false;
    }
  };

  return {
    fetchCustomData,
    isLoading,
    customData,
  };
};

export default CustomRequestService;
