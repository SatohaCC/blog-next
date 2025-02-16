import { jest } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { css } from "styled-system/css";
import Card from "./card";

const fn = jest.fn();

const meta = {
    title: "UI/Card",
    component: Card,
    tags: ["autodocs"],
    argTypes: {
        title: {
            control: "text",
            description: "カードのタイトル",
        },
        description: {
            control: "text",
            description: "カードの説明文",
        },
        date: {
            control: "text",
            description: "日付",
        },
        variant: {
            control: "select",
            options: ["outline", "filled"],
            description: "カードのスタイルバリアント",
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
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: "記事タイトル",
        description: "記事の説明文がここに入ります。",
        date: "2025/02/16",
        tags: ["タグ1", "タグ2"],
    },
};

export const Filled: Story = {
    args: {
        ...Default.args,
        variant: "filled",
    },
};

export const LongContent: Story = {
    args: {
        ...Default.args,
        description:
            "とても長い説明文を含むカード。テキストが長い場合の表示を確認するためのケースです。この文章は表示の確認用のダミーテキストです。",
    },
};
