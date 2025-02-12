# ESLint
- コードの品質チェック
  - 未使用の変数の検出
  - 危険なコードパターンの警告
  - タイプミスの検出（console.logなど）
  - 一貫性のないコーディングスタイルの検出

- バグの早期発見
  - 潜在的なエラーの検出
  - 予期せぬ動作を引き起こす可能性のあるコードの特定

- コードの自動修正
  - `--fix`オプションで自動修正可能な問題を修正
  - インデントやセミコロンの修正
  - 空白の調整

- カスタマイズ可能なルール
  - プロジェクトに合わせてルールのON/OFF
  - ルールの警告レベル設定（error/warn/off）
  - 独自のルールの作成も可能


## install
- https://github.com/prettier/eslint-config-prettier#installation

## Prettierと使う場合は
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

## https://eslint.org/docs/latest/use/configure/configuration-files
- 拡張子が色々あり、反映に優先順位がある(js,mjs,cjs,ts,mts,cts)
