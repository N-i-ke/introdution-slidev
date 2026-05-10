import type { Component } from 'vue'

export type TransitionName = 'slide-left' | 'slide-up' | 'fade-out' | 'fade'

export interface SlideMeta {
  no: number
  id: string
  title: string
  totalSteps: number
  transition: TransitionName
  component: () => Promise<{ default: Component }>
}
