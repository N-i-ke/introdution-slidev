<template>
  <div class="slide-thanks">
    <div class="center">
      <Motion
        :initial="{ opacity: 0, y: 24 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }"
      >
        <h1 class="title">
          Thank you for listening! <span class="emoji">🙏</span>
        </h1>
      </Motion>

      <SlideStep :step="1">
        <Motion
          :initial="{ opacity: 0, y: 12 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5 }"
        >
          <p class="subtitle">Feel free to ask any questions!</p>
        </Motion>
      </SlideStep>

      <SlideStep :step="2">
        <Motion
          :initial="{ opacity: 0, y: 12 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5 }"
        >
          <a
            href="https://github.com/N-i-ke"
            target="_blank"
            rel="noopener"
            class="link-btn"
          >
            <Icon name="carbon:logo-github" />
            <span>GitHub</span>
          </a>
        </Motion>
      </SlideStep>
    </div>
  </div>
</template>

<style scoped>
.slide-thanks {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  text-align: center;
}

.center {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.75rem;
}

.title {
  margin: 0;
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 800;
  background-image: linear-gradient(
    45deg,
    var(--color-accent, #4EC5D4) 10%,
    var(--color-accent-deep, #146b8c) 60%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.emoji {
  -webkit-text-fill-color: initial;
}

.subtitle {
  margin: 0;
  font-size: 1.25rem;
  opacity: 0.8;
}

.link-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.6rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: #fff;
  font-size: 1rem;
  transition: background 200ms ease, border-color 200ms ease, transform 200ms ease;
}

.link-btn:hover {
  background: rgba(78, 197, 212, 0.1);
  border-color: var(--color-accent, #4EC5D4);
  transform: translateY(-2px);
}
</style>
