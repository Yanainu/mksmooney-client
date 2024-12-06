import { defineStore } from 'pinia';

import {
  ref,
} from 'vue';

import {
  GetFeedbacksService
} from '../services';

const FeedbacksStore = defineStore('Feedbacks', () => {
  const feedbacks = ref([]);

  const FeedbacksService = GetFeedbacksService();
  const { fetchFeedbacks } = FeedbacksService;

  const getFeedbacks = async () => {
    const result = await fetchFeedbacks();
    feedbacks.value = [...result.value.data]
  }
  getFeedbacks();

  return {
    feedbacks,
    getFeedbacks,
  };
});

export default FeedbacksStore;
