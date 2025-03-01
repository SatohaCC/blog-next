import { render, screen } from "@testing-library/react";
import BlockTitle from "../BlockTitle";

describe("BlockTitle", () => {
    it("渡されたタイトルが表示される", () => {
        const title = "テストタイトル";
        render(<BlockTitle title={title} />);
        expect(screen.getByText(title)).toBeInTheDocument();
    });
});
