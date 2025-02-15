# pandacss

## 特徴
- ゼロランタイム

## install
- https://panda-css.com/docs/installation/nextjs

- npm install -D @pandacss/dev
- npx panda init --postcss
- Update package.json scripts
- Configure the content
- Configure the entry CSS with layers
- Import the entry CSS in your app
    - デフォルトでされてる

## Recipe
- Config recipe	と　Atomic recipe (cva)　がある
    - https://panda-css.com/docs/concepts/recipes
    - cvaはatomic classesが生成される

### Dynamic styling
- https://panda-css.com/docs/guides/dynamic-styling#referenced-values
- NG
    - スタイルの設定は同じファイル内
    - 関数呼び出し結果の変数
