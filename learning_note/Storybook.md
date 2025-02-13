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
