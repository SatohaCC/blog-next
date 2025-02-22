import { css } from "styled-system/css";

const headStyle = css({
    fontSize: { base: "md", md: "xl", lg: "xl" },
    fontWeight: "bold",
    color: "amber.800",
});

type Props = {
    title: string;
};

const BlockTitle = ({ title }: Props) => {
    return <h2 className={headStyle}>{title}</h2>;
};

export default BlockTitle;
