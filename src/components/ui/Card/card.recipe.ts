import { sva } from "styled-system/css";

export const cardRecipe = sva({
    slots: ["root", "date", "title", "description", "tags"],
    base: {
        root: {
            display: "flex",
            flexDirection: "column",
            gap: { base: "1", md: "2" },
            p: { base: "3", md: "4" },
            borderRadius: "sm",
        },
        date: {
            fontSize: { base: "xs", md: "sm" },
            color: "gray.500",
            fontWeight: "medium",
        },
        title: {
            fontSize: { base: "md", md: "xl" },
            fontWeight: "bold",
            color: "gray.800",
            lineHeight: "tight",
            _hover: {
                color: "blue.600",
            },
        },
        description: {
            color: "gray.600",
            lineHeight: "normal",
            fontSize: { base: "xs", md: "sm" },
            display: "-webkit-box",
            overflow: "hidden",
            WebkitLineClamp: { base: 2, md: 3 },
        },
        tags: {
            display: "flex",
            gap: "2",
            color: "gray.500",
            fontSize: "xs",
            flexWrap: "wrap",
        },
    },
    variants: {
        variant: {
            outline: {
                root: {
                    bg: "white",
                    borderWidth: "1px",
                    borderColor: "gray.100",
                },
            },
            filled: {
                root: {
                    bg: "gray.50",
                    borderWidth: "1px",
                    borderColor: "gray.100",
                },
            },
        },
    },
    defaultVariants: {
        variant: "outline",
    },
});
