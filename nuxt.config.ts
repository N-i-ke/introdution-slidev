import { SLIDE_TOTAL } from './data/slides'

// ビルド時 (プリレンダリング時) に静的 HTML へ焼き込むため、
// process.env から直接読む。リポジトリには ID を残さない。
const gaId = process.env.NUXT_PUBLIC_GA_ID ?? ''

const gaScripts = gaId
  ? [
      { src: `https://www.googletagmanager.com/gtag/js?id=${gaId}`, async: true },
      {
        innerHTML: [
          'window.dataLayer = window.dataLayer || [];',
          'function gtag(){dataLayer.push(arguments);}',
          "gtag('js', new Date());",
          `gtag('config', '${gaId}', { send_page_view: false });`,
        ].join(''),
      },
    ]
  : []

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
      script: gaScripts,
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
