import { defineRecipe } from "@pandacss/dev";

export const tagRecipe = defineRecipe({
    className: "tag",
    base: {
        alignItems: "center",
        display: "flex",
        fontWeight: "bold",
        cursor: "pointer",
        p: "1",
        fontSize: "xs",
    },
    defaultVariants: {
        visual: "outline",
        size: "xs",
    },
    variants: {
        visual: {
            outline: {
                borderWidth: "1px",
                borderColor: "gray.3",
                color: "gray.12",
                rounded: "md",
                shadow: "xs",
                _disabled: {
                    cursor: "not-allowed",
                    opacity: "0.4",
                    _active: {
                        background: "none",
                    },
                    _hover: {
                        background: "none",
                    },
                    _focus: {
                        background: "none",
                    },
                },
            },
        },
        size: {
            lg: {
                h: "9",
                minW: "9",
                textStyle: "sm",
                px: "4",
                gap: "2",
                "& svg": {
                    width: "4",
                    height: "4",
                },
            },
            md: {
                h: "8",
                minW: "8",
                textStyle: "sm",
                px: "3",
                gap: "2",
                "& svg": {
                    width: "4",
                    height: "4",
                },
            },
            sm: {
                h: "7",
                minW: "7",
                textStyle: "xs",
                px: "2.5",
                gap: "1.5",
                "& svg": {
                    width: "3.5",
                    height: "3.5",
                },
            },
            xs: {
                h: "6",
                minW: "6",
                textStyle: "xs",
                px: "2",
                gap: "1.5",
                "& svg": {
                    fontSize: "sm",
                    width: "3",
                    height: "3",
                },
            },
        },
    },
});
