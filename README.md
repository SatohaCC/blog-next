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
- [Cursor](https://cursor.sh) - AIアシスト機能付きエディタ

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

# ビルド
npm run build
```

[http://localhost:3000](http://localhost:3000)にアクセスして確認できます。

## 環境変数

プロジェクトを実行するには、以下の環境変数の設定が必要です：

```env
MICROCMS_API_KEY=your_api_key
MICROCMS_SERVICE_DOMAIN=your_service_domain
```

## 学習メモ

- `learning_note/` ディレクトリに学習過程のメモを残しています

## コンテンツ管理

このブログはMicroCMSを使用してコンテンツを管理しています。MicroCMSは日本製のヘッドレスCMSで、APIを通じてコンテンツの取得・管理が可能です。

- ブログ記事の作成・編集
- カテゴリー管理
