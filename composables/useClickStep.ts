export const useClickStep = () => {
  const step = useState('clickStep', () => 0)
  const max = useState('clickStepMax', () => 0)

  const setMax = (n: number) => {
    max.value = Math.max(0, n)
    if (step.value > max.value) step.value = max.value
  }

  const reset = () => {
    step.value = 0
  }

  const set = (n: number) => {
    step.value = Math.min(Math.max(0, n), max.value)
  }

  const next = () => {
    if (step.value < max.value) {
      step.value++
      return true
    }
    return false
  }

  const prev = () => {
    if (step.value > 0) {
      step.value--
      return true
    }
    return false
  }

  return { step, max, setMax, reset, set, next, prev }
}
