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

## セマンティッククエリーとテストID

### セマンティッククエリー
セマンティッククエリーは、ユーザーが実際に要素を認識する方法に基づいて要素を取得する方法です。Testing Libraryでは、これらのクエリーを優先的に使用することを推奨しています。

#### クエリー優先順位
Testing Libraryが推奨するクエリー優先順位は以下の通りです：

1. **アクセシブルな識別子**
   - `getByRole`: ARIA ロールや暗黙的なロールで要素を取得
   - `getByLabelText`: フォーム要素のラベルテキストで取得
   - `getByPlaceholderText`: プレースホルダーテキストで取得
   - `getByText`: 表示されているテキストで取得
   - `getByDisplayValue`: 入力フィールドの現在の値で要素を取得

2. **セマンティックなクエリー**
   - `getByAltText`: 画像の代替テキストで取得
   - `getByTitle`: title属性で取得

3. **テストID（最終手段）**
   - `getByTestId`: data-testid属性で取得

#### 例
```jsx
// 最も推奨される方法
screen.getByRole('button', { name: '送信' });

// ラベルテキストでフォーム要素を取得
screen.getByLabelText('ユーザー名');

// 表示テキストで要素を取得
screen.getByText('ログイン');

// プレースホルダーで入力フィールドを取得
screen.getByPlaceholderText('メールアドレスを入力');

// 入力フィールドの現在の値で要素を取得
screen.getByDisplayValue('test@example.com');
```

### テストID
テストIDは、他のセマンティックな方法で要素を選択できない場合の「最終手段」として使用します。

#### テストIDの使用方法
1. コンポーネントに `data-testid` 属性を追加します：
```jsx
<button data-testid="submit-button">送信</button>
```

2. テストでその要素を取得します：
```jsx
screen.getByTestId('submit-button');
```

#### テストIDを使うべき場合
- 要素に表示テキストがない場合（アイコンのみのボタンなど）
- 要素が動的に生成され、他の方法で一貫して選択できない場合
- コンポーネントの実装詳細が変更される可能性があるが、テストは安定させたい場合

#### テストIDの注意点
- テストIDはユーザーには見えないため、実際のユーザー体験を反映していません
- テストIDの過剰な使用は、実装詳細に依存したテストになる可能性があります
- 可能な限り、セマンティッククエリーを優先して使用すべきです

### ベストプラクティス
- 常にユーザーの視点でテストを書くことを意識する
- `getByRole` を最優先で使用する
- テストIDは最終手段として使用する
- 複数の要素が条件に一致する場合は、より具体的なクエリーを使用する
- テストが壊れやすい場合は、クエリー方法を見直す
