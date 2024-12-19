import { ref } from 'vue';
import { FetchData } from '../api';

const FooterNavigationService = () => {
  const isLoading = ref(false);
  const footerNavigationData = ref(null);

  const fetchFooterNavigation = async () => {
    isLoading.value = true;

    try {
      const result = await FetchData('footer-navigation?customPopulate=nested');
      footerNavigationData.value = result?.value?.data;
      return result;
    } catch (err) {
      console.error(err);
      return null;
    } finally {
      isLoading.value = false;
    }
  };

  return {
    fetchFooterNavigation,
    isLoading,
    footerNavigationData,
  };
};

export default FooterNavigationService;
