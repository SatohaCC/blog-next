import { buttonRecipe } from "@/components/ui/Button/button.recipe";
import { tagRecipe } from "@/components/ui/Tag/tag.recipe";
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
    // Whether to use css reset
    preflight: true,

    // Where to look for your css declarations
    include: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./src/components/**/*.{ts,tsx,js,jsx}",
        "./src/app/**/*.{ts,tsx,js,jsx}",
    ],

    // Files to exclude
    exclude: [],

    // Useful for theme customization
    theme: {
        extend: {
            recipes: {
                button: buttonRecipe,
                tag: tagRecipe,
            },
            tokens: {
                colors: {
                    primary: { value: "#0FEE0F" },
                    secondary: { value: "#EE0F0F" },
                    button: { value: "#0f766e" },
                    buttonHover: { value: "#115e59" },
                    buttonActive: { value: "#134e4a" },
                    buttonText: { value: "#f5f5f5" },
                    buttonOutlineHover: { value: "#f0fdfa" },
                    buttonOutlineActive: { value: "#ccfbf1" },
                    background: { value: "#f9f4ef" },
                    textColor: { value: "#0c0a09" },
                    textColorHover: { value: "#0d9488" },
                    textColorActive: { value: "#0f766e" },
                },
            },
        },
    },
    globalCss: {
        html: {
            h: "full", // 高さ100%
            overflowY: "scroll", // 縦スクロールを常に表示
        },
        body: {
            marginTop: "0", // body の上マージンをリセット
        },
        fonts: {
            body: "system-ui, sans-serif", // 本文用フォント
            mono: "Menlo, monospace", // コード用フォント
        },
        a: {
            cursor: "pointer", // カーソルをポインターに
        },
        h1: {
            fontSize: { base: "lg", md: "2xl" },
            fontWeight: "700",
            letterSpacing: "tight",

            pb: "3",
        },
        h2: {
            fontSize: { base: "xl", md: "xl" },
            fontWeight: "600",
        },
        h3: {
            fontSize: { base: "lg", md: "xl" },
            fontWeight: "600",
            mt: "6",
            mb: "3",
        },
        p: {
            fontSize: { base: "md", md: "lg" },
            lineHeight: "1.8",
            letterSpacing: "0.02em",
            my: "4",
        },
        ol: {
            listStyleType: "decimal", // 番号付きリストのスタイル
            listStylePosition: "inside", // リストの位置
        },
        blockquote: {
            m: "20px", // 引用部分のマージン
            pl: "10px", // 引用部分の左パディング
            borderLeftWidth: "4px", // 引用部分の左ボーダー幅
            borderLeftColor: "#f86c3d", // 引用部分の左ボーダー色
        },
    },

    // The output directory for your css system
    outdir: "styled-system",
    jsxFramework: "react",
});
