import { css } from "styled-system/css";
import { Box } from "styled-system/jsx";

type Props = {
    children: React.ReactNode;
};

const Main = ({ children }: Props) => {
    return (
        <Box
            className={css({
                maxW: "1280px",
                px: "10",
                py: "5",
                margin: "0 auto",
            })}
        >
            <main>{children}</main>
        </Box>
    );
};

export default Main;
