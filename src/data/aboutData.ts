import { iconType } from "@/lib/types";
import { FaGithub, FaTwitter } from "react-icons/fa";

export const aboutData = [
    {
        id: 1,
        text: "Qiita書くレベルじゃないのでアウトプットする用にブログ作ってみました。",
    },
    {
        id: 2,
        text: "Next.js楽しい！",
    },
    {
        id: 3,
        text: "GitHubはPrivateばっかり。",
    },
];

export const iconsData: iconType[] = [
    {
        id: 1,
        title: "twitter-icon",
        url: "https://twitter.com/SatohaCC",
        icon: FaTwitter,
    },
    {
        id: 2,
        title: "github-icon",
        url: "https://github.com/SatohaCC",
        icon: FaGithub,
    },
];
