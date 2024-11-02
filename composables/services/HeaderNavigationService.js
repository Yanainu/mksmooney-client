import { ref } from 'vue';
import { FetchData } from '../api';

const HeaderNavigationService = () => {
  const isLoading = ref(false);
  const headerNavigationData = ref(null);

  const fetchHeaderNavigation = async () => {
    isLoading.value = true;

    try {
      const result = await FetchData('header-navigation');
      headerNavigationData.value = result?.value?.data?.attributes;
      return result;
    } catch (err) {
      console.error(err);
      return null;
    } finally {
      isLoading.value = false;
    }
  };

  fetchHeaderNavigation();

  return {
    fetchHeaderNavigation,
    isLoading,
    headerNavigationData,
  };
};

export default HeaderNavigationService;
