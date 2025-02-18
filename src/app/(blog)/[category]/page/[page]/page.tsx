import ArticleList from "@/components/features/ArticleList/ArticleList";
import Pagination from "@/components/features/Pagination/pagination";
import { getList, getMenu, getPaths } from "@/lib/microcms";
import { PER_PAGE } from "@/lib/siteInfo";

export async function generateStaticParams() {
    const { contents, totalCount } = await getMenu();
    return getPaths({ contents, totalCount });
}

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
