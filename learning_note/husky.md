# husky
- gitのフックを利用して、コミットやプッシュ前に任意のコマンドを実行できる
    - プッシュ前にESLintなど

## https://prettier.io/docs/install

- prettierの続きでインストール


## https://prettier.io/docs/precommit

- npm install --save-dev husky lint-staged
- npx husky init
- node --eval "fs.writeFileSync('.husky/pre-commit','npx lint-staged\n')"

# lint-staged

- https://zenn.dev/hayato94087/articles/f5e02dc3dadb58
- ステージング済みのファイルに対してESLintなどを実行

## https://prettier.io/docs/precommit
- こっちはいったん見ないでOK

## husky installは非推奨になった
- https://github.com/typicode/husky/releases/tag/v9.0.1
- "prepare": "husky"だけでOK
