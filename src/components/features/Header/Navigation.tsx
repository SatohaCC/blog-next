import Link from "@/components/ui/Link/link";
import { HeaderProps } from "@/lib/types";
import { css } from "styled-system/css";

type Props = {
    contents: HeaderProps;
};

const Navigation = ({ contents }: Props) => (
    <ul
        className={css({
            flex: 1,
            display: { base: "none", md: "flex" },
            justifyContent: "center",
            fontSize: { base: "md", lg: "md" },
            gap: "20px",
            alignItems: "center",
            listStyle: "none",
            padding: 0,
            margin: 0,
        })}
    >
        {contents?.map((content) => (
            <li key={content.id}>
                <Link href={`/${content.href}/page/1`} ariaLabel={`${content.label}へのリンク`}>
                    {content.label}
                </Link>
            </li>
        ))}
    </ul>
);

export default Navigation;
