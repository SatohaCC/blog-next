import ArticleList from "@/components/features/ArticleList";
import Pagination from "@/components/features/Pagination/pagination";
import { getList, getPaths } from "@/lib/microcms";
import { PER_PAGE, siteName } from "@/lib/siteInfo";
import { Metadata } from "next/types";

export const revalidate = 3600;

export async function generateStaticParams() {
    const { totalCount } = await getList();
    return getPaths({ totalCount });
}
// メタデータの追加
export const generateMetadata = async (props: {
    params: Promise<{ page: string }>;
}): Promise<Metadata> => {
    const params = await props.params;
    return {
        title: `${siteName} - 記事一覧 - ${params.page}`,
        description: `${siteName} の記事一覧ページです。${params.page}ページ目を表示しています。`,
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

    return (
        <>
            <ArticleList contents={contents} />
            <Pagination totalCount={totalCount} currentPage={id} />
        </>
    );
}
