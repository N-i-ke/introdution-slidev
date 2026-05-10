// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-01-01',
  devtools: { enabled: true },
  ssr: true,

  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@nuxt/fonts',
    '@nuxt/icon',
  ],

  app: {
    head: {
      htmlAttrs: { lang: 'ja' },
      title: 'Kengo Nishi — Introduction',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Frontend Developer Kengo Nishi の自己紹介スライド' },
      ],
    },
  },

  fonts: {
    families: [
      { name: 'Nunito Sans', provider: 'google' },
      { name: 'Fira Code', provider: 'google' },
    ],
  },

  nitro: {
    preset: 'vercel-static',
    prerender: {
      crawlLinks: false,
      routes: ['/'],
    },
  },

  typescript: {
    strict: true,
  },
})
