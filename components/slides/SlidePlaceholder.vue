<script setup lang="ts">
const { currentNo, currentSlide } = useSlideNav()
const { step, max } = useClickStep()
</script>

<template>
  <div class="placeholder">
    <p class="badge">slide #{{ currentNo }}</p>
    <h1 class="title">{{ currentSlide?.title ?? '—' }}</h1>
    <p class="meta">
      step {{ step }} / {{ max }} · transition: {{ currentSlide?.transition ?? '—' }}
    </p>

    <div class="reveal-stack">
      <SlideStep v-for="i in (max || 0)" :key="i" :step="i">
        <p class="reveal-line">step {{ i }} revealed</p>
      </SlideStep>
    </div>
  </div>
</template>

<style scoped>
.placeholder {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  padding: 2.5rem 2rem;
  text-align: center;
}

.badge {
  font-family: 'Fira Code', monospace;
  font-size: 0.75rem;
  color: #4EC5D4;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: 0;
}

.title {
  font-size: clamp(2rem, 5vw, 3.2rem);
  margin: 0;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.meta {
  font-size: 0.85rem;
  opacity: 0.55;
  margin: 0;
}

.reveal-stack {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-height: 6rem;
}

.reveal-line {
  margin: 0;
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.85);
}
</style>
