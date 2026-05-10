<template>
  <div class="social-links">
    <a
      href="https://github.com/N-i-ke"
      target="_blank"
      rel="noopener"
      aria-label="GitHub"
      class="link"
    >
      <Icon name="carbon:logo-github" />
    </a>
  </div>
</template>

<style scoped>
.social-links {
  display: inline-flex;
  gap: 0.5rem;
}

.link {
  font-size: 1.5rem;
  width: 2.25rem;
  height: 2.25rem;
  display: inline-grid;
  place-items: center;
  border-radius: 50%;
  color: #fff;
  opacity: 0.5;
  transition: opacity 160ms ease, color 160ms ease, background 160ms ease;
}

.link:hover {
  opacity: 1;
  color: var(--color-accent, #4EC5D4);
  background: rgba(78, 197, 212, 0.1);
}
</style>
