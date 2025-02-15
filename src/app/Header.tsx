import { css } from "../../styled-system/css";
import { Box } from "../../styled-system/jsx";
import { MENU_REVALIDATE } from "../lib/siteInfo";

export const revalidate = MENU_REVALIDATE;

const Header = async () => {
    // const { contents } = await getMenu();
    return (
        <header
            className={css({
                position: "sticky",
                top: 0,
                w: "100%",
                zIndex: 200,
                bg: "white",
            })}
        >
            <Box
                className={css({
                    borderBottomWidth: "1px",
                    borderBottomColor: "gray.200",
                    maxW: "1280px",
                    margin: "0 auto",
                })}
            >
                <Box>ヘッダーテスト</Box>
            </Box>
        </header>
    );
};

export default Header;
