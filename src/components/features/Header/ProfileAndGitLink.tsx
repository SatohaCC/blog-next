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
                gap: "2",
            })}
        >
            <Link href="/profile">Profile</Link>
            <Link
                href="https://github.com/SatohaCC/blog-next"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image src="/github-mark.svg" alt="github-icon" width={24} height={24} />
            </Link>
        </div>
    );
};

export default ProfileAndGitLink;
