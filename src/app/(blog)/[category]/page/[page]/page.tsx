import ArticleList from "@/components/features/ArticleList";
import Pagination from "@/components/features/Pagination/pagination";
import { getList, getMenu, getPaths } from "@/lib/microcms";
import { PER_PAGE, siteName } from "@/lib/siteInfo";
import { Metadata } from "next/types";

export const revalidate = 3600;

export async function generateStaticParams() {
    const { contents, totalCount } = await getMenu();
    return getPaths({ contents, totalCount });
}

// メタデータの追加
export const generateMetadata = async (props: {
    params: Promise<{ category: string; page: string }>;
}): Promise<Metadata> => {
    const params = await props.params;
    return {
        title: `${siteName} - ${params.category}- ${params.page}`,
        description: `${siteName} の ${params.category}記事一覧ページです。${params.page}ページ目を表示しています。`,
    };
};

type Props = {
    params: Promise<{ category: string; page: string }>;
};

export default async function PageIndex(props: Props) {
    const params = await props.params;

    const { category, page } = params;

    const id = parseInt(page);
    const { contents, totalCount } = await getList({
        offset: (id - 1) * PER_PAGE,
        limit: PER_PAGE,
        filters: `categories[contains]${category}`,
    });

    return (
        <>
            <ArticleList contents={contents} />
            <Pagination totalCount={totalCount} currentPage={id} category={category} />
        </>
    );
}
