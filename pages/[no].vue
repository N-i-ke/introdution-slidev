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
    <component :is="slideComponent" :key="no" />
  </SlideStage>
  <SlideControls />
</template>
