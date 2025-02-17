import Card from "@/components/ui/Card/card";
import { ArticleType } from "@/lib/types";
import { css } from "styled-system/css";

type Props = {
    contents: ArticleType[];
};

const ArticleList = ({ contents }: Props) => {
    if (!contents || contents.length === 0) {
        return <h1>No contents</h1>;
    }
    return (
        <ul>
            {contents.map((content) => {
                return (
                    <li key={content.id} className={css({ p: "3" })}>
                        <Card content={content} />
                    </li>
                );
            })}
        </ul>
    );
};
export default ArticleList;
