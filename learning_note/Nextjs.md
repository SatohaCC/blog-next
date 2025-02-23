# Next.js

## tsconfig.json
- パスのエイリアスを設定した場合に、あとから他のライブラリも合わせる必要あり

## Link
- https://nextjs.org/docs/app/api-reference/components/link#if-the-child-is-a-custom-component-that-wraps-an-a-tag
- React Aria ComponentsのLinkと合わせるときrole="link"が重複するので避ける
- React Aria ComponentsのLinkはspanでrole="link"を生成する
- v13.0.0からは子<a>タグは不要。

# deploy
- faviconはapp直下に置くだけでOK
### metadata
- https://nextjs.org/docs/app/building-your-application/optimizing/metadata#static-metadata
    - 静的メタデータ
    - 動的メタデータ
    - rootでデフォルトの設定などもできる
### sitemap
- https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap#generating-a-sitemap-using-code-js-ts
- siteの大きさによるけどapp/sitemap.tsをおくのが楽そう
    - 個別ページのパスを生成するのと同じように設定
    - デプロイすれば勝手に生成される。
    - サイトURL/sitemap.xmlで確認できる

### robots.txt
- https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
- app/robots.tsに設定


### Next.js Compiler
- https://nextjs.org/docs/architecture/nextjs-compiler
- app/robots.tsに設定
-
