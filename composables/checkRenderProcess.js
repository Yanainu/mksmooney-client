
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
      console.log('player.value', player.value)
  
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



