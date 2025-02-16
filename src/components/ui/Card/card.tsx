import Link from "next/link";
import { cardRecipe } from "./card.recipe";

type CardProps = {
    title: string;
    description: string;
    date: string;
    tags?: string[];
    variant?: "outline" | "filled";
};

const Card = ({ title, description, date, tags = [], variant }: CardProps) => {
    const classes = cardRecipe({ variant });
    return (
        <div className={classes.root}>
            <div className={classes.date}>{date}</div>
            <Link href={`/articles/${title}`}>
                <div className={classes.title}>{title}</div>
            </Link>
            <div className={classes.description}>{description}</div>
            <div className={classes.tags}>{tags.join(", ")}</div>
        </div>
    );
};

export default Card;
