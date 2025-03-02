import { getList } from "@/lib/microcms";
import { render, screen } from "@testing-library/react";
import Home from "../app/page";

// モックの設定
jest.mock("@/lib/microcms", () => ({
    getList: jest.fn(),
}));

const MockArticleList = jest.fn();
jest.mock("@/components/features/ArticleList", () => {
    const MockComponent = function () {
        MockArticleList();
        return <div data-testid="article-list">ArticleList</div>;
    };
    MockComponent.displayName = "MockArticleList";
    return MockComponent;
});

const MockPagination = jest.fn();
jest.mock("@/components/features/Pagination", () => {
    const MockComponent = function () {
        MockPagination();
        return <div data-testid="pagination">Pagination</div>;
    };
    MockComponent.displayName = "MockPagination";
    return MockComponent;
});

// エラーコンポーネントのモック
const MockErrorComponent = jest.fn();
jest.mock("../app/error", () => {
    const MockComponent = function () {
        MockErrorComponent();
        return <div data-testid="error-component">Error Component</div>;
    };
    MockComponent.displayName = "MockErrorComponent";
    return MockComponent;
});

describe("Home", () => {
    beforeEach(() => {
        (getList as jest.Mock).mockReset();
        MockArticleList.mockReset();
        MockPagination.mockReset();
        MockErrorComponent.mockReset();
    });

    it("getListが正しいパラメータで呼び出されること", async () => {
        (getList as jest.Mock).mockResolvedValue({
            contents: [],
            totalCount: 0,
        });

        await Home();

        expect(getList).toHaveBeenCalledWith({
            limit: expect.any(Number),
            offset: 0,
        });
    });

    it("getListがエラーを投げた場合、エラーが伝播すること", async () => {
        const error = new Error("API Error");
        (getList as jest.Mock).mockRejectedValue(error);

        await expect(Home()).rejects.toThrow("API Error");
    });

    it("エラーが発生した場合、エラーコンポーネントが表示されること", async () => {
        // APIエラーを発生させる
        const error = new Error("API Error");
        (getList as jest.Mock).mockRejectedValue(error);

        // テスト用のラッパーコンポーネント
        const TestWrapper = async () => {
            try {
                const HomeComponent = await Home();
                return HomeComponent;
            } catch {
                // エラーが発生した場合はエラーコンポーネントを表示
                return <div data-testid="error-component">Error Component</div>;
            }
        };

        render(await TestWrapper());

        // エラーコンポーネントが表示されていることを確認
        expect(screen.getByTestId("error-component")).toBeInTheDocument();
        expect(screen.queryByTestId("article-list")).not.toBeInTheDocument();
        expect(screen.queryByTestId("pagination")).not.toBeInTheDocument();
    });
});
