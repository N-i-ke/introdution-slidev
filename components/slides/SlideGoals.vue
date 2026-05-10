<script setup lang="ts">
const goals = [
  {
    id: 'learn',
    title: 'Learn New Technologies',
    description: 'Keep up with the latest frameworks and tools',
  },
  {
    id: 'arch',
    title: 'Pursue Frontend Architecture & CI/CD',
    description: 'Deep dive into frontend architecture design and CI/CD pipelines',
  },
  {
    id: 'team',
    title: 'Gain Team Development Experience',
    description: 'Collaborate in Agile / Scrum teams',
  },
] as const
</script>

<template>
  <div class="slide-goals">
    <Motion
      :initial="{ opacity: 0, y: 16 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }"
    >
      <GradientText as="h1" variant="title">
        Future Goals <span class="emoji">🎯</span>
      </GradientText>
    </Motion>

    <div class="list">
      <SlideStep v-for="(g, i) in goals" :key="g.id" :step="i + 1">
        <GoalCard :index="i + 1" :title="g.title" :description="g.description" />
      </SlideStep>
    </div>
  </div>
</template>

<style scoped>
.slide-goals {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 3rem 4rem;
  gap: 1.5rem;
}

.emoji {
  -webkit-text-fill-color: initial;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (max-width: 768px) {
  .slide-goals {
    padding: 2rem 1.25rem;
  }
}
</style>
