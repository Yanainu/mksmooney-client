
export default function checkRenderProcess() {
  const isBrowser = computed(() => {
    if (process.browser) {
  
      return true;
    } else {
      return false;
    }
  });

  const isClient = computed(() => {
    if (process.client) {  
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



