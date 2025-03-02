## tabの移動
- ページネーションをlinkとbuttonで対応するとtabで移動できる要素が重複する
- NextのLinkとReactAriaのLinkを併用した場合も同様
- 併用は下記で対応
    - tabIndexで調節する
    - linkだけで対応するでもaccessibleは問題ない

### 暗黙的なロール一覧　（cursorで生成：未確認）
Testing Libraryは内部的にaria-queryを使っていて、暗黙のロール三種はこれに依存している。
（https://www.npmjs.com/package/aria-query）

以下はHTML要素とそれに対応する暗黙的なARIAロールの一覧です：
- `<a href="...">`：**link**
- `<area href="...">`：**link**
- `<article>`：**article**
- `<aside>`：**complementary**
- `<button>`：**button**
- `<datalist>`：**listbox**
- `<dd>`：**definition**
- `<details>`：**group**
- `<dialog>`：**dialog**
- `<dl>`：**list**
- `<dt>`：**term**
- `<fieldset>`：**group**
- `<figure>`：**figure**
- `<form>`：**form**
- `<h1>` 〜 `<h6>`：**heading**
- `<header>`：**banner**（ただし`<article>`や`<section>`の子要素の場合は違う）
- `<hr>`：**separator**
- `<img alt="...">`（altが空でない場合）：**img**
- `<input type="button">`：**button**
- `<input type="checkbox">`：**checkbox**
- `<input type="email">`：**textbox**
- `<input type="image">`：**button**
- `<input type="number">`：**spinbutton**
- `<input type="password">`：**textbox**
- `<input type="radio">`：**radio**
- `<input type="range">`：**slider**
- `<input type="search">`：**searchbox**
- `<input type="tel">`：**textbox**
- `<input type="text">`：**textbox**
- `<input type="url">`：**textbox**
- `<li>`：**listitem**
- `<main>`：**main**
- `<math>`：**math**
- `<menu>`：**list**
- `<nav>`：**navigation**
- `<ol>`：**list**
- `<optgroup>`：**group**
- `<option>`：**option**
- `<output>`：**status**
- `<progress>`：**progressbar**
- `<section>`：**region**（アクセシブルな名前がある場合）
- `<select>`：**combobox**（複数選択不可の場合）、**listbox**（複数選択可能な場合）
- `<summary>`：**button**
- `<table>`：**table**
- `<tbody>`：**rowgroup**
- `<td>`：**cell**
- `<textarea>`：**textbox**
- `<tfoot>`：**rowgroup**
- `<th scope="col">`：**columnheader**
- `<th scope="row">`：**rowheader**
- `<thead>`：**rowgroup**
- `<tr>`：**row**
- `<ul>`：**list**
