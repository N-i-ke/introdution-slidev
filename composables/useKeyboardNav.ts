export const useKeyboardNav = () => {
  if (import.meta.server) return

  const nav = useSlideNav()
  const { total } = useSlides()

  const isInputTarget = (target: EventTarget | null) =>
    target instanceof HTMLElement
    && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)

  const handler = (e: KeyboardEvent) => {
    if (isInputTarget(e.target)) return
    switch (e.key) {
      case 'ArrowRight':
      case ' ':
      case 'PageDown':
        e.preventDefault()
        nav.next()
        break
      case 'ArrowLeft':
      case 'PageUp':
        e.preventDefault()
        nav.prev()
        break
      case 'Home':
        e.preventDefault()
        nav.goto(1)
        break
      case 'End':
        e.preventDefault()
        nav.goto(total)
        break
    }
  }

  onMounted(() => window.addEventListener('keydown', handler))
  onBeforeUnmount(() => window.removeEventListener('keydown', handler))
}
