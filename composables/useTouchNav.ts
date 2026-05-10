/**
 * Horizontal swipe → next / prev slide.
 * Vertical swipe is ignored so that scrolling SP-portrait slides keeps working.
 */
const SWIPE_THRESHOLD = 60
const VERTICAL_TOLERANCE = 1.2

export const useTouchNav = () => {
  if (import.meta.server) return

  const nav = useSlideNav()

  let startX = 0
  let startY = 0
  let tracking = false

  const onStart = (e: TouchEvent) => {
    if (e.touches.length !== 1) return
    startX = e.touches[0].clientX
    startY = e.touches[0].clientY
    tracking = true
  }

  const onEnd = (e: TouchEvent) => {
    if (!tracking) return
    tracking = false
    const t = e.changedTouches[0]
    if (!t) return
    const dx = t.clientX - startX
    const dy = t.clientY - startY
    if (Math.abs(dx) < SWIPE_THRESHOLD) return
    if (Math.abs(dy) > Math.abs(dx) / VERTICAL_TOLERANCE) return
    if (dx < 0) nav.next()
    else nav.prev()
  }

  onMounted(() => {
    window.addEventListener('touchstart', onStart, { passive: true })
    window.addEventListener('touchend', onEnd, { passive: true })
  })

  onBeforeUnmount(() => {
    window.removeEventListener('touchstart', onStart)
    window.removeEventListener('touchend', onEnd)
  })
}
