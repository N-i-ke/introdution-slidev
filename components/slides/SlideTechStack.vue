<script setup lang="ts">
const techs = [
  { id: 'frontend', icon: '🌐', title: 'Frontend', subtitle: 'HTML / CSS / JS' },
  { id: 'typescript', icon: '🔷', title: 'TypeScript', subtitle: 'Type Safety' },
  { id: 'react-vue', icon: '⚛️', title: 'React / Vue.js', subtitle: 'SPA / Component' },
  { id: 'next-nuxt', icon: '🚀', title: 'Next.js / Nuxt.js', subtitle: 'SSR / SSG' },
  { id: 'git', icon: '🐙', title: 'Git / GitHub', subtitle: 'Version Control' },
  { id: 'pkg', icon: '📦', title: 'npm / pnpm / yarn', subtitle: 'Package Manager' },
] as const
</script>

<template>
  <div class="slide-tech">
    <Motion
      :initial="{ opacity: 0, y: 16 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }"
    >
      <GradientText as="h1" variant="title">
        Technology Stack <span class="emoji">⚡</span>
      </GradientText>
    </Motion>

    <div class="grid">
      <SlideStep v-for="(t, i) in techs" :key="t.id" :step="i + 1">
        <TechCard :icon="t.icon" :title="t.title" :subtitle="t.subtitle" />
      </SlideStep>
    </div>
  </div>
</template>

<style scoped>
.slide-tech {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 3rem 4rem;
  gap: 1.75rem;
}

.emoji {
  -webkit-text-fill-color: initial;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

@media (max-width: 768px) {
  .slide-tech {
    padding: 2rem 1.25rem;
    gap: 1.25rem;
  }

  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
