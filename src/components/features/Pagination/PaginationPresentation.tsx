import { Center, HStack } from "styled-system/jsx";

import PaginationLink from "./PaginationLink";

type Props = {
    topPage: number;
    lastPage: number;
    pageList: number[];
    currentPage: number;
    category: string;
};

const PaginationPresentation = ({ topPage, lastPage, pageList, currentPage, category }: Props) => {
    return (
        <Center p={5}>
            <HStack>
                <PaginationLink page={topPage} currentPage={currentPage} category={category} />
                {lastPage > 1 && currentPage > 3 && <div>・・・</div>}
                {pageList.map((page, index) => (
                    <PaginationLink
                        key={index}
                        page={page}
                        currentPage={currentPage}
                        category={category}
                    />
                ))}
                {lastPage > 1 && currentPage < lastPage - 2 && <div>・・・</div>}
                {lastPage > 1 && (
                    <PaginationLink page={lastPage} currentPage={currentPage} category={category} />
                )}
            </HStack>
        </Center>
    );
};

export default PaginationPresentation;
