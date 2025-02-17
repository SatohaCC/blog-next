import Button from "@/components/ui/Button/button";
import Link from "next/link";

type Props = {
    page: number;
    category?: string;
    currentPage: number;
};

export const PaginationButton = ({ page, currentPage, category }: Props) => {
    const buttonStyle = page === currentPage ? "currentPage" : "otherPages";
    return (
        <Link href={`/${category}/page/${page}`}>
            <Button visual={buttonStyle}>{page}</Button>
        </Link>
    );
};
