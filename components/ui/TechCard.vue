<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  subtitle: string
}>()
</script>

<template>
  <div class="tech-card">
    <span class="icon">{{ icon }}</span>
    <div class="body">
      <div class="title">{{ title }}</div>
      <div class="subtitle">{{ subtitle }}</div>
    </div>
  </div>
</template>

<style scoped>
.tech-card {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 0.95rem 1.25rem;
  transition: background 240ms ease, border-color 240ms ease, transform 240ms ease;
}

.tech-card:hover {
  background: rgba(78, 197, 212, 0.1);
  border-color: var(--color-accent, #4EC5D4);
  transform: translateY(-2px);
}

.icon {
  font-size: 1.8rem;
  flex-shrink: 0;
  line-height: 1;
}

.body {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  min-width: 0;
}

.title {
  font-weight: 700;
  font-size: 1rem;
}

.subtitle {
  font-size: 0.85rem;
  opacity: 0.7;
}
</style>
