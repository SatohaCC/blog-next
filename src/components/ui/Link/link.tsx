"use client";
import NEXTLink from "next/link";
import { Link as RACLink } from "react-aria-components";
import { IconType } from "react-icons";
import { css } from "styled-system/css";

type Props = {
    children: React.ReactNode;
    href: string;
    target?: string;
    rel?: string;
    icon?: IconType;
};

const Link = ({ children, href, target = "_self", rel = "", icon: Icon }: Props) => {
    return (
        <NEXTLink href={href} passHref target={target} rel={rel}>
            <RACLink
                className={css({
                    textDecoration: "none",
                    outline: "none",
                    _hover: {
                        color: "blue.600",
                    },
                })}
            >
                {Icon && <Icon />}
                {children}
            </RACLink>
        </NEXTLink>
    );
};

export default Link;
