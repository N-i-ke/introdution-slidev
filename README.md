# introdution-slidev

Kengo Nishi の自己紹介スライド。Nuxt 3 (SSG) で構築し、Vercel で配信している。

> 旧来は [Slidev](https://sli.dev/) で構築していたが、Vue/Nuxt 部品化と表現の自由度向上のために移管した。リポジトリ名は履歴の都合で `introdution-slidev` のまま据え置いている。

## 必要環境

- Node.js 22.x

## セットアップ

```sh
npm install
cp .env.example .env  # 必要に応じて値を埋める
```

## 環境変数

`.env` 経由で設定する (リポジトリにはコミットしない。詳細は `.env.example` を参照)。

| 変数 | 用途 |
|---|---|
| `NUXT_PUBLIC_GA_ID` | GA4 Measurement ID (例: `G-XXXXXXXXXX`)。未設定時は gtag を出力しない。 |

本番 (Vercel) では Project Settings → Environment Variables に同名で設定する。

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
- 計測 / 副作用プラグイン: `plugins/*.client.ts`

## ナビゲーション

| 入力 | 動作 |
|---|---|
| `→` / `Space` / `PageDown` | 段階表示が残っていれば次ステップ、無ければ次スライド |
| `←` / `PageUp` | 前ステップ → 前スライド |
| `Home` / `End` | 最初 / 最後のスライド |
| 横スワイプ (SP) | 次 / 前スライド |
| 画面タップ (SP) | 次ステップ / 次スライド (ボタン・リンク等のインタラクティブ要素上は除外) |

## 計測

Google Analytics 4 を導入している。`NUXT_PUBLIC_GA_ID` が設定されているビルドでのみ gtag.js がプリレンダリング HTML に焼き込まれ、SPA ルート遷移ごとに `page_view` を送信する (`plugins/gtag.client.ts`)。

## ライセンス

MIT
