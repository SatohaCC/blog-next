import { Metadata } from "next/types";

import { getList, getPaths } from "@/lib/microcms";
import { PER_PAGE } from "../../../../../lib/siteInfo";
import ArticlePagePresentation from "./ArticlePagePresentation";

export async function generateStaticParams() {
    const { totalCount } = await getList();
    return getPaths({ totalCount });
}
// メタデータの追加
export const generateMetadata = async ({
    params,
}: {
    params: { page: string };
}): Promise<Metadata> => {
    return {
        title: `記事一覧 - ページ${params.page}`,
        description: `ブログの記事一覧ページです。${params.page}ページ目を表示しています。`,
    };
};

type Props = {
    params: Promise<{ page: string }>;
};

export default async function PageIndex(props: Props) {
    const params = await props.params;

    const { page } = params;

    const id = parseInt(page);
    const { contents, totalCount } = await getList({
        offset: (id - 1) * PER_PAGE,
        limit: PER_PAGE,
    });

    return <ArticlePagePresentation contents={contents} totalCount={totalCount} currentPage={id} />;
}
