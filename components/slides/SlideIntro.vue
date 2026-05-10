<template>
  <div class="slide-intro">
    <div class="hero">
      <Motion
        :initial="{ opacity: 0, y: 24 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }"
      >
        <GradientText as="h1" variant="hero">Introduction</GradientText>
      </Motion>

      <SlideStep :step="1">
        <Motion
          :initial="{ opacity: 0, y: 12 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }"
        >
          <span class="role-chip">Frontend Developer</span>
        </Motion>
      </SlideStep>
    </div>

    <SocialLinks class="social-pos" />
  </div>
</template>

<style scoped>
.slide-intro {
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 4.5rem;
}

.hero {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
}

.role-chip {
  display: inline-block;
  padding: 0.4rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.04);
  border-radius: 999px;
  color: #fff;
  font-size: 1.05rem;
  font-weight: 500;
  cursor: default;
  transition: background 200ms ease, border-color 200ms ease;
}

.role-chip:hover {
  background: rgba(78, 197, 212, 0.1);
  border-color: rgba(78, 197, 212, 0.4);
}

.social-pos {
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
}

@media (max-width: 768px) {
  .slide-intro {
    padding: 2.5rem 1.5rem;
    justify-content: center;
  }

  .hero {
    align-items: center;
    text-align: center;
    gap: 1.5rem;
  }

  .social-pos {
    bottom: 5rem;
    right: 50%;
    transform: translateX(50%);
  }
}
</style>
