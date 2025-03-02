import PageIndex, {
    generateMetadata,
    generateStaticParams,
} from "@/app/(blog)/article/page/[page]/page";
import { getList, getPaths } from "@/lib/microcms";
import { PER_PAGE, siteName } from "@/lib/siteInfo";
import { ArticleType } from "@/lib/types";
import { render, screen } from "@testing-library/react";

// モックの設定
jest.mock("@/lib/microcms", () => ({
    getList: jest.fn(),
    getPaths: jest.fn(),
}));

jest.mock("@/components/features/ArticleList/ArticleList", () => ({
    __esModule: true,
    default: jest.fn(() => <div data-testid="article-list">ArticleList</div>),
}));

jest.mock("@/components/features/Pagination/pagination", () => ({
    __esModule: true,
    default: jest.fn(() => <div data-testid="pagination">Pagination</div>),
}));

describe("PageIndex", () => {
    // テスト用のモックデータ
    const mockArticles: ArticleType[] = [
        {
            id: "article1",
            title: "テスト記事1",
            summary: "テスト記事1の概要",
            body: "テスト記事1の本文",
            createdAt: "2023-01-01T00:00:00.000Z",
            updatedAt: "2023-01-01T00:00:00.000Z",
            publishedAt: "2023-01-01T00:00:00.000Z",
            revisedAt: "2023-01-01T00:00:00.000Z",
            categories: [],
        },
        {
            id: "article2",
            title: "テスト記事2",
            summary: "テスト記事2の概要",
            body: "テスト記事2の本文",
            createdAt: "2023-01-02T00:00:00.000Z",
            updatedAt: "2023-01-02T00:00:00.000Z",
            publishedAt: "2023-01-02T00:00:00.000Z",
            revisedAt: "2023-01-02T00:00:00.000Z",
            categories: [],
        },
    ];

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("記事一覧ページが正しくレンダリングされること", async () => {
        // モックの戻り値を設定
        (getList as jest.Mock).mockResolvedValue({
            contents: mockArticles,
            totalCount: 10,
        });

        // コンポーネントをレンダリング
        const result = await PageIndex({ params: Promise.resolve({ page: "1" }) });
        render(result);

        // ArticleListとPaginationコンポーネントが表示されていることを確認
        expect(screen.getByTestId("article-list")).toBeInTheDocument();
        expect(screen.getByTestId("pagination")).toBeInTheDocument();

        // getListが正しいパラメータで呼び出されたことを確認
        expect(getList).toHaveBeenCalledWith({
            offset: 0,
            limit: PER_PAGE,
        });
    });

    it("generateStaticParamsが正しく動作すること", async () => {
        // モックの戻り値を設定
        (getList as jest.Mock).mockResolvedValue({
            totalCount: 15,
        });
        (getPaths as jest.Mock).mockReturnValue([{ page: "2" }, { page: "3" }]);

        // 関数を実行
        const paths = await generateStaticParams();

        // 期待される結果を確認
        expect(getList).toHaveBeenCalled();
        expect(getPaths).toHaveBeenCalledWith({ totalCount: 15 });
        expect(paths).toEqual([{ page: "2" }, { page: "3" }]);
    });

    it("generateMetadataが正しいメタデータを返すこと", async () => {
        // 関数を実行
        const metadata = await generateMetadata({ params: Promise.resolve({ page: "2" }) });

        // 期待される結果を確認
        expect(metadata).toEqual({
            title: `${siteName} - 記事一覧 - 2`,
            description: `${siteName} の記事一覧ページです。2ページ目を表示しています。`,
        });
    });
});
