/**
 * SPA ルート遷移時の page_view 送信。
 * gtag.js 本体と初期化スクリプトは nuxt.config.ts の app.head.script で
 * 静的 HTML に直接焼き込んでいる (GA のタグ検出に必要)。
 * ここでは初期化済み window.gtag を前提に page_view のみを送信する。
 */
export default defineNuxtPlugin(() => {
  const gaId = useRuntimeConfig().public.gaId
  if (!gaId) return

  const router = useRouter()
  const sendPageView = (path: string) => {
    if (typeof window.gtag !== 'function') return
    window.gtag('event', 'page_view', {
      page_path: path,
      page_location: window.location.origin + path,
      page_title: document.title,
    })
  }

  sendPageView(router.currentRoute.value.fullPath)
  router.afterEach((to) => {
    nextTick(() => sendPageView(to.fullPath))
  })
})
