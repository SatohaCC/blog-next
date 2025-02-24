import { render, screen } from "@testing-library/react";
import Link from "./link";

describe("Link", () => {
    beforeEach(() => {
        render(
            <Link
                href="/test"
                target="_blank"
                rel="noopener noreferrer"
                ariaLabel="テストページへのリンク"
            >
                テストリンク
            </Link>
        );
    });

    it("正しくレンダリングされること", () => {
        const link = screen.getByRole("link");
        expect(link).toHaveAttribute("href", "/test");
        expect(link).toHaveTextContent("テストリンク");
    });

    it("aria-labelが正しく設定されること", () => {
        expect(screen.getByRole("link")).toHaveAttribute("aria-label", "テストページへのリンク");
    });

    it("target属性が正しく設定されること", () => {
        expect(screen.getByRole("link")).toHaveAttribute("target", "_blank");
    });

    it("rel属性が正しく設定されること", () => {
        expect(screen.getByRole("link")).toHaveAttribute("rel", "noopener noreferrer");
    });

    it("アイコンが正しく表示されること", () => {
        const MockIcon = () => <svg data-testid="mock-icon" />;
        render(
            <Link href="/test" icon={MockIcon}>
                テストリンク
            </Link>
        );
        expect(screen.getByTestId("mock-icon")).toBeInTheDocument();
    });
});
