<script setup lang="ts">
const { isFirst, isLast, currentNo, prev, next } = useSlideNav()
const { step, max } = useClickStep()
const { total } = useSlides()

const disablePrev = computed(() => isFirst.value && step.value === 0)
const disableNext = computed(() => isLast.value && step.value === max.value)
</script>

<template>
  <div class="controls">
    <button
      class="ctrl-btn"
      :disabled="disablePrev"
      aria-label="Previous"
      @click="prev()"
    >
      ←
    </button>
    <span class="indicator">{{ currentNo }} / {{ total }}</span>
    <button
      class="ctrl-btn"
      :disabled="disableNext"
      aria-label="Next"
      @click="next()"
    >
      →
    </button>
  </div>
</template>

<style scoped>
.controls {
  position: fixed;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 1rem;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 999px;
  backdrop-filter: blur(8px);
  z-index: 10;
}

.ctrl-btn {
  width: 2rem;
  height: 2rem;
  border: none;
  background: transparent;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 50%;
  display: grid;
  place-items: center;
  transition: background 120ms ease, opacity 120ms ease;
}

.ctrl-btn:hover:not(:disabled) {
  background: rgba(78, 197, 212, 0.18);
}

.ctrl-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.indicator {
  font-family: 'Fira Code', monospace;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  min-width: 3.5rem;
  text-align: center;
}
</style>
