import { client, getBlogPost } from "@/lib/microcms";
import dayjs from "dayjs";
import { processer } from "microcms-richedit-processer";
import { Metadata } from "next/types";

import { siteName } from "@/lib/siteInfo";
import BlogPostPresentation from "../../../../components/features/Article/article";

export const revalidate = 86400;

// 静的パスを生成
export async function generateStaticParams() {
    const contentIds = await client.getAllContentIds({ endpoint: "articles" });

    return contentIds.map((contentId) => ({
        id: contentId, // 各記事のIDをパラメータとして返す
    }));
}
// メタデータの追加
export const generateMetadata = async (props: {
    params: Promise<{ id: string }>;
}): Promise<Metadata> => {
    const params = await props.params;
    return {
        title: `${siteName}  - ${params.id}`,
        description: `${siteName}  - ${params.id}の記事ページです。`,
    };
};

// 記事詳細ページの生成
export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params; // IDを取得

    const content = await getBlogPost(id);

    const publishedAt = dayjs(content.publishedAt).format("YYYY.MM.DD");
    const updatedAt = dayjs(content.updatedAt).format("YYYY.MM.DD");

    const newContent = await processer(content.body, {
        code: { enabled: true },
        img: { lazy: false }, // srcのままにする設定。trueだとdata-srcに変換されてしまう。
    });

    return (
        <BlogPostPresentation
            title={content.title}
            publishedAt={publishedAt}
            updatedAt={updatedAt}
            summary={content.summary || ""}
            body={newContent}
        />
    );
}
