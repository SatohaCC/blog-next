import ArticleList from "@/components/features/ArticleList";
import Pagination from "@/components/features/Pagination/pagination";
import { getList } from "@/lib/microcms";
import { PER_PAGE } from "@/lib/siteInfo";

export const dynamic = "force-static";

export default async function Home() {
    const { contents, totalCount } = await getList({ limit: PER_PAGE, offset: 0 });

    return (
        <>
            <ArticleList contents={contents} />
            <Pagination totalCount={totalCount} currentPage={1} />
        </>
    );
}
