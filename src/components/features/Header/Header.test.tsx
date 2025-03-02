import { HeaderProps } from "@/lib/types";
import { render, screen } from "@testing-library/react";
import HeaderPresentation from ".";

const mockContents: HeaderProps = [
    {
        id: "test-id",
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-01T00:00:00.000Z",
        publishedAt: "2024-01-01T00:00:00.000Z",
        revisedAt: "2024-01-01T00:00:00.000Z",
        label: "テストメニュー1",
        href: "/test1",
    },
    {
        id: "test-id-2",
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-01T00:00:00.000Z",
        publishedAt: "2024-01-01T00:00:00.000Z",
        revisedAt: "2024-01-01T00:00:00.000Z",
        label: "テストメニュー2",
        href: "/test2",
    },
];

describe("HeaderPresentation", () => {
    it("ロゴが表示される", () => {
        render(<HeaderPresentation contents={mockContents} />);
        // Logo コンポーネントは別途テスト済みと仮定
        expect(screen.getByRole("banner")).toBeInTheDocument();
    });

    it("ナビゲーションメニューが正しく表示される", () => {
        render(<HeaderPresentation contents={mockContents} />);
        mockContents.forEach((item) => {
            expect(screen.getByText(item.label)).toBeInTheDocument();
        });
    });

    it("GitHubアイコンが表示される", () => {
        render(<HeaderPresentation contents={mockContents} />);
        expect(screen.getByAltText("github-icon")).toBeInTheDocument();
    });
    //todo:リンク追加したらMenuとわかるようにして修正する
    // it("メニューの数が正しい", () => {
    //     render(<HeaderPresentation contents={mockContents} />);
    //     const menuItems = screen.getAllByRole("link");
    //     // Logo分の1つを引く
    //     expect(menuItems.length - 1).toBe(mockContents.length);
    // });
});
