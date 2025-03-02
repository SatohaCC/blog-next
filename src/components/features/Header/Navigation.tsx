"use client";

import Link from "@/components/ui/Link/link";
import { HeaderProps } from "@/lib/types";
import { usePathname } from "next/navigation";
import { css } from "styled-system/css";

type Props = {
    contents: HeaderProps;
};

const Navigation = ({ contents }: Props) => {
    const pathname = usePathname();

    return (
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
            {contents?.map((content) => {
                const href = `/${content.href}/page/1`;
                const isActive = pathname?.startsWith(`/${content.href}`);

                return (
                    <li
                        key={content.id}
                        className={css({
                            position: "relative",
                            "&::after": isActive
                                ? {
                                      content: '""',
                                      position: "absolute",
                                      bottom: "-4px",
                                      left: 0,
                                      width: "100%",
                                      height: "2px",
                                      backgroundColor: "textColor",
                                  }
                                : {},
                        })}
                    >
                        <Link href={href} ariaLabel={`${content.label}へのリンク`}>
                            {content.label}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default Navigation;
