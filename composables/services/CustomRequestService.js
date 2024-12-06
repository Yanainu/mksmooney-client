import { ref } from 'vue';
import { FetchData2 } from '../api';

const CustomRequestService = () => {
  const isLoading = ref(false);
  const customData = ref(null);

  // GET /api/      articles?populate[category][populate][0]=restaurants
  // GET /api/articles?populate[0]=category

  const fetchCustomData = async (fetchKey) => {
    isLoading.value = true;

    try {
      const result = await FetchData2(fetchKey);
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
