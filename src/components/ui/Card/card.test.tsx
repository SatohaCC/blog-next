import { ArticleType } from "@/lib/types";
import { render, screen } from "@testing-library/react";
import Card from "./card";

describe("Card", () => {
    const mockContent: ArticleType = {
        id: "test-id",
        title: "テスト記事",
        summary: "テストの概要です",
        body: "テスト本文",
        publishedAt: "2024-03-20",
        createdAt: "2024-03-20",
        updatedAt: "2024-03-20",
        revisedAt: "2024-03-20",
        categories: [
            {
                id: "1",
                label: "テストcategories",
                createdAt: "2024-03-20",
                updatedAt: "2024-03-20",
                publishedAt: "2024-03-20",
                revisedAt: "2024-03-20",
                href: "/categories/1",
            },
            {
                id: "2",
                label: "React",
                createdAt: "2024-03-20",
                updatedAt: "2024-03-20",
                publishedAt: "2024-03-20",
                revisedAt: "2024-03-20",
                href: "/categories/2",
            },
        ],
    };

    it("正しくレンダリングされること", () => {
        render(<Card content={mockContent} />);

        // 日付のフォーマットを確認
        expect(screen.getByText("2024.03.20")).toBeInTheDocument();

        // タイトルが正しくリンクされていることを確認
        const titleLink = screen.getByRole("link");
        expect(titleLink).toHaveAttribute("href", "/article/test-id");
        expect(titleLink).toHaveTextContent("テスト記事");

        // 概要が表示されていることを確認
        expect(screen.getByText("テストの概要です")).toBeInTheDocument();

        // カテゴリーが表示されていることを確認
        expect(screen.getByText("テストcategories, React")).toBeInTheDocument();
    });
});
