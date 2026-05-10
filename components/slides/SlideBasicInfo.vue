<script setup lang="ts">
const facts = [
  { emoji: '📛', label: 'Name', value: 'Kengo Nishi' },
  { emoji: '🎂', label: 'Age', value: '24' },
  { emoji: '💼', label: 'Role', value: 'Frontend Developer' },
] as const
</script>

<template>
  <div class="slide-basic">
    <Motion
      :initial="{ opacity: 0, y: 16 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }"
    >
      <GradientText as="h1" variant="title">Basic Information</GradientText>
    </Motion>

    <div class="cols">
      <ul class="facts">
        <SlideStep v-for="(f, i) in facts" :key="f.label" :step="i + 1">
          <li class="fact">
            <span class="emoji">{{ f.emoji }}</span>
            <strong>{{ f.label }}</strong>
            <span class="dash">—</span>
            <span>{{ f.value }}</span>
          </li>
        </SlideStep>
      </ul>

      <SlideStep :step="4">
        <pre class="code"><code>name: <span class="str">"Kengo Nishi"</span>
role: <span class="str">"Frontend Engineer"</span>
location: <span class="str">"Tokyo, Japan"</span>
languages:
  - Japanese
  - English</code></pre>
      </SlideStep>
    </div>
  </div>
</template>

<style scoped>
.slide-basic {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 3rem 4rem;
  gap: 2rem;
}

.cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.facts {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.fact {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.05rem;
}

.emoji {
  font-size: 1.5rem;
}

.dash {
  opacity: 0.5;
}

.code {
  margin: 0;
  padding: 1.25rem 1.5rem;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  font-family: 'Fira Code', monospace;
  font-size: 0.85rem;
  line-height: 1.6;
  color: #d6e1ec;
}

.str {
  color: var(--color-accent, #4EC5D4);
}

@media (max-width: 768px) {
  .slide-basic {
    padding: 2rem 1.25rem;
  }

  .cols {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
