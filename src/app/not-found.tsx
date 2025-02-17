import Button from "@/components/ui/Button/button";
import Link from "next/link";

import { css } from "styled-system/css";
import { Box } from "styled-system/jsx";

const style = css({
    color: "textColor",
});

const NotFound = () => {
    return (
        <Box textAlign="center" py={10} px={6}>
            <h1 className={style}>404</h1>
            <h2 className={style}>Page Not Found</h2>
            <p className={style}>The page you&apos;re looking for does not seem to exist</p>
            <div className={css({ padding: "4" })} />
            <Link href={"/"}>
                <Button visual="solid">Go to Home</Button>
            </Link>
        </Box>
    );
};

export default NotFound;
