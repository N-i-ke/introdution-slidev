---
title: "自己紹介スライド"
theme: default
transition: slide-left
mdc: true
---

# 自己紹介 {.text-gradient}

<div class="pt-12">
  <span v-click class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Frontend Engineer 🚀
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

# 基本情報 {.text-info}

<v-clicks>

- 📛 **名前** - （あなたの名前）
- 🎂 **年齢** - （例：28歳）
- 💼 **職業** - フロントエンドエンジニア

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

# 技術スタック ⚡

<div class="grid grid-cols-3 gap-4 pt-4">
  <div v-click class="tech-card">
    <div class="text-3xl mb-2">🌐</div>
    <div class="font-bold">Frontend</div>
    <div class="text-sm opacity-70">HTML / CSS / JS</div>
  </div>
  <div v-click class="tech-card">
    <div class="text-3xl mb-2">🔷</div>
    <div class="font-bold">TypeScript</div>
    <div class="text-sm opacity-70">型安全な開発</div>
  </div>
  <div v-click class="tech-card">
    <div class="text-3xl mb-2">⚛️</div>
    <div class="font-bold">React / Vue.js</div>
    <div class="text-sm opacity-70">SPA / コンポーネント</div>
  </div>
  <div v-click class="tech-card">
    <div class="text-3xl mb-2">🚀</div>
    <div class="font-bold">Next.js / Nuxt.js</div>
    <div class="text-sm opacity-70">SSR / SSG</div>
  </div>
  <div v-click class="tech-card">
    <div class="text-3xl mb-2">🐙</div>
    <div class="font-bold">Git / GitHub</div>
    <div class="text-sm opacity-70">バージョン管理</div>
  </div>
  <div v-click class="tech-card">
    <div class="text-3xl mb-2">📦</div>
    <div class="font-bold">npm / pnpm</div>
    <div class="text-sm opacity-70">パッケージ管理</div>
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
layout: center
transition: slide-left
---

# 趣味・関心 🎯

<div class="grid grid-cols-2 gap-8 pt-6">
  <div v-click v-motion :initial="{ x: -80, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 100 } }" class="hobby-item">
    <span class="text-4xl">🎵</span>
    <span class="ml-4 text-xl">音楽鑑賞</span>
  </div>
  <div v-click v-motion :initial="{ x: 80, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 200 } }" class="hobby-item">
    <span class="text-4xl">✈️</span>
    <span class="ml-4 text-xl">旅行</span>
  </div>
  <div v-click v-motion :initial="{ x: -80, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 300 } }" class="hobby-item">
    <span class="text-4xl">🎮</span>
    <span class="ml-4 text-xl">ゲーム</span>
  </div>
  <div v-click v-motion :initial="{ x: 80, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 400 } }" class="hobby-item">
    <span class="text-4xl">💻</span>
    <span class="ml-4 text-xl">プログラミング</span>
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

# これからの目標 🎯

<div class="mt-8 space-y-6">
  <div v-click class="goal-card">
    <div class="goal-number">01</div>
    <div>
      <div class="font-bold text-lg">新しい技術の習得</div>
      <div class="text-sm opacity-60 mt-1">最新のフレームワークやツールをキャッチアップ</div>
    </div>
  </div>
  <div v-click class="goal-card">
    <div class="goal-number">02</div>
    <div>
      <div class="font-bold text-lg">チーム開発の経験を積む</div>
      <div class="text-sm opacity-60 mt-1">アジャイル・スクラムでのチーム協業</div>
    </div>
  </div>
  <div v-click class="goal-card">
    <div class="goal-number">03</div>
    <div>
      <div class="font-bold text-lg">OSS活動への参加</div>
      <div class="text-sm opacity-60 mt-1">オープンソースコミュニティへの貢献</div>
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

# ご清聴ありがとうございました！ 🙏

<div v-click class="mt-8 text-xl opacity-80">
  ご質問があればどうぞ！
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
