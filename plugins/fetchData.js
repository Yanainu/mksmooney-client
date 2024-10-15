import { stringify } from 'qs';

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  console.log( `${config.public.baseURL}/api/`)

  return {
    provide: {
      fetchData: (url, opts = {}) => useFetch(url, {
        baseURL: `${config.public.baseURL}/api/`,
        initialCache: false,
        onRequest({ options }) {
          // нашел решение тут https://github.com/unjs/ohmyfetch/issues/117#issuecomment-1283494017
          // по умолчанию либа не использует сериалайз вложенных значений
          const convertedOptions = new URLSearchParams(stringify(options.params));
           
          options.params = Object.fromEntries(convertedOptions);
        },
        key: `${url}:${JSON.stringify(opts.params)}`,
        ...opts,
      }),
    },
  };
});
