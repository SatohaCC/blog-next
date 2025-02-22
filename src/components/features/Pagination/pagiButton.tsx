import Link from "@/components/ui/Link/link";
import Text from "@/components/ui/Text/text";
type Props = {
    page: number;
    category?: string;
    currentPage: number;
};

export const PaginationButton = ({ page, currentPage, category }: Props) => {
    const buttonStyle = page === currentPage ? "currentPage" : "otherPages";
    return (
        <Link href={`/${category}/page/${page}`}>
            <Text visual={buttonStyle}>{page}</Text>
        </Link>
    );
};
