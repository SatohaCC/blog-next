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
        // 各テストの前にモックをリセット
        (useRouter as jest.Mock).mockImplementation(() => ({
            back: mockBack,
        }));
        jest.clearAllMocks();
    });

    it("デフォルトテキスト'戻る'でボタンがレンダリングされること", () => {
        render(<BackBtn />);
        expect(screen.getByRole("button", { name: "戻る" })).toBeInTheDocument();
    });

    it("クリック時にrouter.backが呼ばれること", () => {
        render(<BackBtn />);
        fireEvent.click(screen.getByRole("button"));
        expect(mockBack).toHaveBeenCalledTimes(1);
    });
});
