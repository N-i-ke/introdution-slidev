<script setup lang="ts">
const { currentNo } = useSlideNav()
const { total } = useSlides()
const progress = computed(() => (currentNo.value / total) * 100)
</script>

<template>
  <div class="progress-bar" aria-hidden="true">
    <div class="track">
      <Motion
        class="fill"
        :initial="false"
        :animate="{ width: `${progress}%` }"
        :transition="{ type: 'spring', stiffness: 200, damping: 26 }"
      />
    </div>
  </div>
</template>

<style scoped>
.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  z-index: 20;
  pointer-events: none;
}

.track {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.04);
}

.fill {
  height: 100%;
  background: linear-gradient(
    90deg,
    var(--color-accent, #4EC5D4) 0%,
    var(--color-accent-deep, #146b8c) 100%
  );
  box-shadow: 0 0 12px rgba(78, 197, 212, 0.5);
}
</style>
