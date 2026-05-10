<script setup lang="ts">
useHead({ titleTemplate: (t) => (t ? `${t} | Kengo Nishi` : 'Kengo Nishi') })
</script>

<template>
  <div class="app-shell">
    <main class="hello">
      <h1 class="title">Nuxt skeleton ready</h1>
      <p class="subtitle">Phase 0 complete — slide migration starts at Phase 1.</p>
    </main>
  </div>
</template>

<style scoped>
.app-shell {
  min-height: 100svh;
  display: grid;
  place-items: center;
  background: linear-gradient(to bottom, #05080f, #0b1120, #0d0f1a, #05080f);
  color: #fff;
  font-family: 'Nunito Sans', system-ui, sans-serif;
}

.hello {
  text-align: center;
  padding: 2rem;
}

.title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0 0 1rem;
}

.subtitle {
  opacity: 0.7;
  font-size: 1rem;
}
</style>
