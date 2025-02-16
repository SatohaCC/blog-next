# Storybook

## 特徴
- UIコンポーネントの開発、テスト、ドキュメント化を行える
- チーム内のコラボレーション
    - デザイナー、開発者、プロダクトマネージャーが、Storybook内でコンポーネントをレビューしたりフィードバックを行うことが可能
- ドキュメント生成・再利用性の向上

## install
- https://storybook.js.org/docs/get-started/frameworks/nextjs?renderer=react


## Testing
- インタラクションを実行できるようにするためのアドオン
- npm i -D @storybook/addon-interactions @storybook/jest @storybook/testing-library

## tsconfig.jsonでpath aliasesを設定しるいる場合
- storybookでこれらのimportを動作させるために、.storybook/main.tsに設定がいる
    - webpackFinalの部分

## React Server Components (RSC)の表示の仕方
- [React Server Components (RSC)](https://storybook.js.org/docs/get-started/frameworks/nextjs#react-server-components-rsc)
- .storybook/main.tsの設定
-
    - サーバー コンポーネントがファイル システムや Node 固有のライブラリなどのサーバー側リソースにアクセスする場合
        - npm install -D storybook-addon-module-mock
    - サーバー コンポーネントがネットワーク経由でデータにアクセスする場合
        - npm i msw msw-storybook-addon -D
