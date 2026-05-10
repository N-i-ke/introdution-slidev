<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { SLIDE_TOTAL } from '~/data/slides'

definePageMeta({
  validate: (route) => {
    const raw = route.params.no
    const n = Array.isArray(raw) ? Number(raw[0]) : Number(raw)
    return Number.isInteger(n) && n >= 1 && n <= SLIDE_TOTAL
  },
})

const route = useRoute()
const { slides } = useSlides()
const clickStep = useClickStep()

const no = computed(() => Number(route.params.no))
const slide = computed(() => slides.find(s => s.no === no.value))
const slideComponent = computed(() =>
  slide.value ? defineAsyncComponent(slide.value.component) : null,
)

watch(
  no,
  () => {
    clickStep.setMax(slide.value?.totalSteps ?? 0)
    clickStep.reset()
  },
  { immediate: true },
)

useHead(() => ({
  title: slide.value?.title ?? `Slide ${no.value}`,
}))
</script>

<template>
  <SlideStage>
    <Transition :name="slide?.transition ?? 'fade'" mode="out-in">
      <component :is="slideComponent" :key="no" />
    </Transition>
  </SlideStage>
  <SlideControls />
</template>

<style>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-up-enter-active,
.slide-up-leave-active,
.fade-out-enter-active,
.fade-out-leave-active,
.fade-enter-active,
.fade-leave-active {
  transition: opacity var(--duration-slide) ease, transform var(--duration-slide) ease;
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(24px);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-24px);
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.fade-out-enter-from,
.fade-out-leave-to,
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
