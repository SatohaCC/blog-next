import Link from "@/components/ui/Link/link";
import Image from "next/image";

import { css } from "styled-system/css";

const ProfileAndGitLink = () => {
    return (
        <div
            className={css({
                flex: 1,
                textAlign: "right",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
            })}
        >
            <Link href="/profile">
                <div className={css({ pr: "2" })}>Profile</div>
            </Link>
            <Link
                href="https://github.com/SatohaCC/blog-next"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image src="/github-mark.svg" alt="icon" width={20} height={20} />
            </Link>
        </div>
    );
};

export default ProfileAndGitLink;
