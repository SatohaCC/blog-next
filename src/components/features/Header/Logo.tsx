import { siteName } from "@/lib/siteInfo";
import { css } from "styled-system/css";

const Logo = () => {
    return <div className={css({ fontSize: "2xl", fontWeight: "bold" })}>{siteName}</div>;
};

export default Logo;
