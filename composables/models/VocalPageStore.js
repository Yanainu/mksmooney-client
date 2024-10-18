import { defineStore } from 'pinia';

import {
  ref,
  toRefs,
  computed
} from 'vue';

import {
  GetVocalPageService,
} from '../services';

const VocalPageStore = defineStore('VocalPage', () => {
  const pageData = ref({})

  const VocalPageService = GetVocalPageService();
  const { fetchVocalPage } = VocalPageService;
  fetchVocalPage();
  const { vocalPageData } = toRefs(VocalPageService);
  console.log('vocalPageData', vocalPageData.value)

  const config = useRuntimeConfig();

  const leftPhotoUrl = computed(() => vocalPageData?.value?.VocalAboutMe?.leftPhoto?.data?.attributes?.url);
  const leftPhotoUrlFormatted = computed(() => `${config.public.baseURL}${leftPhotoUrl.value}`);

  const rightPhotoUrl = computed(() => vocalPageData?.value?.VocalAboutMe?.rightPhoto?.data?.attributes?.url);
  const rightPhotoUrlFormatted = computed(() => `${config.public.baseURL}${rightPhotoUrl.value}`);

  const aboutSectionData = computed(() => {
    return { 
      data: vocalPageData?.value?.VocalAboutMe,
      leftPhotoUrl: leftPhotoUrlFormatted.value,
      rightPhotoUrl: rightPhotoUrlFormatted.value
    }
  });

  const educationSectionData = computed(() => {
    return vocalPageData?.value?.VocalEducation;
  }); 

  return {
    vocalPageData,

    aboutSectionData,
    educationSectionData,

    leftPhotoUrl,
    leftPhotoUrlFormatted,
    rightPhotoUrlFormatted
  };
});

export default VocalPageStore;
