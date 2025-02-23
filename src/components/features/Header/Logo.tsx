import Link from "@/components/ui/Link/link";
import { siteName } from "@/lib/siteInfo";
import { css } from "styled-system/css";

const Logo = () => {
    return (
        <div className={css({ flex: 1, fontSize: { base: "lg", md: "2xl" }, fontWeight: "bold" })}>
            <Link href="/" ariaLabel="Homeへのリンク">
                {siteName}
            </Link>
        </div>
    );
};

export default Logo;
