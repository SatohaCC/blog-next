import { render, screen } from "@testing-library/react";

import { PER_PAGE } from "@/lib/siteInfo";
import Pagination from "./pagination";

describe("Pagination", () => {
    it("PER_PAGE以下の場合、何も表示されない", () => {
        render(<Pagination totalCount={PER_PAGE} currentPage={1} />);
        const pagination = screen.queryByRole("navigation");
        expect(pagination).toBeNull();
    });

    it("省略がない場合、全てのページボタンが表示される", () => {
        render(<Pagination totalCount={PER_PAGE * 3} currentPage={2} />);
        const buttons = screen.getAllByRole("button");
        expect(buttons).toHaveLength(3); // 1,2,3
    });

    it("省略がある場合、表示されるボタンは制限される", () => {
        render(<Pagination totalCount={PER_PAGE * 10} currentPage={5} />);
        const buttons = screen.getAllByRole("button");
        // 最初(1) + 現在ページの前後2つ(3,4,5,6,7) + 最後(10) = 7つ
        expect(buttons).toHaveLength(7);
    });

    it("現在のページが強調表示される", () => {
        render(<Pagination totalCount={PER_PAGE * 3} currentPage={2} />);
        const currentButton = screen.getByText("2");
        expect(currentButton).toHaveStyle({ backgroundColor: "var(--colors-primary)" });
    });

    it("省略記号が表示されない（ページ数が少ない場合）", () => {
        render(<Pagination totalCount={PER_PAGE * 3} currentPage={2} />);
        const ellipsis = screen.queryByText("・・・");
        expect(ellipsis).toBeNull();
    });

    it("省略記号が表示される（ページ数が多い場合）", () => {
        render(<Pagination totalCount={PER_PAGE * 10} currentPage={5} />);
        const ellipsis = screen.getAllByText("・・・");
        expect(ellipsis).toHaveLength(2);
    });

    it("カテゴリーが正しく渡される", () => {
        render(<Pagination totalCount={PER_PAGE * 3} currentPage={1} category="test" />);
        const link = screen.getByRole("link", { name: "1" });
        expect(link).toHaveAttribute("href", "/test/page/1");
    });
});
