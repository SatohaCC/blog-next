import { render, screen } from "@testing-library/react";
import PortfolioRow from "../PortfolioRow";

describe("PortfolioRow", () => {
    const mockData = {
        title: "Test Portfolio",
        url: "https://example.com",
        linkType: "_blank",
        text: ["Description 1", "Description 2"],
    };

    it("外部リンクの場合、タイトルと外部リンクアイコンが表示される", () => {
        render(<PortfolioRow data={mockData} />);

        expect(screen.getByRole("heading")).toHaveTextContent("Test Portfolio");
        expect(screen.getByRole("link")).toHaveAttribute("target", "_blank");
        expect(screen.getByRole("link")).toHaveAttribute("href", "https://example.com");
    });

    it("すべての説明文が表示される", () => {
        render(<PortfolioRow data={mockData} />);

        mockData.text.forEach((text) => {
            expect(screen.getByText(text)).toBeInTheDocument();
        });
    });

    it("外部リンクの場合、外部リンクアイコンが表示される", () => {
        const externalData = { ...mockData, linkType: "_blank" as const };
        render(<PortfolioRow data={externalData} />);
        expect(screen.getByTestId("external-link-icon")).toBeInTheDocument();
    });

    it("内部リンクの場合、外部リンクアイコンが表示されない", () => {
        const internalData = { ...mockData, linkType: "" as const };
        render(<PortfolioRow data={internalData} />);
        expect(screen.queryByTestId("external-link-icon")).not.toBeInTheDocument();
    });
});
