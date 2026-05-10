import type { SlideMeta } from '~/types/slide'

export const slides: readonly SlideMeta[] = [
  {
    no: 1,
    id: 'intro',
    title: 'Introduction',
    totalSteps: 1,
    transition: 'slide-left',
    component: () => import('~/components/slides/SlideIntro.vue'),
  },
  {
    no: 2,
    id: 'basic-info',
    title: 'Basic Information',
    totalSteps: 4,
    transition: 'fade-out',
    component: () => import('~/components/slides/SlideBasicInfo.vue'),
  },
  {
    no: 3,
    id: 'tech-stack',
    title: 'Technology Stack',
    totalSteps: 6,
    transition: 'slide-up',
    component: () => import('~/components/slides/SlideTechStack.vue'),
  },
  {
    no: 4,
    id: 'career',
    title: 'Career History',
    totalSteps: 3,
    transition: 'slide-up',
    component: () => import('~/components/slides/SlideCareer.vue'),
  },
  {
    no: 5,
    id: 'interest',
    title: 'Interest',
    totalSteps: 4,
    transition: 'slide-left',
    component: () => import('~/components/slides/SlideInterest.vue'),
  },
  {
    no: 6,
    id: 'goals',
    title: 'Future Goals',
    totalSteps: 3,
    transition: 'fade',
    component: () => import('~/components/slides/SlideGoals.vue'),
  },
  {
    no: 7,
    id: 'thanks',
    title: 'Thank you',
    totalSteps: 2,
    transition: 'fade',
    component: () => import('~/components/slides/SlideThanks.vue'),
  },
] as const

export const SLIDE_TOTAL = slides.length
