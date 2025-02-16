import Button from "@/components/ui/Button/button";
import Link from "next/link";

type Props = {
    page: number;
    category?: string;
    currentPage: number;
};

export const PaginationButton = ({ page, currentPage, category }: Props) => (
    <Link href={`/${category}/page/${page}`}>
        <Button className={page === currentPage ? "currentPage" : "otherPages"}>{page}</Button>
    </Link>
);
