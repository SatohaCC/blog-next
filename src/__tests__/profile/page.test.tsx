import ProfilePage from "@/app/(blog)/profile/page";
import { myName } from "@/lib/siteInfo";
import { render, screen } from "@testing-library/react";

describe("ProfilePage", () => {
    it("renders profile page correctly", () => {
        render(<ProfilePage />);

        // AboutMeセクションのチェック
        expect(screen.getByRole("heading", { name: myName })).toBeInTheDocument();

        // 各セクションが存在することを確認
        expect(screen.getByRole("region", { name: "about" })).toBeInTheDocument();
        expect(screen.getByRole("region", { name: "qualifications" })).toBeInTheDocument();
        expect(screen.getByRole("region", { name: "portfolios" })).toBeInTheDocument();
    });
});
