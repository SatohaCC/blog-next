# Next.js

## tsconfig.json
- パスのエイリアスを設定した場合に、あとから他のライブラリも合わせる必要あり

## Link
- https://nextjs.org/docs/app/api-reference/components/link#if-the-child-is-a-custom-component-that-wraps-an-a-tag
- React Aria ComponentsのLinkと合わせるときrole="link"が重複するので避ける
- React Aria ComponentsのLinkはspanでrole="link"を生成する
- v13.0.0からは子<a>タグは不要。
