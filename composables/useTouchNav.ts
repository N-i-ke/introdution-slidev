/**
 * Touch navigation:
 *   - 横スワイプ → 前後スライド
 *   - 静止タップ → 次のステップ / 次のスライド
 *
 * `touchmove` で早期に方向をロックし、縦スクロールと判定したジェスチャは
 * navigation を発火させない。SP-portrait のスクロール体験を阻害しない。
 * インタラクティブ要素 (button / a / input など) 上のタップは遷移させない。
 */
const SWIPE_THRESHOLD = 50
const DIRECTION_LOCK_DISTANCE = 12
const TAP_MOVEMENT_LIMIT = 8

const INTERACTIVE_SELECTOR =
  'button, a, input, textarea, select, label, [role="button"], [role="link"], [data-no-tap-nav]'

type LockedDirection = 'horizontal' | 'vertical' | null

const isInteractiveTarget = (target: EventTarget | null): boolean => {
  if (!(target instanceof Element)) return false
  return target.closest(INTERACTIVE_SELECTOR) !== null
}

export const useTouchNav = () => {
  if (import.meta.server) return

  const nav = useSlideNav()

  let startX = 0
  let startY = 0
  let tracking = false
  let locked: LockedDirection = null
  let startTarget: EventTarget | null = null

  const reset = () => {
    tracking = false
    locked = null
    startTarget = null
  }

  const onStart = (e: TouchEvent) => {
    if (e.touches.length !== 1) {
      reset()
      return
    }
    startX = e.touches[0].clientX
    startY = e.touches[0].clientY
    startTarget = e.target
    tracking = true
    locked = null
  }

  const onMove = (e: TouchEvent) => {
    if (!tracking || locked) return
    const t = e.touches[0]
    if (!t) return
    const dx = Math.abs(t.clientX - startX)
    const dy = Math.abs(t.clientY - startY)
    if (Math.max(dx, dy) < DIRECTION_LOCK_DISTANCE) return
    locked = dx > dy ? 'horizontal' : 'vertical'
  }

  const onEnd = (e: TouchEvent) => {
    if (!tracking) return
    const direction = locked
    const target = startTarget
    const t = e.changedTouches[0]
    reset()
    if (!t) return

    if (direction === 'horizontal') {
      const dx = t.clientX - startX
      if (Math.abs(dx) < SWIPE_THRESHOLD) return
      if (dx < 0) nav.next()
      else nav.prev()
      return
    }

    if (direction !== null) return

    const dx = Math.abs(t.clientX - startX)
    const dy = Math.abs(t.clientY - startY)
    if (dx > TAP_MOVEMENT_LIMIT || dy > TAP_MOVEMENT_LIMIT) return
    if (isInteractiveTarget(target)) return
    nav.next()
  }

  onMounted(() => {
    window.addEventListener('touchstart', onStart, { passive: true })
    window.addEventListener('touchmove', onMove, { passive: true })
    window.addEventListener('touchend', onEnd, { passive: true })
    window.addEventListener('touchcancel', reset, { passive: true })
  })

  onBeforeUnmount(() => {
    window.removeEventListener('touchstart', onStart)
    window.removeEventListener('touchmove', onMove)
    window.removeEventListener('touchend', onEnd)
    window.removeEventListener('touchcancel', reset)
  })
}
