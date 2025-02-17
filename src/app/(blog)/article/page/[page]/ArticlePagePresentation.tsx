import ArticleList from "@/components/features/ArticleList";
import Pagination from "@/components/features/Pagination/pagination";
import { ArticleType } from "@/lib/types";

type Props = {
    contents: ArticleType[];
    totalCount: number;
    currentPage: number;
};

const ArticlePagePresentation = ({ contents, totalCount, currentPage }: Props) => {
    return (
        <>
            <ArticleList contents={contents} />
            <Pagination totalCount={totalCount} currentPage={currentPage} />
        </>
    );
};

export default ArticlePagePresentation;
