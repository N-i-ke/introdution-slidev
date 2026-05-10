export const useSlideNav = () => {
  const route = useRoute()
  const router = useRouter()
  const { slides, total } = useSlides()
  const clickStep = useClickStep()

  const currentNo = computed(() => {
    const raw = route.params.no
    const n = Array.isArray(raw) ? Number(raw[0]) : Number(raw)
    return Number.isInteger(n) && n >= 1 && n <= total ? n : 1
  })

  const currentSlide = computed(() => slides.find(s => s.no === currentNo.value))
  const isFirst = computed(() => currentNo.value === 1)
  const isLast = computed(() => currentNo.value === total)

  const goto = async (no: number) => {
    if (no < 1 || no > total) return
    if (no === currentNo.value) return
    await router.push(`/${no}`)
  }

  const next = async () => {
    if (clickStep.next()) return
    if (!isLast.value) await goto(currentNo.value + 1)
  }

  const prev = async () => {
    if (clickStep.prev()) return
    if (!isFirst.value) await goto(currentNo.value - 1)
  }

  return { currentNo, currentSlide, isFirst, isLast, goto, next, prev }
}
