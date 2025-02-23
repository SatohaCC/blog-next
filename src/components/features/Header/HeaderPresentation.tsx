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
            transition: "background-color 0.2s, border-color 0.2s",
            _dark: {
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                borderColor: "gray.800",
            },
            maxW: "1280px",
            margin: "0 auto",
            px: { base: "2", md: "5" },
            py: "1",
            display: "flex",
            alignItems: "center",
        })}
    >
        <nav
            className={css({
                display: "flex",
                alignItems: "center",
                width: "100%",
            })}
        >
            <Logo />
            <Navigation contents={contents} />
            <ProfileAndGitLink />
        </nav>
    </header>
);

export default HeaderPresentation;
