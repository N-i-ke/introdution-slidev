import { SLIDE_TOTAL } from './data/slides'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-01-01',
  devtools: { enabled: true },
  ssr: true,

  runtimeConfig: {
    public: {
      // 設定: 環境変数 NUXT_PUBLIC_GA_ID で渡す (例: G-XXXXXXXXXX)。
      // 値が空のときは gtag を読み込まない。
      gaId: '',
    },
  },

  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@nuxt/fonts',
    '@nuxt/icon',
    'motion-v/nuxt',
  ],

  css: ['~/assets/styles/main.css'],

  components: [
    { path: '~/components', pathPrefix: false },
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
      routes: ['/', ...Array.from({ length: SLIDE_TOTAL }, (_, i) => `/${i + 1}`)],
    },
  },

  typescript: {
    strict: true,
  },

  experimental: {
    viewTransition: true,
  },
})
