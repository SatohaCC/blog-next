"use client";
import NEXTLink from "next/link";
import { IconType } from "react-icons";
import { css } from "styled-system/css";

type Props = {
    children: React.ReactNode;
    href: string;
    target?: string;
    rel?: string;
    icon?: IconType;
    ariaLabel?: string;
};

const Link = ({ children, href, target = "_self", rel = "", ariaLabel, icon: Icon }: Props) => {
    return (
        <NEXTLink
            href={href}
            target={target}
            rel={rel}
            aria-label={ariaLabel}
            className={css({
                textDecoration: "none",
                outline: "none",
                _hover: {
                    color: "blue.600",
                },
                _focusVisible: {
                    color: "blue.600",
                    outline: "2px solid",
                    outlineColor: "blue.600",
                    outlineOffset: "2px",
                    borderRadius: "sm",
                },
            })}
        >
            {Icon && <Icon />}
            {children}
        </NEXTLink>
    );
};

export default Link;
