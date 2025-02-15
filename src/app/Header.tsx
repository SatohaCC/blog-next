import Logo from "@/components/features/Header/Logo";
import Navigation from "@/components/features/Header/Navigation";

import { getMenu } from "@/lib/microcms";
import { MENU_REVALIDATE } from "@/lib/siteInfo";
import { css } from "styled-system/css";

export const revalidate = MENU_REVALIDATE;

const Header = async () => {
    const { contents } = await getMenu();
    return (
        <header>
            <div
                className={css({
                    position: "sticky",
                    top: 0,
                    borderBottomWidth: "1px",
                    borderBottomColor: "gray.200",
                    maxW: "1280px",
                    margin: "0 auto",
                    px: "5",
                    bg: "white",
                    zIndex: 200,
                    display: "flex",
                    alignItems: "baseline",
                })}
            >
                <Logo />
                <Navigation contents={contents} />
                <div className={css({ marginLeft: "auto" })}>◆</div>
            </div>
        </header>
    );
};

export default Header;
