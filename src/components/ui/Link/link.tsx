"use client";
import NEXTLink from "next/link";
import { Link as RACLink } from "react-aria-components";
import { css } from "styled-system/css";

type Props = {
    children: React.ReactNode;
    href: string;
    target?: string;
    rel?: string;
};

const Link = ({ children, href, target = "_self", rel = "" }: Props) => {
    return (
        <NEXTLink href={href} passHref>
            <RACLink
                target={target}
                rel={rel}
                className={css({
                    textDecoration: "none",
                    outline: "none",
                    _hover: {
                        color: "blue.600",
                    },
                })}
            >
                {children}
            </RACLink>
        </NEXTLink>
    );
};

export default Link;
