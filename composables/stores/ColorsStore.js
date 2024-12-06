import { defineStore } from 'pinia';

import {
  ref,
  computed
} from 'vue';

import {
  GetColorsService
} from '../services';

const ColorsStore = defineStore('Colors', () => {
  const Colors = ref([]);
  const formattedColors = ref({})

  const ColorsService = GetColorsService();
  const { fetchColors } = ColorsService;

  const formatColors = (fetchResult) => {

    let pagesList = [];
    fetchResult.forEach(item => {
      if (!pagesList.includes(item.page)) {
        pagesList.push(item.page);
      }
    })

    pagesList.forEach(page => {
      formattedColors.value[page] = {}
    })

    fetchResult.forEach(item => {
      pagesList.forEach((currentPageName) => {
        //vocal
        if (item.page === currentPageName) {
          formattedColors.value[currentPageName][item.priority] = item.colorValue;
        }
      })
      
    })
  }

  const getColors = async () => {
    const result = await fetchColors();
    formatColors(result?.value?.data)
    Colors.value = [...result.value.data]
  }
  getColors();

  const vocalPrimary = computed(() => {
    return formattedColors?.value?.vocal?.primary;
  })
  
  const vocalSecondary = computed(() => {
    return formattedColors?.value?.vocal?.secondary;
  })

  const vocalLight = computed(() => {
    return formattedColors?.value?.vocal?.light;
  })

  const fateIncPrimary = computed(() => {
    return formattedColors?.value?.fateInc?.primary;
  })

  const fateIncSecondary = computed(() => {
    return formattedColors?.value?.fateInc?.secondary;
  })
  return {
    Colors,
    formattedColors,

    vocalPrimary,
    vocalSecondary,
    vocalLight,

    fateIncPrimary,
    fateIncSecondary
  };
});

export default ColorsStore;
