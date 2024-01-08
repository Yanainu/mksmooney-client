<template>
  <div
    id="contacts"
    class="footer"
  > 
    <div class="footer__title">
      Контакты
    </div>

    <div class="footer__content">
      <div class="contact" v-for="contact in footerContacts" :key="contact.link">
        <a
          class="contact__link"
          :href="contact.link"
          rel="noopener noreferrer"
          target="_blank"
        >
          {{ contact.name }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>

const footerContacts = [
  { 
    name: 'Telegram',
    link: 'https://t.me/fatemom'
  },
  {
    name: 'YouTube',
    link: 'https://www.youtube.com/c/mksmooney'
  },
  {
    name: 'VK',
    link: 'https://vk.com/mksmooney'
  },
  {
    name: 'Yandex Music',
    link: 'https://music.yandex.ru/album/23090051'
  },
]
</script>
  
<style lang="postcss" scoped>
.footer {
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: black;
  color: var(--grey);
  font-size: 18px;

  &__content {
    display: flex;
    width: 50%;
    justify-content: space-around;
    padding: 18px 0;

    @media (max-width: 600px) {
      width: 90%;
      /* min-height: 130px; */
    }
  }
}

.contact {
  &__link {
    color: var(--wine-light);
    text-decoration: none;
    display: inline-block;
    padding: 4px 8px;
    border-radius: 4px;

    &:hover {
      background: var(--grey);
      color: black;
    }
  }
}
</style>