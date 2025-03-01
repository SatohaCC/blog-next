import { aboutData, iconsData } from "@/data/aboutData";
import { myName } from "@/lib/siteInfo";
import { render, screen } from "@testing-library/react";
import AboutMe from "../AboutMe";

describe("AboutMe", () => {
    it("名前が表示される", () => {
        render(<AboutMe />);
        expect(screen.getByText(myName)).toBeInTheDocument();
    });

    it("全てのSNSアイコンが表示される", () => {
        render(<AboutMe />);
        const links = screen.getAllByRole("link");
        expect(links).toHaveLength(iconsData.length);
    });

    it("自己紹介文が全て表示される", () => {
        render(<AboutMe />);
        aboutData.forEach((data) => {
            expect(screen.getByText(data.text)).toBeInTheDocument();
        });
    });
});
