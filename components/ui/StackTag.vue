<template>
  <span class="stack-tag">
    <slot />
  </span>
</template>

<style scoped>
.stack-tag {
  display: inline-block;
  font-size: 0.7rem;
  padding: 0.2rem 0.55rem;
  background: rgba(78, 197, 212, 0.15);
  border: 1px solid rgba(78, 197, 212, 0.3);
  border-radius: 4px;
  color: var(--color-accent, #4EC5D4);
  white-space: nowrap;
  font-family: 'Fira Code', monospace;
}
</style>
