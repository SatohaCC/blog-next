import type { Meta, StoryObj } from "@storybook/react";
import HeaderPresentation from ".";

const meta = {
    title: "Features/Header",
    component: HeaderPresentation,
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof HeaderPresentation>;

export default meta;
type Story = StoryObj<typeof HeaderPresentation>;

export const Default: Story = {
    args: {
        contents: [
            {
                id: "1",
                label: "Tech",
                href: "/",
                createdAt: "2024-01-01T00:00:00.000Z",
                updatedAt: "2024-01-01T00:00:00.000Z",
                publishedAt: "2024-01-01T00:00:00.000Z",
                revisedAt: "2024-01-01T00:00:00.000Z",
            },
            {
                id: "2",
                label: "Medical",
                href: "/about",
                createdAt: "2024-01-01T00:00:00.000Z",
                updatedAt: "2024-01-01T00:00:00.000Z",
                publishedAt: "2024-01-01T00:00:00.000Z",
                revisedAt: "2024-01-01T00:00:00.000Z",
            },
            {
                id: "3",
                label: "Life",
                href: "/blog",
                createdAt: "2024-01-01T00:00:00.000Z",
                updatedAt: "2024-01-01T00:00:00.000Z",
                publishedAt: "2024-01-01T00:00:00.000Z",
                revisedAt: "2024-01-01T00:00:00.000Z",
            },
        ],
    },
};
