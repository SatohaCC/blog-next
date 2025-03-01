import { text } from "styled-system/recipes";

type Props = {
    children: React.ReactNode;
    visual: "currentPage" | "otherPages";
};

/**
 * テキストを表示するためのコンポーネント
 * インライン要素（span）を使用しているため、aやpなどの要素内でも安全に使用できます
 */
const Text = ({ children, visual }: Props) => {
    return <span className={text({ visual })}>{children}</span>;
};

export default Text;
