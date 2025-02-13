"use client";

import { Button as RACButton, type ButtonProps as RACButtonProps } from "react-aria-components";

import { cx } from "styled-system/css";
import { ButtonVariantProps, button } from "styled-system/recipes";

type Props = ButtonVariantProps & Omit<RACButtonProps, "className"> & { className?: string };

const Button = ({ className: userClassName, ...props }: Props) => {
    const [variantProps, localProps] = button.splitVariantProps(props);
    const className = cx(button(variantProps), userClassName);

    return <RACButton {...localProps} className={className} />;
};

export default Button;
