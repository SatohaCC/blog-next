import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "../app/page";

describe("Page", () => {
    it("renders a heading", () => {
        render(<Page />);
        const mainContent = screen.getByText("Hello World");
        expect(mainContent).toBeInTheDocument();
    });
});
