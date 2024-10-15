import { computed } from 'vue';

export default function checkRenderProcess() {
  const isBrowser = computed(() => {
    if (import.meta.browser) {
  
      return true;
    } else {
      return false;
    }
  });

  const isClient = computed(() => {
    if (import.meta.client) {  
      return true;
    } else {
      return false;
    }
  });
  
  return { 
    isBrowser,
    isClient
  };
}
