# introdution-slidev

Kengo Nishi の自己紹介スライド。Nuxt 3 (SSG) で構築し、Vercel で配信している。

> 旧来は [Slidev](https://sli.dev/) で構築していたが、Vue/Nuxt 部品化と表現の自由度向上のために移管した。リポジトリ名は履歴の都合で `introdution-slidev` のまま据え置いている。

## 必要環境

- Node.js 22.x

## セットアップ

```sh
npm install
```

## 開発サーバ

```sh
npm run dev
```

http://localhost:3000 にアクセス（`/` は `/1` にリダイレクト）。

## ビルド

```sh
npm run build
```

`.vercel/output/static/` 以下に静的サイトが生成される（Vercel Build Output API v3）。

## スライドの追加・編集

- スライド本体: `components/slides/Slide*.vue`
- 一覧と順序: `data/slides.ts`
- 共通 UI 部品: `components/ui/*`
- ステージ枠 / ナビ: `components/stage/*`
- 状態管理 (composable): `composables/use*.ts`

## ナビゲーション

| 入力 | 動作 |
|---|---|
| `→` / `Space` / `PageDown` | 段階表示が残っていれば次ステップ、無ければ次スライド |
| `←` / `PageUp` | 前ステップ → 前スライド |
| `Home` / `End` | 最初 / 最後のスライド |
| 横スワイプ (SP) | 次 / 前スライド |

## ライセンス

MIT
