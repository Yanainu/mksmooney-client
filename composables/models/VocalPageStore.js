import { defineStore } from 'pinia';

import {
  toRefs,
  computed,
  ref
} from 'vue';

import {
  GetVocalPageService,
  CustomRequestService,
} from '../services';

const VocalPageStore = defineStore('VocalPage', () => {

  const VocalPageService = GetVocalPageService();
  const { fetchVocalPage } = VocalPageService;
  fetchVocalPage();
  const { vocalPageData } = toRefs(VocalPageService);

  console.log('vocalPageData', vocalPageData)

  const CustomService = CustomRequestService();
  const { fetchCustomData } = CustomService;
  fetchCustomData();
  const { customData } = toRefs(CustomService);

  console.log('customData', customData)

  // О себе (1)
  const aboutSectionData = computed(() => {
    return { 
      data: vocalPageData?.value?.VocalAboutMe,
    }
  });

  // Образование
  const educationSectionData = ref(null);
  const getEducationSectionData = async () => {
    const result = await fetchCustomData('vocal-page?populate[VocalEducation][populate][0]=VocalEducationBlock');
    educationSectionData.value = result.value.data.VocalEducation;
    return result.value.data.VocalEducation;
  }
  getEducationSectionData();

  // Места работы
  const workPlacesSectionData = ref(null);
  const getWorkPlacesSectionData = async () => {
    const result = await fetchCustomData('vocal-page?populate[VocalWorkPlaces][populate][0]=InfoSquareBlocks');
    workPlacesSectionData.value = result.value.data.VocalWorkPlaces;
    return result.value.data.VocalWorkPlaces;
  }
  getWorkPlacesSectionData();

  // Достижения 
  const achievementsSectionData = ref(null);
  const getAchievementsSectionData = async () => {
    const result = await fetchCustomData('vocal-page?populate[VocalAchievements][populate][0]=InfoSquareBlocks');
    achievementsSectionData.value = result.value.data.VocalAchievements;
    return result.value.data.VocalAchievements;
  }
  getAchievementsSectionData();

  // Медиа
  const mediaSectionData = ref(null);
  const getMediaSectionData = async () => {
    const result = await fetchCustomData('vocal-page?populate[VocalMedia][populate][0]=Songs');
    mediaSectionData.value = result.value.data.VocalMedia;
    return result.value.data.VocalMedia;
  }
  getMediaSectionData();


  const feedbackSectionData = computed(() => {
    return vocalPageData?.value?.VocalFeedback;
  });

  return {
    vocalPageData,

    aboutSectionData,
    educationSectionData,
    workPlacesSectionData,
    achievementsSectionData,
    mediaSectionData,
    feedbackSectionData
  };
});

export default VocalPageStore;
