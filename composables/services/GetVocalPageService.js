import { ref } from 'vue';
import { FetchData } from '../api';

const GetVocalPageService = () => {
  const isLoading = ref(false);
  const vocalPageData = ref(null);

  const fetchVocalPage = async () => {
    isLoading.value = true;

    try {
      const result = await FetchData('vocal-page?customPopulate=nested');
      vocalPageData.value = result.value.data;
      return result.value.data;
    } catch (err) {
      console.error(err);
      return null;
    } finally {
      isLoading.value = false;
    }
  };

  return {
    fetchVocalPage,
    isLoading,
    vocalPageData,
  };
};

export default GetVocalPageService;
