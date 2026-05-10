<script setup lang="ts">
const hobbies = [
  { id: 'drink', emoji: '🍻', label: 'drink' },
  { id: 'trip', emoji: '✈️', label: 'trip' },
  { id: 'food', emoji: '🍚', label: 'food' },
  { id: 'media', emoji: '📺', label: 'watch anime / drama' },
] as const
</script>

<template>
  <div class="slide-interest">
    <Motion
      :initial="{ opacity: 0, y: 16 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }"
    >
      <GradientText as="h1" variant="title">
        Interest <span class="emoji">🎯</span>
      </GradientText>
    </Motion>

    <div class="grid">
      <SlideStep v-for="(h, i) in hobbies" :key="h.id" :step="i + 1">
        <Motion
          :initial="{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }"
          :animate="{ opacity: 1, x: 0 }"
          :transition="{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }"
        >
          <HobbyItem :emoji="h.emoji" :label="h.label" />
        </Motion>
      </SlideStep>
    </div>
  </div>
</template>

<style scoped>
.slide-interest {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 4rem;
  gap: 2rem;
  text-align: center;
}

.emoji {
  -webkit-text-fill-color: initial;
}

.grid {
  width: 100%;
  max-width: 38rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

@media (max-width: 768px) {
  .slide-interest {
    padding: 2rem 1.25rem;
  }

  .grid {
    grid-template-columns: 1fr;
    gap: 0.9rem;
  }
}
</style>
