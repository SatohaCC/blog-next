import { ArticleType } from "@/lib/types";
import { render, screen } from "@testing-library/react";
import ArticleList from ".";

// モックデータ
const mockContents: ArticleType[] = [
    {
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
    },
    {
        id: "test-id-2",
        title: "テスト記事2",
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
    },
];

describe("ArticleList", () => {
    it("記事リストが正しくレンダリングされること", () => {
        render(<ArticleList contents={mockContents} />);

        // リストアイテムが正しい数だけ表示されているか確認
        const listItems = screen.getAllByRole("listitem");
        expect(listItems).toHaveLength(2);
    });

    it("contentsが空の場合、「No contents」が表示されること", () => {
        render(<ArticleList contents={[]} />);

        // 「No contents」テキストが表示されることを確認
        expect(screen.getByText("No contents")).toBeInTheDocument();

        // リスト要素（ul）が存在しないことを確認
        const ulElements = screen.queryAllByRole("list");
        expect(ulElements).toHaveLength(0);

        // リストアイテム（li）が存在しないことを確認
        const listItems = screen.queryAllByRole("listitem");
        expect(listItems).toHaveLength(0);
    });

    it("記事のタイトルが正しく表示されること", () => {
        render(<ArticleList contents={mockContents} />);
        expect(screen.getByText("テスト記事")).toBeInTheDocument();
        expect(screen.getByText("テスト記事2")).toBeInTheDocument();
    });

    it("記事のサマリーが正しく表示されること", () => {
        render(<ArticleList contents={mockContents} />);
        const summaries = screen.getAllByText("テストの概要です");
        expect(summaries).toHaveLength(2);
    });

    it("mockContentsの要素数とulの中のリストアイテム数が一致すること", () => {
        render(<ArticleList contents={mockContents} />);

        // ulが1つだけ存在することを確認
        const ulElements = screen.getAllByRole("list");
        expect(ulElements).toHaveLength(1);

        // ul内のli要素の数がmockContentsの長さと一致することを確認
        const listItems = screen.getAllByRole("listitem");
        expect(listItems).toHaveLength(mockContents.length);
    });
});
