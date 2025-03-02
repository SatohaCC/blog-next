import ArticleList from "@/components/features/ArticleList/ArticleList";
import Pagination from "@/components/features/Pagination/pagination";
import { getList } from "@/lib/microcms";
import { PER_PAGE } from "@/lib/siteInfo";

export const revalidate = 3600;

export default async function Home() {
    try {
        const { contents, totalCount } = await getList({ limit: PER_PAGE, offset: 0 });

        return (
            <>
                <ArticleList contents={contents} />
                <Pagination totalCount={totalCount} currentPage={1} />
            </>
        );
    } catch (error) {
        throw error; // エラーを上位のerror.tsxにバブルアップ
    }
}
