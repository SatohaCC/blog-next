"use client";

import { Button as RACButton, type ButtonProps as RACButtonProps } from "react-aria-components";

import { cx } from "styled-system/css";
import { tag, type TagVariantProps } from "styled-system/recipes";

type Props = TagVariantProps & Omit<RACButtonProps, "className"> & { className?: string };

const Tag = ({ className: userClassName, ...props }: Props) => {
    const [variantProps, localProps] = tag.splitVariantProps(props);
    const className = cx(tag(variantProps), userClassName);

    return <RACButton {...localProps} className={className} />;
};

export default Tag;
