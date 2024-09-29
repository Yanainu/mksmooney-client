import { defineStore } from 'pinia';
import {
  ref,
  toRefs,
} from 'vue';
import {
  GetColorsService
} from '../services';

const ColorsStore = defineStore('Colors', () => {
  const Colors = ref([]);
  const formattedColors = ref({})

  const ColorsService = GetColorsService();
  const { fetchColors } = ColorsService;
  const { colorsData } = toRefs(ColorsService);

  const formatColors = (fetchResult) => {
    console.log("fetchResult", fetchResult);

    let pagesList = [];
    fetchResult.forEach(item => {
      if (!pagesList.includes(item.attributes.page)) {
        pagesList.push(item.attributes.page);
      }
    })

    pagesList.forEach(page => {
      formattedColors.value[page] = {}
    })

    fetchResult.forEach(item => {
      pagesList.forEach((currentPageName) => {
        //vocal
        if (item.attributes.page === currentPageName) {
          formattedColors.value[currentPageName][item.attributes.priority] = item.attributes.colorValue;
        }
      })
      
    })

    // console.log('formattedColors', formattedColors.value)

    // {
    //   vocal: {
    //     primary: '',
    //     secondary: '',
    //     text: '',
    //   },
    //   coaching: {
    //     ...
    //   }
    // }
  }


  const getColors = async () => {
    const result = await fetchColors();

    formatColors(result.value.data)
    Colors.value = [...result.value.data]
  }
  getColors();

  const vocalPrimary = computed(() => {
    return formattedColors?.value?.vocal?.primary;
  })
  
  const vocalSecondary = computed(() => {
    return formattedColors?.value?.vocal?.secondary;
  })


  return {
    Colors,
    formattedColors,

    vocalPrimary,
    vocalSecondary
  };
});

export default ColorsStore;
