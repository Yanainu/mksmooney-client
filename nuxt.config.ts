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
    }
  },
  imports: {
    autoImport: true,
  },
  modules: [
    'nuxt-icons',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    'nuxt-icons',
    '@pinia/nuxt',
    "@nuxt/eslint"
  ],
  postcss: {
    plugins: {
      'postcss-nested': {},
      "postcss-custom-media": {},
      'postcss-pxtorem': {
        propList: [
          'font',
          'font-size',
          'line-height',
          'letter-spacing',
          'padding',
          'padding-top',
          'padding-right',
          'padding-bottom',
          'padding-left',
          'margin',
          'margin-top',
          'margin-right',
          'margin-bottom',
          'margin-left',
          'width',
          'min-width',
          'max-width',
          'height',
          'min-height',
          'max-height',
          'border',
          'border-size',
          'outline',
          'top',
          'right',
          'bottom',
          'left',
          'border-radius',
          'border-top-left-radius',
          'border-bottom-left-radius',
          'border-top-right-radius',
          'border-bottom-right-radius',
          'transform',
          'text-underline-offset',
        ],
      },
    }
  },
})