import { jest } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { css } from "styled-system/css";
import { tag } from "styled-system/recipes/tag";
import Tag from "./tag";

const fn = jest.fn();

const meta = {
    title: "Example/Tag",
    component: Tag,
    tags: ["autodocs"],
    argTypes: {
        visual: {
            options: tag.variantMap.visual,
            control: { type: "radio" },
            description: "ボタンのスタイル",
        },
        // size: {
        //     options: tag.variantMap.size,
        //     control: { type: "radio" },
        //     description: "ボタンのサイズ",

        // },
        isDisabled: {
            control: { type: "boolean" },
            description: "ボタンを無効にする",
        },
    },
    parameters: {
        nextjs: {
            router: {
                push: fn,
            },
        },
    },

    decorators: [
        (Story) => (
            <div className={css({ m: 5 })}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
    args: {
        visual: "outline",
        children: "Tag",
    },
};

export const AllTags = {
    render: () => {
        return (
            <div>
                <div>
                    <h2 className={css({ my: 2 })}>アウトラインタグ（Outline）</h2>
                    <div className={css({ display: "flex", gap: 4, alignItems: "center" })}>
                        <Tag visual="outline">Tag</Tag>
                    </div>
                </div>{" "}
                <div>
                    <h2 className={css({ my: 2 })}>アウトラインタグ（Outline isDisabled）</h2>
                    <div className={css({ display: "flex", gap: 4, alignItems: "center" })}>
                        <Tag visual="outline" isDisabled>
                            Tag
                        </Tag>
                    </div>
                </div>
            </div>
        );
    },
};

export const Outline: Story = {
    args: {
        ...tag.raw({
            visual: "outline",
        }),
        children: "Tag",
    },
};
