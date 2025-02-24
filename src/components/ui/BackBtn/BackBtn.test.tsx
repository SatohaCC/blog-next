import { fireEvent, render, screen } from "@testing-library/react";
import { useRouter } from "next/navigation";
import BackBtn from "./BackBtn";

// Next.jsのrouterをモック化
jest.mock("next/navigation", () => ({
    useRouter: jest.fn(),
}));

describe("BackBtn", () => {
    const mockBack = jest.fn();

    beforeEach(() => {
        (useRouter as jest.Mock).mockImplementation(() => ({
            back: mockBack,
        }));
        jest.clearAllMocks();
    });

    it("正しいaria-labelが設定されていること", () => {
        render(<BackBtn />);
        expect(screen.getByRole("button")).toHaveAttribute("aria-label", "前のページに戻る");
    });

    it("クリック時にrouter.backが呼ばれること", () => {
        render(<BackBtn />);
        fireEvent.click(screen.getByRole("button"));
        expect(mockBack).toHaveBeenCalledTimes(1);
    });
});
