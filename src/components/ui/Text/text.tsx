import { text } from "styled-system/recipes";

type Props = {
    children: React.ReactNode;
    visual: "currentPage" | "otherPages";
};

const Text = ({ children, visual }: Props) => {
    return <div className={text({ visual })}>{children}</div>;
};

export default Text;
