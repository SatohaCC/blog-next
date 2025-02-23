import { css } from "styled-system/css";

export const articleRecipe = css({
    px: "3",
    "& h1": {
        fontSize: { base: "sm", md: "lg" },
        fontWeight: "700",
        letterSpacing: "tight",
        pb: "3",
    },
    "& h2": {
        fontSize: { base: "md", md: "md" },
        fontWeight: "600",
        pt: "5",
    },
    "& h3": {
        fontSize: { base: "sm", md: "md" },
        fontWeight: "600",
        pt: "2",
    },
    "& p": {
        fontSize: { base: "sm", md: "md" },
        lineHeight: "1.5",
        letterSpacing: "0.02em",
    },
    "& ol": {
        listStyleType: "decimal",
        listStylePosition: "inside",
        pl: "4",
    },
    "& ul": {
        listStyleType: "disc",
        listStylePosition: "inside",
        pl: "4",
    },
    "& li": {
        fontSize: { base: "xs", md: "sm" },
        lineHeight: "1.5",
    },
    "& blockquote": {
        borderLeftWidth: "4px",
        borderLeftColor: "gray.200",
        px: "2",
        mx: "2",
    },
    "& code": {
        fontSize: { base: "xs", md: "sm" },
    },
});
