
<template>
  <div class="achievements">
      <!-- <div class="achievements__title">
        Достижения
      </div> -->

      <div 
        v-if="currentWidth <= 600" >
        <img  
          class="img"
          :style="{
            width: '100%'
          }"
          src="/img/photo2.JPG?url" 
          alt="#" />
      </div>

      <div class="achievements__description description">
        <div 
          v-for="block in achievementsBlocks"
          :key="block.title"
          class="description__block block">

          <AchievementBlock 
            :block="block"/>
        </div>
      </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AchievementBlock from '@/components/UI/Achievements/AchievementBlock.vue';

const achievementsBlocks = [
  {
    title: 'Игра Love, Money, Rock’n’Roll',
    additionalTitle: '2020',
    titleLink: 'https://store.steampowered.com/app/615530/Love_Money_RocknRoll/?l=russian',
    description: 'голос вокалистки группы Z FEEL-Z',
  },
  {
    title: 'World Karaoke Grand Prix — Япония',
    additionalTitle: '2015',
    description: 'победитель в номинации «Выбор жюри»',
  },
  {
    title: 'J-FEST — Москва',
    additionalTitle: '2014',
    description: '1 место в номинации «Караоке»',
  },
  {
    title: 'Hinode — Москва',
    additionalTitle: '2015',
    description: '1 место, представитель России в Японии',
  },
  {
    title: 'Твой путь — Италия',
    additionalTitle: '2013',
    description: '2 место в номинации «Лучший исполнитель фольклора»',
  },
  {
    title: 'Сольный альбом — Япония, Токио',
    additionalTitle: '2011',
    description: 'Треки на Amazon и Spotify',
    hasSpecialLinks: true,
    
    descriptionLinkAmazon: 'https://www.amazon.co.jp/dp/B004N5XET2',
    descriptionLinkSpotify:'https://open.spotify.com/album/0Nb22tPeVsxltxJmyKOWD6' 
  },
  {
    title: 'K-Pop Song Festival — Москва',
    additionalTitle: '2011',
    description: '2 место, представитель России в Южной Корее',
  },
]

</script>

<style lang="postcss" scoped>
.img {
  
}
.achievements {
  height: 100vh;
  
  background-image: url('/img/photo2.JPG');
  background-size: cover;
  background-position: center;
  color: var(--grey);
  padding: 30px;

  @media (max-width: 600px) {
    background: black;
    height: auto;
  }

  &__description {
    padding: 20px 0;

    @media (max-width: 600px) {
      /* margin-top: 100%; */
    }

  }
}


</style>
