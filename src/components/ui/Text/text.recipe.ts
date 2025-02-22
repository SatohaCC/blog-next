import { defineRecipe } from "@pandacss/dev";

export const textRecipe = defineRecipe({
    className: "text",
    description: "The styles for the Text component",
    jsx: ["Text"],
    base: {
        alignItems: "center",
        appearance: "none",
        borderRadius: "4",
        cursor: "pointer",
        display: "inline-flex",
        fontWeight: "semibold",
        justifyContent: "center",
        minWidth: "0",
        outline: "none",
        position: "relative",
        transitionDuration: "normal",
        transitionProperty: "background, border-color, color, box-shadow",
        transitionTimingFunction: "default",
        userSelect: "none",
        verticalAlign: "middle",
        whiteSpace: "nowrap",
    },

    defaultVariants: {
        visual: "currentPage",
        size: "md",
    },

    variants: {
        visual: {
            currentPage: {
                bg: "teal.600",
                color: "white",
                p: "2",
                justifyItems: "center",
            },
            otherPages: {
                color: "gray.500",
                borderWidth: "1px",
                borderColor: "gray.500",
                _hover: {
                    color: "gray.700",
                    borderColor: "gray.700",
                },
                _focus: {
                    outlineOffset: "1px",
                    outline: "2px solid",
                    outlineColor: "gray.700",
                },
            },
        },
        size: {
            lg: {
                h: "11",
                minW: "11",
                textStyle: "md",
                px: "5",
                gap: "3",
                "& svg": {
                    width: "5",
                    height: "5",
                },
            },
            md: {
                h: "10",
                minW: "10",
                textStyle: "md",
                px: "4",
                gap: "2",
                "& svg": {
                    width: "5",
                    height: "5",
                },
            },

            sm: {
                h: "9",
                minW: "9",
                textStyle: "sm",
                px: "3.5",
                gap: "2",
                "& svg": {
                    width: "4",
                    height: "4",
                },
            },
            xs: {
                h: "8",
                minW: "8",
                textStyle: "xs",
                px: "3",
                gap: "2",
                "& svg": {
                    fontSize: "md",
                    width: "4",
                    height: "4",
                },
            },
        },
    },
});
