<script setup lang="ts">
defineProps<{
  emoji: string
  label: string
}>()
</script>

<template>
  <div class="hobby-item">
    <span class="emoji">{{ emoji }}</span>
    <span class="label">{{ label }}</span>
  </div>
</template>

<style scoped>
.hobby-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1rem 1.5rem;
  transition: background 240ms ease, border-color 240ms ease;
}

.hobby-item:hover {
  background: rgba(78, 197, 212, 0.1);
  border-color: var(--color-accent, #4EC5D4);
}

.emoji {
  font-size: 2.25rem;
  line-height: 1;
}

.label {
  font-size: 1.15rem;
}
</style>
