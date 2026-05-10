<script setup lang="ts">
type Variant = 'hero' | 'title' | 'subtitle'

const props = withDefaults(
  defineProps<{
    as?: keyof HTMLElementTagNameMap
    variant?: Variant
  }>(),
  { as: 'h1', variant: 'title' },
)
</script>

<template>
  <component :is="props.as" class="gradient-text" :class="`variant-${props.variant}`">
    <slot />
  </component>
</template>

<style scoped>
.gradient-text {
  margin: 0;
  background-color: var(--color-accent-mid, #2B90B6);
  background-image: linear-gradient(
    45deg,
    var(--color-accent, #4EC5D4) 10%,
    var(--color-accent-deep, #146b8c) 60%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  line-height: 1.05;
}

.variant-hero {
  font-size: clamp(3rem, 8vw, 5.5rem);
  font-weight: 800;
  letter-spacing: -0.02em;
}

.variant-title {
  font-size: clamp(2rem, 4.5vw, 3rem);
  font-weight: 800;
  letter-spacing: -0.01em;
}

.variant-subtitle {
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-weight: 700;
}
</style>
