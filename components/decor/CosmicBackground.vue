<template>
  <div class="cosmic-bg" aria-hidden="true" />
</template>

<style scoped>
.cosmic-bg {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background:
    radial-gradient(1.5px 1.5px at 10% 15%, rgba(255, 255, 255, 0.7), transparent),
    radial-gradient(1px 1px at 25% 35%, rgba(255, 255, 255, 0.5), transparent),
    radial-gradient(1.5px 1.5px at 45% 10%, rgba(255, 255, 255, 0.6), transparent),
    radial-gradient(1px 1px at 60% 45%, rgba(255, 255, 255, 0.4), transparent),
    radial-gradient(2px 2px at 75% 20%, rgba(255, 255, 255, 0.8), transparent),
    radial-gradient(1px 1px at 85% 55%, rgba(255, 255, 255, 0.5), transparent),
    radial-gradient(1.5px 1.5px at 15% 65%, rgba(255, 255, 255, 0.6), transparent),
    radial-gradient(1px 1px at 35% 80%, rgba(255, 255, 255, 0.4), transparent),
    radial-gradient(2px 2px at 55% 70%, rgba(255, 255, 255, 0.7), transparent),
    radial-gradient(1px 1px at 70% 85%, rgba(255, 255, 255, 0.5), transparent),
    radial-gradient(1.5px 1.5px at 90% 75%, rgba(255, 255, 255, 0.6), transparent),
    radial-gradient(1px 1px at 5% 90%, rgba(255, 255, 255, 0.4), transparent),
    radial-gradient(1px 1px at 50% 50%, rgba(255, 255, 255, 0.3), transparent),
    radial-gradient(1.5px 1.5px at 30% 25%, rgba(255, 255, 255, 0.5), transparent),
    radial-gradient(1px 1px at 80% 40%, rgba(255, 255, 255, 0.4), transparent),
    radial-gradient(ellipse at 20% 50%, rgba(78, 197, 212, 0.06) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 20%, rgba(43, 144, 182, 0.08) 0%, transparent 50%),
    radial-gradient(ellipse at 50% 80%, rgba(100, 60, 180, 0.05) 0%, transparent 50%),
    linear-gradient(to bottom, #05080f, #0b1120, #0d0f1a, #05080f);
}
</style>
