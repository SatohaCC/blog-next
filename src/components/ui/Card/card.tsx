import { ArticleType } from "@/lib/types";
import dayjs from "dayjs";
import "highlight.js/styles/a11y-dark.css";
import Link from "next/link";
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
            <div className={classes.date}>{publishedAt}</div>
            <Link href={`/article/${id}`}>
                <div className={classes.title}>{title}</div>
            </Link>
            <div className={classes.description}>{summary}</div>
            <div className={classes.tags}>{categories.join(", ")}</div>
        </div>
    );
};

export default Card;
