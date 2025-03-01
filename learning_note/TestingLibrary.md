# Testing Library

## 概要
Testing Libraryは、ユーザー視点でのテストを書くためのツールセットです。
「コードがどのように実装されているか」ではなく「ユーザーがどのように使うか」に焦点を当てています。

## 主要パッケージ
- **@testing-library/react**: Reactコンポーネントのテスト用
- **@testing-library/dom**: DOM要素のテスト用の基本ライブラリ
- **@testing-library/jest-dom**: DOMに関する追加のJestマッチャー
- **@testing-library/user-event**: ユーザー操作をシミュレートするためのライブラリ

## @testing-library/react
Reactコンポーネントをレンダリングしてテストするための関数を提供します。

### 主要な関数
- `render()`: コンポーネントをレンダリング
- `screen`: レンダリングされた要素を取得するためのオブジェクト
- `cleanup()`: テスト間でDOMをクリーンアップ（通常は自動実行）

### 要素の取得方法
```jsx
// テキストで要素を取得
screen.getByText('ボタンテキスト');

// ロールで要素を取得
screen.getByRole('button', { name: 'ボタンテキスト' });

// テストIDで要素を取得
screen.getByTestId('submit-button');
```

### クエリバリエーション
- `getBy*`: 要素が見つからない場合はエラー
- `queryBy*`: 要素が見つからない場合はnull（存在しないことを確認する場合に使用）
- `findBy*`: 非同期で要素を探す（Promiseを返す）
- `getAllBy*`, `queryAllBy*`, `findAllBy*`: 複数の要素を取得

## @testing-library/user-event
実際のユーザー操作に近い形でイベントをシミュレートします。

### 基本的な使い方
```jsx
import userEvent from '@testing-library/user-event';

test('ボタンクリックのテスト', async () => {
  const user = userEvent.setup();
  render(<MyComponent />);

  await user.click(screen.getByRole('button'));

  // 結果の検証
  expect(screen.getByText('クリック後のテキスト')).toBeInTheDocument();
});
```

### fireEventとの違い
- **fireEvent**: DOMイベントを直接発火させるだけ。実際のユーザー操作では不可能な操作もできてしまう。
- **userEvent**: 実際のユーザー操作に近い形でイベントを発生させる。例えば、ボタンクリック前にフォーカスが当たるなど。

### 主要な操作
- `click()`: クリック操作
- `dblClick()`: ダブルクリック
- `type()`: テキスト入力
- `clear()`: 入力フィールドのクリア
- `selectOptions()`: セレクトボックスの選択
- `hover()`: ホバー操作
- `tab()`: Tabキー操作

## アクセシビリティテスト
Testing Libraryは、アクセシビリティを考慮したテストを書くことを推奨しています。

### ベストプラクティス
- セマンティックなHTML要素やARIAロールを使用する
- `getByRole()`を優先的に使用する
- 視覚的な属性（色など）だけでなく、スクリーンリーダーでも認識できる要素を確認する

### 暗黙的なロールの識別
user-eventは暗黙的なロールの識別もサポートしています。例えば、`<button>`要素は自動的に「button」ロールとして認識されます。
