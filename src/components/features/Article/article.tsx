import BackBtn from "@/components/ui/BackBtn/BackBtn";
import "highlight.js/styles/a11y-dark.css";
import parse from "html-react-parser";

import { css } from "styled-system/css";
import { Box } from "styled-system/jsx";
import { articleRecipe } from "./article.recipe";

type Props = {
    title: string;
    publishedAt: string;
    updatedAt: string;
    summary?: string;
    body: string;
};

export default function Article({ title, publishedAt, updatedAt, body }: Props) {
    return (
        <div className={articleRecipe}>
            <h1>{title}</h1>
            <p>作成:{publishedAt}</p>
            <p>更新:{updatedAt}</p>
            <div className={css({ pt: "5" })}>{parse(body)}</div>
            <Box pt={10}>
                <BackBtn />
            </Box>
        </div>
    );
}
