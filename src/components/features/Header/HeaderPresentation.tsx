import Logo from "@/components/features/Header/Logo";
import Navigation from "@/components/features/Header/Navigation";
import { HeaderProps } from "@/lib/types";
import { css } from "styled-system/css";
import Profile from "./Profile";

const HeaderPresentation = ({ contents }: { contents: HeaderProps }) => (
    <header>
        <div
            className={css({
                position: "sticky",
                top: 0,
                borderBottomWidth: "1px",
                borderBottomColor: "gray.200",
                maxW: "1280px",
                margin: "0 auto",
                px: "10",
                py: "1",
                bg: "white",
                zIndex: 200,
                display: "flex",
                alignItems: "center",
            })}
        >
            <Logo />
            <Navigation contents={contents} />
            <Profile />
        </div>
    </header>
);

export default HeaderPresentation;
