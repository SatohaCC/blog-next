import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

// Prettierを含めたESLintの設定
const eslintConfig = [
    ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
    {
        rules: {
            semi: "error",
            "prefer-const": "error",
        },
    },
];

export default eslintConfig;
