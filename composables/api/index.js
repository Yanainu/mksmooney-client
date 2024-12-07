export const FetchData = async (params) => {
  const { $fetchData } = useNuxtApp();
  const { data } = await $fetchData(params);
  return data;
}

