---
title: "introduction"
theme: default
transition: slide-left
mdc: true
---

# Introduction {.text-gradient}

<div class="pt-12">
  <span v-click class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Frontend Developer
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/N-i-ke" target="_blank" alt="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<style>
.text-gradient {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  font-size: 3.5em;
}
</style>

---
transition: fade-out
layout: two-cols
layoutClass: gap-16
---

# Basic Information {.text-info}

<v-clicks>

- 📛 **Name** - Kengo Nishi
- 🎂 **Age** - 24
- 💼 **role** - Frontend Developer

</v-clicks>

::right::

<div v-click>

```yaml
name: "Your Name"
role: "Frontend Engineer"
location: "Tokyo, Japan"
languages:
  - Japanese
  - English
```

</div>

<style>
.text-info {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
transition: slide-up
---

# technology stack ⚡

<div class="grid grid-cols-3 gap-4 pt-4">
  <div v-click class="tech-card">
    <div class="text-3xl mb-2">🌐</div>
    <div class="font-bold">Frontend</div>
    <div class="text-sm opacity-70">HTML / CSS / JS</div>
  </div>
  <div v-click class="tech-card">
    <div class="text-3xl mb-2">🔷</div>
    <div class="font-bold">TypeScript</div>
    <div class="text-sm opacity-70">Type Safety</div>
  </div>
  <div v-click class="tech-card">
    <div class="text-3xl mb-2">⚛️</div>
    <div class="font-bold">React / Vue.js</div>
    <div class="text-sm opacity-70">SPA / Component</div>
  </div>
  <div v-click class="tech-card">
    <div class="text-3xl mb-2">🚀</div>
    <div class="font-bold">Next.js / Nuxt.js</div>
    <div class="text-sm opacity-70">SSR / SSG</div>
  </div>
  <div v-click class="tech-card">
    <div class="text-3xl mb-2">🐙</div>
    <div class="font-bold">Git / GitHub</div>
    <div class="text-sm opacity-70">version control</div>
  </div>
  <div v-click class="tech-card">
    <div class="text-3xl mb-2">📦</div>
    <div class="font-bold">npm / pnpm / yarn</div>
    <div class="text-sm opacity-70">package control</div>
  </div>
</div>

<style>
.tech-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.2rem;
  text-align: center;
  transition: all 0.3s ease;
}
.tech-card:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: #4EC5D4;
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(78, 197, 212, 0.15);
}
</style>

---
transition: slide-up
---

# Career History 📋

<div class="grid grid-cols-1 gap-4 pt-6">
  <div v-click class="career-card">
    <div class="career-period">2023/07 - 2024/07</div>
    <div class="career-info">
      <a href="https://benly.co.jp" target="_blank" class="company-link font-bold text-lg">VOYAGER JAPAN inc. <span class="text-xs opacity-50">(formerly BENLY)</span></a>
      <div class="text-sm opacity-70">Web Creator</div>
    </div>
    <div class="career-stack">
      <span class="stack-tag">HTML</span>
      <span class="stack-tag">CSS</span>
      <span class="stack-tag">Sass</span>
      <span class="stack-tag">jQuery</span>
      <span class="stack-tag">JavaScript</span>
      <span class="stack-tag">Liquid</span>
      <span class="stack-tag">WordPress</span>
      <span class="stack-tag">Shopify</span>
    </div>
  </div>
  <div v-click class="career-card">
    <div class="career-period">2024/08 - 2025/12</div>
    <div class="career-info">
      <a href="https://n2i.jp" target="_blank" class="company-link font-bold text-lg">N2i inc.</a>
      <div class="text-sm opacity-70">Frontend Developer</div>
    </div>
    <div class="career-stack">
      <span class="stack-tag">HTML</span>
      <span class="stack-tag">CSS</span>
      <span class="stack-tag">Sass</span>
      <span class="stack-tag">JavaScript</span>
      <span class="stack-tag">React.js</span>
      <span class="stack-tag">Next.js</span>
      <span class="stack-tag">Vue.js</span>
      <span class="stack-tag">TypeScript</span>
      <span class="stack-tag">Node.js</span>
      <span class="stack-tag">Express.js</span>
    </div>
  </div>
  <div v-click class="career-card">
    <div class="career-period">2026/01 - Now</div>
    <div class="career-info">
      <a href="https://ldfcorp.com/ja" target="_blank" class="company-link font-bold text-lg">LINE Digital Frontier corp.</a>
      <div class="text-sm opacity-70">Frontend Developer</div>
    </div>
    <div class="career-stack">
      <span class="stack-tag">HTML</span>
      <span class="stack-tag">CSS</span>
      <span class="stack-tag">Sass</span>
      <span class="stack-tag">JavaScript</span>
      <span class="stack-tag">Vue.js</span>
      <span class="stack-tag">Nuxt.js</span>
      <span class="stack-tag">TypeScript</span>
    </div>
  </div>
</div>

<style>
.career-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.2rem 1.5rem;
  transition: all 0.3s ease;
}
.career-card:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: #4EC5D4;
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(78, 197, 212, 0.15);
}
.career-period {
  font-size: 0.9rem;
  font-weight: 700;
  color: #4EC5D4;
  white-space: nowrap;
  min-width: 140px;
  font-family: monospace;
}
.career-info {
  min-width: 180px;
}
.career-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  flex: 1;
}
.company-link {
  display: block;
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease;
}
.company-link:hover {
  color: #4EC5D4;
}
.stack-tag {
  font-size: 0.65rem;
  padding: 0.15rem 0.5rem;
  background: rgba(78, 197, 212, 0.15);
  border: 1px solid rgba(78, 197, 212, 0.3);
  border-radius: 4px;
  color: #4EC5D4;
  white-space: nowrap;
}
</style>

---
layout: center
transition: slide-left
---

# interest 🎯

<div class="grid grid-cols-2 gap-8 pt-6">
  <div v-click v-motion :initial="{ x: -80, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 100 } }" class="hobby-item">
    <span class="text-4xl">🍻</span>
    <span class="ml-4 text-xl">drink</span>
  </div>
  <div v-click v-motion :initial="{ x: 80, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 200 } }" class="hobby-item">
    <span class="text-4xl">✈️</span>
    <span class="ml-4 text-xl">trip</span>
  </div>
  <div v-click v-motion :initial="{ x: -80, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 300 } }" class="hobby-item">
    <span class="text-4xl">🍚</span>
    <span class="ml-4 text-xl">food</span>
  </div>
  <div v-click v-motion :initial="{ x: 80, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 400 } }" class="hobby-item">
    <span class="text-4xl">📺</span>
    <span class="ml-4 text-xl">watch anime drama etc...</span>
  </div>
</div>

<style>
.hobby-item {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1rem 1.5rem;
  transition: all 0.3s ease;
}
.hobby-item:hover {
  background: rgba(78, 197, 212, 0.1);
  border-color: #4EC5D4;
}
</style>

---
transition: fade
---

# Future Goals 🎯

<div class="mt-8 space-y-6">
  <div v-click class="goal-card">
    <div class="goal-number">01</div>
    <div>
      <div class="font-bold text-lg">Learn New Technologies</div>
      <div class="text-sm opacity-60 mt-1">Keep up with the latest frameworks and tools</div>
    </div>
  </div>
  <div v-click class="goal-card">
    <div class="goal-number">02</div>
    <div>
      <div class="font-bold text-lg">Pursue Frontend Architecture & CI/CD</div>
      <div class="text-sm opacity-60 mt-1">Deep dive into frontend architecture design and CI/CD pipelines</div>
    </div>
  </div>
  <div v-click class="goal-card">
    <div class="goal-number">03</div>
    <div>
      <div class="font-bold text-lg">Gain Team Development Experience</div>
      <div class="text-sm opacity-60 mt-1">Collaborate in Agile / Scrum teams</div>
    </div>
  </div>
</div>

<style>
.goal-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-left: 3px solid #4EC5D4;
  border-radius: 0 12px 12px 0;
  padding: 1rem 1.5rem;
  transition: all 0.3s ease;
}
.goal-card:hover {
  background: rgba(78, 197, 212, 0.08);
  transform: translateX(8px);
}
.goal-number {
  font-size: 2rem;
  font-weight: 800;
  color: #4EC5D4;
  opacity: 0.6;
  font-family: monospace;
}
</style>

---
layout: center
class: text-center
transition: fade
---

# Thank you for listening! 🙏

<div v-click class="mt-8 text-xl opacity-80">
  Feel free to ask any questions!
</div>

<div v-click class="mt-12 flex justify-center gap-6">
  <a href="https://github.com/N-i-ke" target="_blank" class="link-btn">
    <carbon-logo-github class="inline mr-2" /> GitHub
  </a>
</div>

<style>
.link-btn {
  display: inline-flex;
  align-items: center;
  padding: 0.6rem 1.5rem;
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 8px;
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
}
.link-btn:hover {
  border-color: #4EC5D4;
  background: rgba(78, 197, 212, 0.1);
  transform: translateY(-2px);
}
</style>
