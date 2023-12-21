<!-- eslint-disable vuejs-accessibility/mouse-events-have-key-events -->

<template>
    <div>
      <!-- если предполагается dropdown  -->
      <div
        v-if="hasDropdown"
        class="navigation-item"
        :class="{ 'navigation-item--is--active': dropdownVisible }"
      >
      <!-- рендерится при десктоп-разрешении и обрабатывает наведение  -->
        <button
          class="navigation-item__button button"
          type="button"
          @mouseenter="openMenu"
        >
          {{ dropdown?.title }}
        </button>
        <div
          v-if="dropdownVisible"
          ref="dropdown-desktop"
          class="navigation-item__dropdown navigation-item__dropdown--desktop"
          @mousemove="mouseMoveHandle"
          @mouseleave="mouseLeaveHandle"
        >
          <div class="dropdown">
            <div class="menu">
              <div v-for="dropdownItem in dropdown.dropdownItems" :key="dropdownItem.id">
                <nuxt-link class="navigation-item__link--dropdown" :to="dropdownItem.link">
                  {{ dropdownItem.title }}
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
  
        <div v-if="dropdownVisible" class="navigation-item__dropdown navigation-item__dropdown--mobile">
          <!-- <DropdownPanelMobile :dropdown="dropdown" /> -->
        </div>
      </div>
  
      <!-- если нет dropdown  -->
      <div v-if="!hasDropdown" class="navigation-item">
        <nuxt-link class="navigation-item__link" :to="link">
          {{ title }}
        </nuxt-link>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onBeforeUnmount, onMounted, computed } from 'vue';
  
  const props = defineProps({
    dropdown: {
      type: Object,
      default: () => ({}),
    },
    title: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
  });
  const hasDropdown = computed(() => {
    return !!props.dropdown?.id;
  });
  
  const dropdownVisible = ref(false);
  
  function openMenu() {
    dropdownVisible.value = true;
  }
  
  function closeMenu() {
    dropdownVisible.value = false;
  }
  
  // отключение меню через 600мс после ухода мыши с него
  const timer = ref(null);
  
  function mouseMoveHandle() {
    clearTimeout(timer.value);
  }
  
  function mouseLeaveHandle() {
    clearTimeout(timer.value);
    timer.value = setTimeout(() => {
      dropdownVisible.value = false;
    }, 55600);
  }
  
  // переключение видимости меню по клику (для мобильной версии)
  function toggleMenu() {
    window.removeEventListener('click', closeMenu);
    dropdownVisible.value = !dropdownVisible.value;
  }
  
  // отслеживание ширины окна
  const currentWidth = ref(0);
  
  function updateCurrentWidth() {
    currentWidth.value = window.innerWidth;
  }
  
  if (process.client) {
    window.addEventListener('click', closeMenu);
    updateCurrentWidth();
    window.addEventListener('resize', updateCurrentWidth);
  }
  
  onBeforeUnmount(() => {
    window.removeEventListener('click', closeMenu);
    window.removeEventListener('resize', updateCurrentWidth);
  });
  onMounted(() => {
    console.log('props.dropdown', props.dropdown?.dropdownItems.length);
  
  });
  </script>
  
  <style lang="postcss" scoped>
  .button {
    background: none;
      border: none;
      border-radius: 4px;
      color: #cbcbcb;
      padding: 0 8px;
  
      &:hover {
        color: #0d1d40;
        background: #cbcbcb;
  
      }
  
  }
  .navigation-item__dropdown {
    padding: 8px;
  }
  .navigation-item__link {
    color: #cbcbcb;
    padding: 4px 8px;
    margin-bottom: 4px;
  
    &:hover {
      color: #0d1d40;
      background: #cbcbcb;
      border-radius: 4px;
    }
  
  }
  .navigation-item__link--dropdown {
    color: #cbcbcb;
    padding: 4px 8px;
    margin-bottom: 4px;
    display: block;
  
    &:hover {
      color: #0d1d40;
      background: #cbcbcb;
      border-radius: 4px;
    }
  
  }
  .navigation-menu {
    display: flex;
  
  
  }
  
  
  </style>
  