import { defineStore } from 'pinia';

import {
  ref,
} from 'vue';

import {
  HeaderNavigationService,
  FooterNavigationService
} from '../services';

const NavigationStore = defineStore('NavigationStore', () => {

  const headerNavigationData = ref({})
  const footerNavigationData = ref({})

  const HeaderNavService = HeaderNavigationService();
  const { fetchHeaderNavigation } = HeaderNavService;
  const FooterNavService = FooterNavigationService();
  const { fetchFooterNavigation } = FooterNavService;

  const getHeaderData = async() => {
    const result = await fetchHeaderNavigation();
    headerNavigationData.value = result.value.data;
  }

  const getFooterData = async() => {
    const result = await fetchFooterNavigation();
    footerNavigationData.value = result.value.data;
  }

  getHeaderData();
  getFooterData();

  return {
    headerNavigationData,
    footerNavigationData
  };
});

export default NavigationStore;
