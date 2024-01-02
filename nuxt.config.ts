// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    'assets/main.postcss',
  ],

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

})