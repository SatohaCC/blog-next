# Jest

## できること

### 単体テスト
- 関数やコンポーネントの個別テスト
- 入力に対する出力の検証
- エッジケースの確認

### コンポーネントテスト
- Reactコンポーネントのレンダリングテスト
- ユーザーイベント（クリックなど）のシミュレーション
- コンポーネントの状態変化の検証

### 統合テスト
- 複数のモジュールを組み合わせたテスト
- APIとの連携テスト

### その他の機能
- テストカバレッジレポート生成
- モックを使った外部依存の置き換え
- スナップショットによるUI変更の検知
- 非同期処理のテスト
- テストの並列実行

## よく使うコマンド
- `npm test`: テストの実行
- `npm test -- --watch`: 監視モードでテスト実行
- `npm test -- --coverage`: カバレッジレポート生成

### マッチャー
- `toBe()`: プリミティブ値の比較
- `toEqual()`: オブジェクトや配列の比較
- `toContain()`: 配列に特定の要素が含まれているか
- `toMatch()`: 文字列が正規表現にマッチするか
- `toBeTruthy()` / `toBeFalsy()`: 真偽値のチェック


## install
- https://nextjs.org/docs/app/building-your-application/testing/jest
- npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/dom @testing-library/jest-dom ts-node
- npm init jest@latest
    - 選択肢は上記URLにある設定にあわせてv8,jsdom
- import nextJest from 'next/jest.js'の設定を行う
- tsconfig.json とjest.config.tsのパスを一致させる
    - 絶対インポートとモジュール パス エイリアスの処理

### jest.config.tsの設定
- testPathIgnorePatternsでJestがテストを実行する際に、特定のパスやファイルを無視するために使用。
    - 無視されたファイルはテストされませんが、カバレッジレポートの対象にはなる可能性がある。
- collectCoverageFromでカバレッジを収集するファイルを指定。カバレッジレポートに含める対象を細かく制御。
    - !からは除外
    - Panda CSSのrecipeを除外
    - Storybookのstoriesを除外
    ### TODO
    - カバレッジテストなにでやるべきか調べる
        - jest,Storybook,インタラクションテストなど

- 併用可能: testPathIgnorePatternsでテストを無視し、collectCoverageFromで特定ファイルをカバレッジから除外することも可能。


### jest.setup.ts
- ここでインポートしておいてconfigで設定しておくと、テストファイル毎にインポートしないでいい
