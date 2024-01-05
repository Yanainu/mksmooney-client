import { ref } from 'vue';

export default function checkPageScroll() {
  const scrolled = ref(false);

  function handleScroll() {
    if (window.pageYOffset) {
      scrolled.value = true;
    } else {
      scrolled.value = false;
    }
  }

  if (process.client) {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
  }

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  return { scrolled };
}
