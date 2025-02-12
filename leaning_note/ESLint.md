# install

## https://github.com/prettier/eslint-config-prettier#installation

# Prettierと使う場合は

- npm install --save-dev eslint-config-prettier
- 競合するルールをオフにしてくれる

## eslint.config.mjsの初期値の意味

- compat.extends(...) は従来のextendsプロパティを新しいFlat Config形式に変換します。
- next/core-web-vitals: Next.jsのコアWebバイタル（パフォーマンス最適化）に関するESLint設定。
- next/typescript: TypeScriptのためのNext.js用ESLint設定。

### eslint-plugin-prettierは非推奨になった（2020年？）

- eslint-config-prettierではない。
- pluginとconfigの違い
- https://dev.classmethod.jp/articles/eslint-and-prettier/
