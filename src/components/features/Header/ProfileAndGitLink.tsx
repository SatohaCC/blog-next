import Link from "@/components/ui/Link/link";
import Image from "next/image";

import { css } from "styled-system/css";

const ProfileAndGitLink = () => {
    return (
        <ul
            className={css({
                flex: 1,
                textAlign: "right",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "2",
                listStyle: "none",
                padding: 0,
                margin: 0,
            })}
        >
            <li>
                <Link href="/profile" ariaLabel="プロフィールへのリンク">
                    Profile
                </Link>
            </li>
            <li>
                <Link
                    href="https://github.com/SatohaCC/blog-next"
                    target="_blank"
                    rel="noopener noreferrer"
                    ariaLabel="このサイトのGitHubリポジトリへのリンク"
                >
                    <Image
                        src="/github-mark.svg"
                        alt="github-icon"
                        width={24}
                        height={24}
                        className={css({
                            display: "inline-block",
                            _focusVisible: {
                                outline: "2px solid",
                                outlineColor: "blue.500",
                                outlineOffset: "2px",
                                borderRadius: "sm",
                            },
                        })}
                    />
                </Link>
            </li>
        </ul>
    );
};

export default ProfileAndGitLink;
