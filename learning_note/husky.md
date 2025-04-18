# husky
- gitのフックを利用して、コミットやプッシュ前に任意のコマンドを実行できる
    - プッシュ前にESLintなど
    - コミット前にprettierでフォーマット
    - テストの実行
    - コミットメッセージの検証
    - ブランチ名のバリデーション

## 主なGitフック
- pre-commit: コミット前に実行
- pre-push: プッシュ前に実行
- commit-msg: コミットメッセージのバリデーション
- pre-rebase: rebase前に実行

## install
- https://prettier.io/docs/install
- prettierの続きでインストール


## https://prettier.io/docs/precommit

- npm install --save-dev husky lint-staged
- npx husky init
- node --eval "fs.writeFileSync('.husky/pre-commit','npx lint-staged\n')"

## lint-staged

- https://zenn.dev/hayato94087/articles/f5e02dc3dadb58
- ステージング済みのファイルに対してESLintなどを実行

## https://prettier.io/docs/precommit
- こっちはいったん見ないでOK

## husky installは非推奨になった
- https://github.com/typicode/husky/releases/tag/v9.0.1
- "prepare": "husky"だけでOK
- https://github.com/typicode/husky/releases/tag/v9.1.1
    - #!/usr/bin/env sh、. "$(dirname -- "$0")/_/husky.sh"も非推奨になっている

## testをどこにいれるか
## 主なGitフック
- pre-commit: コミット前に実行
    - こっちにテストまでいれると少し煩わしい
- pre-push: プッシュ前に実行
    - こっちにテストを入れて様子見るが、テストでエラーが出ると、最新をPullするような指示のエラーになってしまう
