import { 
  ref,
  onBeforeUnmount
} from 'vue';

export default function checkWindowWidth() {
  const currentWidth = ref(0);

  function updateCurrentWidth() {
    currentWidth.value = window.innerWidth;
  }

  if (import.meta.client) {
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