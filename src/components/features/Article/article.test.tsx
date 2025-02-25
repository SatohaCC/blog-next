import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Article from "./article";

// Next.jsのApp Routerをモック
jest.mock("next/navigation", () => ({
    useRouter: () => ({
        back: jest.fn(),
        push: jest.fn(),
    }),
    usePathname: () => "",
}));

// モックデータ
const mockArticleData = {
    title: "テスト記事タイトル",
    publishedAt: "2023-01-01",
    updatedAt: "2023-01-02",
    summary: "これは記事の要約です",
    body: '<p>これはテスト記事の本文です。</p><h2>見出し</h2><p>テスト段落</p><pre><code>const test = "code";</code></pre>',
};

// html-react-parserをモック
jest.mock("html-react-parser", () => (content: string) => content);

describe("Article", () => {
    it("記事のタイトルが正しく表示されること", () => {
        render(<Article {...mockArticleData} />);
        expect(screen.getByText(mockArticleData.title)).toBeInTheDocument();
    });

    it("作成日と更新日が正しく表示されること", () => {
        render(<Article {...mockArticleData} />);
        expect(screen.getByText(`作成:${mockArticleData.publishedAt}`)).toBeInTheDocument();
        expect(screen.getByText(`更新:${mockArticleData.updatedAt}`)).toBeInTheDocument();
    });

    it("summaryが存在する場合に表示されること", () => {
        render(<Article {...mockArticleData} />);
        expect(screen.getByText(mockArticleData.summary)).toBeInTheDocument();
    });

    it("記事の本文が正しく表示されること", () => {
        render(<Article {...mockArticleData} />);
        // html-react-parserをモックしているので、本文がそのまま表示される
        expect(screen.getByText(mockArticleData.body)).toBeInTheDocument();
    });

    it("BackBtnコンポーネントがレンダリングされること", () => {
        render(<Article {...mockArticleData} />);
        // BackBtnコンポーネントの存在を確認
        const backButton = screen.getByRole("button");
        expect(backButton).toBeInTheDocument();

        // 戻るボタンが1つだけ表示されていることを確認
        const backButtons = screen.getAllByRole("button");
        expect(backButtons).toHaveLength(1);
    });
});
