import { ArticleType } from "@/lib/types";
import dayjs from "dayjs";
import "highlight.js/styles/a11y-dark.css";

import Link from "next/dist/client/link";
import { Flex } from "styled-system/jsx";
import { cardRecipe } from "./card.recipe";

type CardProps = {
    content: ArticleType;
};

const Card = ({ content }: CardProps) => {
    const publishedAt = dayjs(content.publishedAt).format("YYYY.MM.DD");
    const classes = cardRecipe({});
    const { id, title, summary, categories = [] } = content;
    return (
        <div className={classes.root}>
            <Flex alignItems="baseline" gap="3">
                <div className={classes.date}>{publishedAt}</div>
                <div className={classes.tags}>
                    {categories.map((category) => category.label).join(", ")}
                </div>
            </Flex>
            <Link href={`/article/${id}`}>
                <div className={classes.title}>{title}</div>
            </Link>
            <div className={classes.description}>{summary}</div>
        </div>
    );
};

export default Card;
