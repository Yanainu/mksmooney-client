import { ref } from 'vue';
import { FetchData } from '../api';

const GetColorsService = () => {
  const isLoading = ref(false);
  const colorsData = ref([]);

  const fetchColors = async () => {
    isLoading.value = true;

    try {
      const result = await FetchData('colors');
      colorsData.value = [...result.value.data];
      return result;
    } catch (err) {
      console.error(err);
      return null;
    } finally {
      isLoading.value = false;
    }
  };

  return {
    fetchColors,
    
    isLoading,
    colorsData,
  };
};

export default GetColorsService;
