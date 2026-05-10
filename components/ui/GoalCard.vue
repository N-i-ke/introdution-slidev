<script setup lang="ts">
defineProps<{
  index: number
  title: string
  description: string
}>()
</script>

<template>
  <div class="goal-card">
    <div class="number">{{ String(index).padStart(2, '0') }}</div>
    <div class="body">
      <div class="title">{{ title }}</div>
      <div class="description">{{ description }}</div>
    </div>
  </div>
</template>

<style scoped>
.goal-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-left: 3px solid var(--color-accent, #4EC5D4);
  border-radius: 0 12px 12px 0;
  padding: 1rem 1.4rem;
  transition: background 240ms ease, transform 240ms ease;
}

.goal-card:hover {
  background: rgba(78, 197, 212, 0.08);
  transform: translateX(8px);
}

.number {
  font-family: 'Fira Code', monospace;
  font-size: 2rem;
  font-weight: 800;
  color: var(--color-accent, #4EC5D4);
  opacity: 0.6;
  flex-shrink: 0;
}

.body {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.title {
  font-weight: 700;
  font-size: 1.1rem;
}

.description {
  font-size: 0.85rem;
  opacity: 0.6;
}
</style>
