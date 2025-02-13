import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./button";

describe("Button", () => {
    const textContext = "Click me";
    it("renders children correctly", () => {
        render(<Button>{textContext}</Button>);
        expect(screen.getByRole("button")).toHaveTextContent(textContext);
    });

    it("handles onClick events", () => {
        const handleClick = jest.fn();
        render(<Button onPress={handleClick}>{textContext}</Button>);

        fireEvent.click(screen.getByRole("button"));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("applies visual variants correctly", () => {
        const { rerender } = render(<Button visual="solid">Solid Button</Button>);
        expect(screen.getByRole("button")).toHaveClass("button--visual_solid");

        rerender(<Button visual="outline">Outline Button</Button>);
        expect(screen.getByRole("button")).toHaveClass("button--visual_outline");

        rerender(<Button visual="text">Text Button</Button>);
        expect(screen.getByRole("button")).toHaveClass("button--visual_text");
    });

    it("applies size variants correctly", () => {
        const { rerender } = render(<Button size="lg">Large Button</Button>);
        expect(screen.getByRole("button")).toHaveClass("button--size_lg");

        rerender(<Button size="md">Medium Button</Button>);
        expect(screen.getByRole("button")).toHaveClass("button--size_md");

        rerender(<Button size="sm">Small Button</Button>);
        expect(screen.getByRole("button")).toHaveClass("button--size_sm");

        rerender(<Button size="xs">Extra Small Button</Button>);
        expect(screen.getByRole("button")).toHaveClass("button--size_xs");
    });

    it("is disabled when disabled prop is true", () => {
        render(<Button isDisabled>Disabled Button</Button>);
        expect(screen.getByRole("button")).toBeDisabled();
    });
});
