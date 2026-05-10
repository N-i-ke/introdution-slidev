import { defineConfig, presetWind, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetWind(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
  ],
  theme: {
    colors: {
      accent: '#4EC5D4',
      accentDeep: '#146b8c',
      accentMid: '#2B90B6',
    },
  },
})
