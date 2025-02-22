import { ArticleType } from "@/lib/types";
import dayjs from "dayjs";
import "highlight.js/styles/a11y-dark.css";
import { Flex } from "styled-system/jsx";
import Link from "../Link/link";
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

            <div className={classes.title}>
                <Link href={`/article/${id}`}>{title} </Link>
            </div>

            <div className={classes.description}>{summary}</div>
        </div>
    );
};

export default Card;
