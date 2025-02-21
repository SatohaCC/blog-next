import Link from "@/components/ui/Link/link";
import { HeaderProps } from "@/lib/types";
import { css } from "styled-system/css";

type Props = {
    contents: HeaderProps;
};

const Navigation = ({ contents }: Props) => (
    <div
        className={css({
            flex: 1,
            display: { base: "none", md: "flex" },
            justifyContent: "center",
            fontSize: { base: "md", lg: "md" },
            gap: "20px",
            alignItems: "center",
        })}
    >
        {contents?.map((content) => (
            <Link key={content.id} href={`/${content.href}/page/1`}>
                {content.label}
            </Link>
        ))}
    </div>
);

export default Navigation;
