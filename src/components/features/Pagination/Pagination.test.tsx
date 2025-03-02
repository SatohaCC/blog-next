import { render, screen } from "@testing-library/react";

import { PER_PAGE } from "@/lib/siteInfo";
import Pagination from ".";
import PaginationLink from "./PaginationLink";

describe("Pagination", () => {
    it("PER_PAGE以下の場合、何も表示されない", () => {
        render(<Pagination totalCount={PER_PAGE} currentPage={1} />);
        const pagination = screen.queryByRole("navigation");
        expect(pagination).toBeNull();
    });

    it("省略がない場合、全てのページリンクが表示される", () => {
        render(<Pagination totalCount={PER_PAGE * 3} currentPage={2} />);
        const links = screen.getAllByRole("link");
        expect(links).toHaveLength(3); // 1,2,3
    });

    it("省略がある場合、表示されるリンクは制限される", () => {
        render(<Pagination totalCount={PER_PAGE * 10} currentPage={5} />);
        const links = screen.getAllByRole("link");
        // 最初(1) + 現在ページの前後2つ(3,4,5,6,7) + 最後(10) = 7つ
        expect(links).toHaveLength(7);
    });

    describe("省略記号", () => {
        it("ページ数が少ない場合は表示されない", () => {
            render(<Pagination totalCount={PER_PAGE * 3} currentPage={2} />);
            const ellipsis = screen.queryByText("・・・");
            expect(ellipsis).toBeNull();
        });

        it("ページ数が多い場合は表示される", () => {
            render(<Pagination totalCount={PER_PAGE * 10} currentPage={5} />);
            const ellipsis = screen.getAllByText("・・・");
            expect(ellipsis).toHaveLength(2);
        });
    });

    it("カテゴリーが正しく渡される", () => {
        render(<Pagination totalCount={PER_PAGE * 3} currentPage={1} category="test" />);
        const link = screen.getByRole("link", { name: "testの1ページ目へのリンク" });
        expect(link).toHaveAttribute("href", "/test/page/1");
    });
});

describe("PaginationLink", () => {
    describe("スタイル適用", () => {
        it("現在のページはcurrentPageスタイルが適用される", () => {
            render(<PaginationLink page={1} currentPage={1} category="blog" />);
            const text = screen.getByText("1");
            expect(text).toHaveClass("text--visual_currentPage");
        });

        it("現在のページ以外はotherPagesスタイルが適用される", () => {
            render(<PaginationLink page={2} currentPage={1} category="blog" />);
            const text = screen.getByText("2");
            expect(text).toHaveClass("text--visual_otherPages");
        });
    });

    describe("URL生成", () => {
        it("カテゴリーありの場合、正しいURLが生成される", () => {
            render(<PaginationLink page={1} currentPage={1} category="blog" />);
            const link = screen.getByRole("link");
            expect(link).toHaveAttribute("href", "/blog/page/1");
        });

        it("カテゴリーなしの場合、正しいURLが生成される", () => {
            render(<PaginationLink page={1} currentPage={1} />);
            const link = screen.getByRole("link");
            expect(link).toHaveAttribute("href", "/undefined/page/1");
        });
    });
});
