import { getList } from "@/lib/microcms";
import { siteName } from "@/lib/siteInfo";
import { render, screen } from "@testing-library/react";
import PageIndex, { generateMetadata } from "./page";

// Mock the microcms library
jest.mock("@/lib/microcms", () => ({
    getList: jest.fn(),
    getMenu: jest.fn(),
}));

// Mock the components
jest.mock("@/components/features/ArticleList/ArticleList", () => {
    return function MockArticleList() {
        return <div data-testid="article-list">Article List</div>;
    };
});

jest.mock("@/components/features/Pagination/pagination", () => {
    return function MockPagination() {
        return <div data-testid="pagination">Pagination</div>;
    };
});

describe("PageIndex", () => {
    const mockContents = [
        { id: "1", title: "Test Article 1" },
        { id: "2", title: "Test Article 2" },
    ];

    beforeEach(() => {
        (getList as jest.Mock).mockResolvedValue({
            contents: mockContents,
            totalCount: 10,
        });
    });

    it("renders article list and pagination", async () => {
        const props = {
            params: Promise.resolve({ category: "test-category", page: "1" }),
        };

        render(await PageIndex(props));

        expect(screen.getByTestId("article-list")).toBeInTheDocument();
        expect(screen.getByTestId("pagination")).toBeInTheDocument();
    });

    it("calls getList with correct parameters", async () => {
        const props = {
            params: Promise.resolve({ category: "test-category", page: "2" }),
        };

        await PageIndex(props);

        expect(getList).toHaveBeenCalledWith({
            offset: 5,
            limit: 5,
            filters: "categories[contains]test-category",
        });
    });
});

describe("generateMetadata", () => {
    it("generates correct metadata", async () => {
        const props = {
            params: Promise.resolve({ category: "test-category", page: "1" }),
        };

        const metadata = await generateMetadata(props);

        expect(metadata).toEqual({
            title: `${siteName} - test-category- 1`,
            description: `${siteName} の test-category記事一覧ページです。1ページ目を表示しています。`,
        });
    });
});
