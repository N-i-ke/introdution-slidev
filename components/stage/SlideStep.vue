<script setup lang="ts">
const props = defineProps<{ step: number }>()
const { step } = useClickStep()
const visible = computed(() => step.value >= props.step)
</script>

<template>
  <AnimatePresence>
    <Motion
      v-if="visible"
      :initial="{ opacity: 0, y: 14, scale: 0.97 }"
      :animate="{ opacity: 1, y: 0, scale: 1 }"
      :exit="{ opacity: 0, y: -8, scale: 0.97 }"
      :transition="{ type: 'spring', stiffness: 260, damping: 24, mass: 0.8 }"
      class="slide-step"
    >
      <slot />
    </Motion>
  </AnimatePresence>
</template>

<style scoped>
.slide-step {
  display: block;
}
</style>
