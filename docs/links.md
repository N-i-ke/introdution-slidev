# 流入チャネル別リンク (UTM)

各プロフィール / 投稿に貼る公式リンク集。**そのままコピペ**して使う。

ベース URL: `https://introdution-slidev-3tqo.vercel.app`

ルート `/` は Vercel 側で 308 リダイレクト (`vercel.json`) し、クエリは保持されるので `/` に貼っても UTM は GA4 に届く。
ただし保険として、プロフィール欄等では **スライド 1 ページ目 `/1` を直指定** にしておくと、将来リダイレクト設定が変わっても影響を受けない。

## 命名規則

| パラメータ | 規則 | 例 |
|---|---|---|
| `utm_source` | チャネル名 (小文字、ハイフン区切り) | `linkedin`, `youtrust`, `github`, `x`, `zenn`, `qiita` |
| `utm_medium` | 媒体内の配置 | `profile`, `bio`, `pinned`, `readme`, `article`, `post` |
| `utm_campaign` | 固定値 | `self-intro` |
| `utm_content` | 必要時のみ (記事スラッグなど) | `zenn-slug-xxx` |

## 貼り付け先 URL 一覧

### プロフィール

- **LinkedIn** プロフィール
  `https://introdution-slidev-3tqo.vercel.app/1?utm_source=linkedin&utm_medium=profile&utm_campaign=self-intro`

- **Youtrust** プロフィール
  `https://introdution-slidev-3tqo.vercel.app/1?utm_source=youtrust&utm_medium=profile&utm_campaign=self-intro`

- **GitHub** profile README (`N-i-ke/N-i-ke` リポジトリ等)
  `https://introdution-slidev-3tqo.vercel.app/1?utm_source=github&utm_medium=readme&utm_campaign=self-intro`

- **X (Twitter)** bio
  `https://introdution-slidev-3tqo.vercel.app/1?utm_source=x&utm_medium=bio&utm_campaign=self-intro`

- **X (Twitter)** pinned tweet
  `https://introdution-slidev-3tqo.vercel.app/1?utm_source=x&utm_medium=pinned&utm_campaign=self-intro`

- (任意) **Zenn / Qiita** プロフィール
  `https://introdution-slidev-3tqo.vercel.app/1?utm_source=zenn&utm_medium=profile&utm_campaign=self-intro`
  `https://introdution-slidev-3tqo.vercel.app/1?utm_source=qiita&utm_medium=profile&utm_campaign=self-intro`

### 記事 / 投稿 (テンプレート)

記事内リンクは `utm_medium=article`、SNS 投稿は `utm_medium=post`、必要に応じて `utm_content` に記事スラッグを入れる。

```
https://introdution-slidev-3tqo.vercel.app/1?utm_source=zenn&utm_medium=article&utm_campaign=self-intro&utm_content=<記事スラッグ>
https://introdution-slidev-3tqo.vercel.app/1?utm_source=qiita&utm_medium=article&utm_campaign=self-intro&utm_content=<記事スラッグ>
https://introdution-slidev-3tqo.vercel.app/1?utm_source=x&utm_medium=post&utm_campaign=self-intro&utm_content=<投稿の識別子>
```

## GA4 で計測されるか確認する手順

1. 上のいずれかの URL をシークレットウィンドウで開く
2. GA4 → レポート → リアルタイム → 「ユーザーの参照元 / メディア / キャンペーン」カードに該当値が出ているか確認
3. 数日後、集客レポートで `utm_source` 別のセッション数が記録されていることを確認
4. 1〜2 ヶ月後、チャネル別の流入 vs. サイト内行動 (最後のスライドまでの到達率等) を見て次の打ち手を決める

## 仕組みメモ

- `plugins/gtag.client.ts` が SPA ルート遷移ごとに `page_view` を送信する際、`page_location` に `window.location.origin + fullPath` を渡している。`fullPath` はクエリ含みなので UTM は GA4 へ届く
- `vercel.json` の `redirects` でルート `/ → /1` を 308 リダイレクトしており、クエリも保持される
