import { css } from "styled-system/css";

export const articleRecipe = css({
    "& h1": {
        fontSize: { base: "sm", md: "lg" },
        fontWeight: "700",
        letterSpacing: "tight",
        pb: "3",
    },
    "& h2": {
        fontSize: { base: "sm", md: "md" },
        fontWeight: "600",
    },
    "& h3": {
        fontSize: { base: "xs", md: "sm" },
        fontWeight: "600",
        mt: "6",
        mb: "3",
    },
    "& p": {
        fontSize: { base: "xs", md: "sm" },
        lineHeight: "1.5",
        letterSpacing: "0.02em",
    },
    "& ol": {
        listStyleType: "decimal",
        listStylePosition: "inside",
    },
    "& blockquote": {
        borderLeftWidth: "4px",
        borderLeftColor: "#f86c3d",
    },
    "& code": {
        fontSize: { base: "xs", md: "sm" },
    },
});
