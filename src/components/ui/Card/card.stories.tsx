import { jest } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { css } from "styled-system/css";
import Card from "./card";

const fn = jest.fn();

const meta = {
    title: "UI/Card",
    component: Card,
    tags: ["autodocs"],

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
        content: {
            id: "1",
            title: "サンプル記事",
            summary: "記事の説明文がここに入ります。",
            body: "記事の本文です。",
            publishedAt: "2025-02-16T00:00:00+09:00",
            createdAt: "2025-02-16T00:00:00+09:00",
            updatedAt: "2025-02-16T00:00:00+09:00",
            revisedAt: "2025-02-16T00:00:00+09:00",
            categories: [
                {
                    id: "1",
                    label: "タグ1",
                    createdAt: "2024-03-20T00:00:00+09:00",
                    updatedAt: "2024-03-20T00:00:00+09:00",
                    publishedAt: "2024-03-20T00:00:00+09:00",
                    revisedAt: "2024-03-20T00:00:00+09:00",
                    href: "/categories/1",
                },
                {
                    id: "2",
                    label: "タグ2",
                    createdAt: "2024-03-20T00:00:00+09:00",
                    updatedAt: "2024-03-20T00:00:00+09:00",
                    publishedAt: "2024-03-20T00:00:00+09:00",
                    revisedAt: "2024-03-20T00:00:00+09:00",
                    href: "/categories/2",
                },
            ],
        },
    },
};

export const Filled: Story = {
    args: {
        content: {
            ...Default.args.content,
        },
    },
};

export const LongContent: Story = {
    args: {
        content: {
            ...Default.args.content,
            summary:
                "とても長い説明文を含むカード。テキストが長い場合の表示を確認するためのケースです。この文章は表示の確認用のダミーテキストです。とても長い説明文を含むカード。テキストが長い場合の表示を確認するためのケースです。この文章は表示の確認用のダミーテキストです。",
        },
    },
};
