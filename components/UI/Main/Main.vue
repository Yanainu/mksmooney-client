
<template>
  <div class="main">

    <!-- фото  -->
    <div class="main__photo">
      <!-- <NuxtPicture 
        :imgAttrs="{ 
          class:'main__photo-img', 
          style: 'width: 50vw'}"
          src="/img/photo1.JPG" /> -->

      <!-- <NuxtImg 
        src="/img/photo1.JPG"
        sizes="50vw sm:50vw md:400px"
        /> -->

        <img  
          :style="{
            width: '100%'
          }"
          src="/img/photo1.JPG?url" 
          alt="#" />
    </div>

    <div class="main__info">
      <div class="main__info-title">
        Меня зовут Фай, я — вокалистка, коуч, преподаватель вокала 
        и постановки голоса, 
        а также автор экспресс-методики по теории музыки.
      </div>

      <div class="main__info-description description">

        <div 
        v-for="block in descriptionBlocks"
        :key="block.title"
        class="description__block block">

          <MainInfoItemOpening 
            :itemData="block"
          />
         
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import MainInfoItemOpening from '@/components/UI/Main/MainInfoItemOpening.vue';

const descriptionBlocks = [
  {
    title: 'Образование',
    info: [
      {
        title: 'Российская Академия Музыки им. Гнесиных',
        additionalTitle: '2014',
        description: 'хоровое народное пение',
      },
      {
        title: 'Государственная Классическая Академия имени Маймонида',
        additionalTitle: '2018',
        description: 'вокальное искусство',
      },
      {
        title: 'Московский Педагогический Государственный Университет',
        additionalTitle: '2020',
        description: 'музыкальная культура и искусство',
      },
      {
        title: 'Global Coaching Academy',
        additionalTitle: '2023',
        description: 'коучинг нового мышления',
      },
    ]
  },
  {
    title: 'Места работы',
    info: [
      {
        title: 'FATE INC.',
        additionalTitle: 'c 2023',
        description: 'CEO',
        link: 'https://vk.com/fate_inc'
      },
      {
        title: 'Onsa Media',
        additionalTitle: 'с 2021',
        description: 'вокалистка и актриса озвучки',
        link: 'https://www.youtube.com/watch?v=NWTWlhWpomw'
      },
      {
        title: 'ИСИ',
        additionalTitle: '2020-2023',
        description: 'преподаватель по вокалу, вокальной джазовой импровизации и вокальному ансамблю',
        link: 'https://isi-vuz.ru/'
      },
    ]
  }
]

</script>

<style lang="postcss" scoped>
.main {
  display: flex;
  background: var(--black);

  &__info {
    display: flex;
    flex-direction: column; 
    justify-content: center;
    color: var(--grey2);
    padding: 20px;
    font-size: 16px;

    &-title {
      margin-top: 60px;
    }
  }
}

.description {
  padding: 20px 0;

  margin: 20px;
}


.block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;


  &__title {
    padding: 12px;
    font-weight: 700;
  }
}


</style>
