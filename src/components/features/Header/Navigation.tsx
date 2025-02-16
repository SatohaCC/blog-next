import { HeaderProps } from "@/lib/types";
import { css } from "styled-system/css";

type Props = {
    contents: HeaderProps;
};

const Navigation = ({ contents }: Props) => (
    <div
        className={css({
            display: "flex",
            fontSize: "lg",
            gap: "20px",
            alignItems: "center",
        })}
    >
        {contents?.map((content) => <div key={content.id}>{content.label}</div>)}
    </div>
);

export default Navigation;
