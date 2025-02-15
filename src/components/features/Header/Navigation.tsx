import { ParentCategoriesEntity } from "@/lib/types";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { css } from "styled-system/css";

type Props = {
    contents: (ParentCategoriesEntity & MicroCMSContentId & MicroCMSDate)[];
};

const Navigation = ({ contents }: Props) => (
    <div
        className={css({
            display: "flex",
            fontSize: "2xl",
            gap: "20px",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
        })}
    >
        {contents?.map((content) => <div key={content.id}>{content.label}</div>)}
    </div>
);

export default Navigation;
