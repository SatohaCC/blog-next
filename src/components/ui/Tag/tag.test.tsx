import { fireEvent, render, screen } from "@testing-library/react";
import Tag from "./tag";

describe("Tag", () => {
    it("renders with default props", () => {
        render(<Tag>Test Tag</Tag>);
        expect(screen.getByRole("button")).toHaveTextContent("Test Tag");
    });

    it("applies outline visual style by default", () => {
        render(<Tag>Test Tag</Tag>);
        const tag = screen.getByRole("button");
        expect(tag).toHaveClass("tag");
        expect(tag).toHaveClass("tag--visual_outline");
    });

    it("handles click events", async () => {
        const handleClick = jest.fn();
        render(<Tag onPress={handleClick}>Clickable Tag</Tag>);
        await fireEvent.click(screen.getByRole("button"));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("merges custom className with recipe styles", () => {
        render(<Tag className="custom-class">Test Tag</Tag>);
        const tag = screen.getByRole("button");
        expect(tag).toHaveClass("tag");
        expect(tag).toHaveClass("custom-class");
    });
});
