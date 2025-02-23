import Logo from "@/components/features/Header/Logo";
import Navigation from "@/components/features/Header/Navigation";
import { HeaderProps } from "@/lib/types";
import { css } from "styled-system/css";
import ProfileAndGitLink from "./ProfileAndGitLink";

export const HeaderPresentation = ({ contents }: { contents: HeaderProps }) => (
    <header
        className={css({
            position: "sticky",
            top: 0,
            zIndex: 40,
            backgroundColor: "white",
            borderBottom: "1px solid",
            borderColor: "gray.100",
            shadow: "sm",
            width: "100%",
        })}
    >
        <nav
            className={css({
                display: "flex",
                alignItems: "center",
                width: "100%",
                maxW: "1280px",
                margin: "0 auto",
                px: { base: "2", md: "5" },
                py: "1",
            })}
        >
            <Logo />
            <Navigation contents={contents} />
            <ProfileAndGitLink />
        </nav>
    </header>
);

export default HeaderPresentation;
