import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";

// MicroCMSの型定義
export type ArticleType = {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    title: string;
    summary: string | null;
    body: string;
    categories: CategoriesEntity[];
    img?: Img | null;
};

export type CategoriesEntity = {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    label: string;
    subLabel?: string | null;
    href: string;
};

type Img = {
    url: string;
    height: number;
    width: number;
};

export type ParentCategoriesEntity = {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    label: string;
    href: string;
    children?: CategoriesEntity[];
};

export type iconType = {
    id: number;
    title: "twitter" | "github";
    url: string;
    icon: unknown; // TODO: 型をつける
};

export type portfolioType = {
    title: string;
    url: string;
    linkType: string;
    text: string[];
};

export type HeaderProps = (ParentCategoriesEntity & MicroCMSContentId & MicroCMSDate)[];
