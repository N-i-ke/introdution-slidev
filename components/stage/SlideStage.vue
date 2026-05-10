<template>
  <div class="stage-frame">
    <div class="stage-canvas">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.stage-frame {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stage-canvas {
  width: 72%;
  aspect-ratio: 16 / 9;
  border-radius: 16px;
  overflow: hidden;
  background: rgba(5, 8, 15, 0.85);
  color: #fff;
  box-shadow:
    0 0 80px rgba(78, 197, 212, 0.08),
    0 0 160px rgba(0, 0, 0, 0.6),
    0 4px 32px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
}

@media (max-width: 768px) {
  .stage-canvas {
    width: 100vw;
    height: 100svh;
    aspect-ratio: auto;
    border-radius: 0;
    box-shadow: none;
    overflow-y: auto;
  }
}
</style>
