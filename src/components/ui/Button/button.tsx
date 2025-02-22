"use client";

import { Button as RACButton, type ButtonProps as RACButtonProps } from "react-aria-components";

import { cx } from "styled-system/css";
import { ButtonVariantProps, button } from "styled-system/recipes";

type Props = ButtonVariantProps &
    Omit<RACButtonProps, "className"> & { className?: string; tabIndex?: number };

const Button = ({ className: userClassName, tabIndex = 0, ...props }: Props) => {
    const [variantProps, localProps] = button.splitVariantProps(props);
    const className = cx(button(variantProps), userClassName);

    return <RACButton {...localProps} {...{ tabIndex }} className={className} />;
};

export default Button;
