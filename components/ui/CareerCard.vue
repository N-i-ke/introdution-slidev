<script setup lang="ts">
defineProps<{
  period: string
  company: string
  companyUrl: string
  role: string
  note?: string
  stack: readonly string[]
}>()
</script>

<template>
  <div class="career-card">
    <div class="period">{{ period }}</div>
    <div class="info">
      <a :href="companyUrl" target="_blank" rel="noopener" class="company">
        {{ company }}<span v-if="note" class="note">({{ note }})</span>
      </a>
      <div class="role">{{ role }}</div>
    </div>
    <div class="stack">
      <StackTag v-for="t in stack" :key="t">{{ t }}</StackTag>
    </div>
  </div>
</template>

<style scoped>
.career-card {
  display: grid;
  grid-template-columns: 9rem 11rem 1fr;
  align-items: center;
  gap: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.1rem 1.4rem;
  transition: background 240ms ease, border-color 240ms ease, transform 240ms ease, box-shadow 240ms ease;
}

.career-card:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: var(--color-accent, #4EC5D4);
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(78, 197, 212, 0.12);
}

.period {
  font-family: 'Fira Code', monospace;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--color-accent, #4EC5D4);
  white-space: nowrap;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.company {
  font-weight: 700;
  font-size: 1.05rem;
  color: #fff;
  transition: color 160ms ease;
}

.company:hover {
  color: var(--color-accent, #4EC5D4);
}

.note {
  margin-left: 0.4rem;
  font-size: 0.7rem;
  font-weight: 400;
  opacity: 0.5;
}

.role {
  font-size: 0.85rem;
  opacity: 0.7;
}

.stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

@media (max-width: 768px) {
  .career-card {
    grid-template-columns: 1fr;
    gap: 0.6rem;
    padding: 1rem;
  }

  .period {
    font-size: 0.8rem;
  }
}
</style>
