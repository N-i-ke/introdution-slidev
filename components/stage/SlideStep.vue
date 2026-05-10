<script setup lang="ts">
const props = defineProps<{ step: number }>()
const { step } = useClickStep()
const visible = computed(() => step.value >= props.step)
</script>

<template>
  <Transition name="step" appear>
    <div v-if="visible" class="slide-step">
      <slot />
    </div>
  </Transition>
</template>

<style scoped>
.step-enter-active,
.step-leave-active {
  transition: opacity 220ms ease, transform 220ms ease;
}

.step-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.step-leave-to {
  opacity: 0;
}
</style>
