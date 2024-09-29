export default function checkWindowWidth() {
  const currentWidth = ref(0);

  function updateCurrentWidth() {
    currentWidth.value = window.innerWidth;
  }

  if (process.client) {
    updateCurrentWidth();
    window.addEventListener('resize', updateCurrentWidth);
  }

  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateCurrentWidth);
  });

  return { 
    currentWidth,
  };
}