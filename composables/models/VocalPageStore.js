import { defineStore } from 'pinia';

import {
  toRefs,
  computed
} from 'vue';

import {
  GetVocalPageService,
} from '../services';

const VocalPageStore = defineStore('VocalPage', () => {

  const VocalPageService = GetVocalPageService();
  const { fetchVocalPage } = VocalPageService;
  fetchVocalPage();
  const { vocalPageData } = toRefs(VocalPageService);
  
  const aboutSectionData = computed(() => {
    return { 
      data: vocalPageData?.value?.VocalAboutMe,
    }
  });

  const educationSectionData = computed(() => {
    return vocalPageData?.value?.VocalEducation;
  }); 

  const workPlacesSectionData = computed(() => {
    return vocalPageData?.value?.VocalWorkPlaces;
  })

  const achievementsSectionData = computed(() => {
    return vocalPageData?.value?.VocalAchievements;
  })

  const playerSectionData = computed(() => {
    return vocalPageData?.value?.VocalMedia;
  })


  return {
    vocalPageData,

    aboutSectionData,
    educationSectionData,
    workPlacesSectionData,
    achievementsSectionData,
    playerSectionData
  };
});

export default VocalPageStore;
