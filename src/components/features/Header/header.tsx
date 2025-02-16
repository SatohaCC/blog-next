import Logo from "@/components/features/Header/Logo";
import Navigation from "@/components/features/Header/Navigation";
import { MENU_REVALIDATE } from "@/lib/siteInfo";
import Image from "next/image";
import { css } from "styled-system/css";

export const revalidate = MENU_REVALIDATE;

const Header = () => {
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
                    alignItems: "center",
                })}
            >
                <Logo />
                <Navigation />
                <div
                    className={css({
                        flex: 1,
                        textAlign: "right",
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                    })}
                >
                    <Image src="/github-mark.svg" alt="icon" width={20} height={20} />
                </div>
            </div>
        </header>
    );
};

export default Header;
