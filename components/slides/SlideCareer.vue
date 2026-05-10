<script setup lang="ts">
const careers = [
  {
    id: 'voyager',
    period: '2023/07 – 2024/07',
    company: 'VOYAGER JAPAN inc.',
    note: 'formerly BENLY',
    companyUrl: 'https://benly.co.jp',
    role: 'Web Creator',
    stack: ['HTML', 'CSS', 'Sass', 'jQuery', 'JavaScript', 'Liquid', 'WordPress', 'Shopify'],
  },
  {
    id: 'n2i',
    period: '2024/08 – 2025/12',
    company: 'N2i inc.',
    companyUrl: 'https://n2i.jp',
    role: 'Frontend Developer',
    stack: ['HTML', 'CSS', 'Sass', 'JavaScript', 'React.js', 'Next.js', 'Vue.js', 'TypeScript', 'Node.js'],
  },
  {
    id: 'ldf',
    period: '2026/01 – Now',
    company: 'LINE Digital Frontier corp.',
    companyUrl: 'https://ldfcorp.com/ja',
    role: 'Frontend Developer',
    stack: ['HTML', 'CSS', 'Sass', 'JavaScript', 'Vue.js', 'Nuxt.js', 'TypeScript'],
  },
] as const
</script>

<template>
  <div class="slide-career">
    <Motion
      :initial="{ opacity: 0, y: 16 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }"
    >
      <GradientText as="h1" variant="title">
        Career History <span class="emoji">📋</span>
      </GradientText>
    </Motion>

    <div class="list">
      <SlideStep v-for="(c, i) in careers" :key="c.id" :step="i + 1">
        <CareerCard
          :period="c.period"
          :company="c.company"
          :company-url="c.companyUrl"
          :role="c.role"
          :note="c.note"
          :stack="c.stack"
        />
      </SlideStep>
    </div>
  </div>
</template>

<style scoped>
.slide-career {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 2.5rem 3.5rem;
  gap: 1.25rem;
}

.emoji {
  -webkit-text-fill-color: initial;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

@media (max-width: 768px) {
  .slide-career {
    padding: 2rem 1.25rem;
  }
}
</style>
