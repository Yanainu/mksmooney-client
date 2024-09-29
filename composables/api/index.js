
export const FetchData = async (params) => {
  const { $fetchData } = useNuxtApp();

  // params = 'header-navigation' например
  const { data } = await $fetchData(params, {
    params: {
      populate: 'deep',
    },
  });

  return data;
}


