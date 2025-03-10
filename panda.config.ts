import { buttonRecipe } from "@/components/ui/Button/button.recipe";
import { tagRecipe } from "@/components/ui/Tag/tag.recipe";
import { textRecipe } from "@/components/ui/Text/text.recipe";
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
                text: textRecipe,
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
            h: "full",
            overflowY: "scroll",
        },
        body: {
            marginTop: "0",
        },
        a: {
            cursor: "pointer",
        },
    },

    outdir: "styled-system",
    jsxFramework: "react",
});
