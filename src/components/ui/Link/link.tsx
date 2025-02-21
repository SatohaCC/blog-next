"use client";
import NEXTLink from "next/link";
import { Link as RACLink } from "react-aria-components";

type Props = {
    children: React.ReactNode;
    href: string;
};

const Link = ({ children, href }: Props) => {
    return (
        <NEXTLink href={href} passHref>
            <RACLink>{children}</RACLink>
        </NEXTLink>
    );
};

export default Link;
