"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

import Button from "@/components/ui/Button/button";
import { css } from "styled-system/css";
import { flex } from "styled-system/patterns";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div
            className={flex({
                direction: "column",
                align: "center",
                justify: "center",
                minHeight: "50vh",
                gap: 4,
            })}
        >
            <h2 className={css({ fontSize: "2xl", fontWeight: "bold" })}>エラーが発生しました</h2>
            <p className={css({ color: "gray.500" })}>
                申し訳ありませんが、記事の取得中にエラーが発生しました。
            </p>
            <Button onPress={reset} visual="outline">
                もう一度試す
            </Button>
        </div>
    );
}
