export const FetchData = async (params) => {
  const { $fetchData } = useNuxtApp();

  // params = 'header-navigation' например
  // console.log('FETCH DATA PARAMS', params)
  const { data } = await $fetchData(params, {
    params: {
      populate: '*',

    },
    // params: {
    //   category: {
    //     populate: ['colors'],
    //   },
    // },
  });

  return data;
}

export const FetchData2 = async (params) => {
  console.log(params, params)
  const { $fetchData } = useNuxtApp();

  // params = 'header-navigation' например
  // populate[category][populate][0]=restaurants
  const { data } = await $fetchData(params, 
  //   {
  //   // params: {
  //   //   populate: ['Vocal-Achievements']['populate'][0]='InfoSquareBlocks',
  //   // },
  //   // params: {
  //   //   category: {
  //   //     populate: ['colors'],
  //   //   },
  //   // },
  // }
);

  return data;
}

