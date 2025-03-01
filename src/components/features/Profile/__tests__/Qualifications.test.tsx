import { qualificationsData } from "@/data/qualificationsData";
import { render, screen } from "@testing-library/react";
import Qualifications from "../Qualifications";

describe("Qualifications", () => {
    it("タイトルが表示される", () => {
        render(<Qualifications />);
        expect(screen.getByText("資格")).toBeInTheDocument();
    });

    it("全ての資格が表示される", () => {
        render(<Qualifications />);
        qualificationsData.forEach((data) => {
            expect(screen.getByText(data.text)).toBeInTheDocument();
        });
    });

    it("グリッドレイアウトが適用されている", () => {
        const { container } = render(<Qualifications />);
        const grid = container.querySelector("section > div");
        expect(grid).toHaveClass("d_grid");
    });
});
