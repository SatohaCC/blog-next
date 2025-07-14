# 個人ブログ作成プロジェクト

Next.jsを使って個人ブログを作成中です。
このプロジェクトは学習目的で作られています。

## 使用技術

- [Next.js](https://nextjs.org) - Reactのフレームワーク
- TypeScript - 型安全な開発
- [Panda CSS](https://panda-css.com) - モダンなCSS-in-JSソリューション
- [React Aria Components](https://react-spectrum.adobe.com/react-aria/index.html) - アクセシブルなUIコンポーネント
- [MicroCMS](https://microcms.io) - ヘッドレスCMS
- Jest & Testing Library - テスト環境
- ESLint & Prettier - コード品質管理
- Husky & lint-staged - Git フック管理
- [Storybook](https://storybook.js.org/) - UIコンポーネント開発環境
- [Cursor](https://www.cursor.com/ja) - AIアシスト機能付きエディタ

## 開発環境のセットアップ

```bash
# パッケージのインストール
npm install

# 開発サーバーの起動
npm run dev

# テストの実行
npm test

# リントチェック
npm run lint

# ビルド（本番用）
npm run build
```

[http://localhost:3000](http://localhost:3000)にアクセスして確認できます。

## 利用可能なスクリプト

| スクリプト | 説明 |
|-----------|------|
| `npm run dev` | 開発サーバーを起動 |
| `npm run build` | 本番用ビルドを生成 |
| `npm run start` | 本番用サーバーを起動 |
| `npm run lint` | ESLintチェック |
| `npm run lint:fix` | ESLintエラーを自動修正 |
| `npm test` | テストを実行 |
| `npm run test:watch` | テストをwatch モードで実行 |
| `npm run test:coverage` | テストカバレッジレポートを生成 |
| `npm run typecheck` | TypeScript型チェック |
| `npm run storybook` | Storybookを起動 |
| `npm run build-storybook` | Storybookをビルド |

## プロジェクト構成

```
blog-next/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (blog)/            # ブログ関連のページ
│   │   │   ├── [category]/    # カテゴリー別ページ
│   │   │   ├── article/       # 記事詳細ページ
│   │   │   └── profile/       # プロフィールページ
│   │   └── globals.css        # グローバルスタイル
│   ├── components/            # Reactコンポーネント
│   │   ├── features/          # 機能別コンポーネント
│   │   └── ui/                # UI基盤コンポーネント
│   ├── data/                  # 静的データ
│   └── lib/                   # ユーティリティ関数
├── public/                    # 静的ファイル
├── learning_note/             # 学習メモ
└── styled-system/             # Panda CSS生成ファイル
```

## テスト

このプロジェクトはJestとTesting Libraryを使用してテストを実装しています。

```bash
# 全テストを実行
npm test

# watchモードでテストを実行
npm run test:watch

# カバレッジレポートを生成
npm run test:coverage
```

## Storybook

UIコンポーネントの開発とドキュメント化にStorybookを使用しています。

```bash
# Storybookを起動
npm run storybook
```

[http://localhost:6006](http://localhost:6006)でStorybookにアクセスできます。

## 環境変数

プロジェクトを実行するには、以下の環境変数の設定が必要です：

```env
MICROCMS_API_KEY=your_api_key
MICROCMS_SERVICE_DOMAIN=your_service_domain
```
⚠️ 環境変数は`.env.local`ファイルに設定し、このファイルは必ず`.gitignore`に含めてください。
APIキーは秘密情報として扱い、公開リポジトリにコミットしないようご注意ください。

## 学習メモ

- `learning_note/` ディレクトリに学習過程のメモを残しています

## コンテンツ管理

このブログはMicroCMSを使用してコンテンツを管理しています。MicroCMSは日本製のヘッドレスCMSで、APIを通じてコンテンツの取得・管理が可能です。

- ブログ記事の作成・編集
- カテゴリー管理

## 開発ガイドライン

- コードの品質を保つため、commit前に自動でESLintとPrettierが実行されます
- テストの作成を推奨しています
- アクセシビリティを重視した実装を心がけています
- TypeScriptの型安全性を活用しています
