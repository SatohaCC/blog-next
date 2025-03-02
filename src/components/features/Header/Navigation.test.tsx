import { HeaderProps } from "@/lib/types";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

// usePathnameをモック
jest.mock("next/navigation", () => ({
    usePathname: jest.fn(),
}));

// next/navigationからusePathnameをインポート
import { usePathname } from "next/navigation";

// モックデータ
const mockContents: HeaderProps = [
    {
        id: "1",
        label: "記事",
        href: "article",
        createdAt: "2023-01-01T00:00:00.000Z",
        updatedAt: "2023-01-01T00:00:00.000Z",
        publishedAt: "2023-01-01T00:00:00.000Z",
        revisedAt: "2023-01-01T00:00:00.000Z",
    },
    {
        id: "2",
        label: "カテゴリー",
        href: "category",
        createdAt: "2023-01-01T00:00:00.000Z",
        updatedAt: "2023-01-01T00:00:00.000Z",
        publishedAt: "2023-01-01T00:00:00.000Z",
        revisedAt: "2023-01-01T00:00:00.000Z",
    },
    {
        id: "3",
        label: "タグ",
        href: "tag",
        createdAt: "2023-01-01T00:00:00.000Z",
        updatedAt: "2023-01-01T00:00:00.000Z",
        publishedAt: "2023-01-01T00:00:00.000Z",
        revisedAt: "2023-01-01T00:00:00.000Z",
    },
];

describe("Navigation", () => {
    beforeEach(() => {
        // テスト前にモックをリセット
        jest.clearAllMocks();
    });

    it("ナビゲーションリンクが正しく表示されること", () => {
        // usePathnameのモック値を設定
        (usePathname as jest.Mock).mockReturnValue("/home");

        render(<Navigation contents={mockContents} />);

        // 各リンクが表示されていることを確認
        mockContents.forEach((content) => {
            expect(screen.getByText(content.label)).toBeInTheDocument();
        });
    });

    it("現在のパスに一致するリンクにアクティブスタイルが適用されること", () => {
        // article ページにいる場合をシミュレート
        (usePathname as jest.Mock).mockReturnValue("/article/page/1");

        const { container } = render(<Navigation contents={mockContents} />);

        // 各リンクの親要素を取得
        const listItems = container.querySelectorAll("li");

        // 最初のリンク（article）がアクティブであることを確認
        expect(listItems[0]).toHaveTextContent("記事");

        // アクティブなリンクには特定のクラスが含まれていることを確認
        // Panda CSSの生成するクラス名の一部をチェック
        const firstItemClasses = listItems[0].className;
        expect(firstItemClasses).toContain("pos_relative");

        // ::afterの擬似要素に関連するクラスが含まれていることを確認
        expect(firstItemClasses).toContain("[&::after]:content_");
        expect(firstItemClasses).toContain("[&::after]:pos_absolute");
        expect(firstItemClasses).toContain("[&::after]:bottom_");
        expect(firstItemClasses).toContain("[&::after]:w_100%");

        // 他のリンクはアクティブではないことを確認
        // 2番目と3番目のリンクには::afterの擬似要素に関連するクラスが含まれていないはず
        if (listItems.length > 1) {
            const secondItemClasses = listItems[1].className;
            expect(secondItemClasses).not.toContain("[&::after]:content_");
        }

        // usePathnameが正しい値で呼ばれたことを確認
        expect(usePathname).toHaveBeenCalled();
        expect((usePathname as jest.Mock).mock.results[0].value).toBe("/article/page/1");
    });

    it("異なるパスではアクティブスタイルが適用されないこと", () => {
        // 別のパスにいる場合をシミュレート
        (usePathname as jest.Mock).mockReturnValue("/other/page");

        const { container } = render(<Navigation contents={mockContents} />);

        // すべてのリンクが非アクティブであることを確認
        const listItems = container.querySelectorAll("li");

        // どのリンクにも::afterの擬似要素に関連するクラスが含まれていないはず
        Array.from(listItems).forEach((item) => {
            const itemClasses = item.className;
            // positionはrelativeかもしれないが、::afterの内容は空のはず
            expect(itemClasses).not.toContain("[&::after]:content_");
        });

        expect(usePathname).toHaveBeenCalled();
        expect((usePathname as jest.Mock).mock.results[0].value).toBe("/other/page");
    });
});
