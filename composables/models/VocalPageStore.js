import { defineStore } from 'pinia';

import {
  toRefs,
  computed,
} from 'vue';

import {
  GetVocalPageService,
} from '../services';

const VocalPageStore = defineStore('VocalPage', () => {

  const VocalPageService = GetVocalPageService();
  const { fetchVocalPage } = VocalPageService;
  const { vocalPageData } = toRefs(VocalPageService);
  fetchVocalPage();

  const aboutSectionData = computed(() => {
    if (vocalPageData.value) {
      return vocalPageData?.value.VocalAboutMe;
    }
    return null;
  })

  const educationSectionData = computed(() => {
    if (vocalPageData.value) {
      return vocalPageData?.value.VocalEducation;
    }
    return null;
  })

  const workPlacesSectionData = computed(() => {
    if (vocalPageData.value) {
      return vocalPageData?.value.VocalWorkPlaces;
    }
    return null;
  })

  const achievementsSectionData = computed(() => {
    if (vocalPageData.value) {
      return vocalPageData?.value.VocalAchievements;
    }
    return null;
  })

  const mediaSectionData = computed(() => {
    if (vocalPageData.value) {
      return vocalPageData?.value.VocalMedia;
    }
    return null;
  })

  const feedbackSectionData = computed(() => {
    if (vocalPageData.value) {
      return vocalPageData?.value.VocalFeedback;
    }
    return null;
  })

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
