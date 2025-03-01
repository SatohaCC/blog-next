import { portfolioData } from "@/data/portfolioData";
import { render, screen } from "@testing-library/react";
import Portfolios from "../Portfolios";

describe("Portfolios", () => {
    beforeEach(() => {
        render(<Portfolios />);
    });

    it("タイトルが表示される", () => {
        expect(screen.getByText("ポートフォリオ")).toBeInTheDocument();
    });

    it("正しい数のポートフォリオリンクが表示される", () => {
        const links = screen.getAllByRole("link");
        expect(links).toHaveLength(portfolioData.length);
    });

    it("各ポートフォリオのタイトルが正しく表示される", () => {
        portfolioData.forEach((data) => {
            expect(screen.getByRole("heading", { name: data.title })).toBeInTheDocument();
        });
    });

    it("各ポートフォリオのリンクが正しいURLを持つ", () => {
        portfolioData.forEach((data) => {
            const link = screen.getByRole("link", { name: data.title });
            expect(link).toHaveAttribute("href", data.url);
        });
    });
});
