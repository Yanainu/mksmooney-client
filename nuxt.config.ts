// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  css: [
    'assets/main.postcss',
  ],

  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_PUBLIC_API_BASE_URL,
      // buildAssetsDir: 'public',
    },
  },

  modules: [
    'nuxt-icons', 
    '@nuxtjs/google-fonts',
    '@nuxt/image'
  ],
  postcss: {
    plugins: {
      'postcss-nested': {},
      "postcss-custom-media": {}
    }
  },

  // для картинок на netlify
  // image: {
  //   provider: 'netlify',
  //   netlify: {
  //     baseImgUrl: process.env.IMAGES_URL
  //   }
  // }
})