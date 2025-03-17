import clsx from "clsx";
import "./Pagination.scss"

import { FC, useState } from 'react';

interface IPagination {
    totalItems: number,
    setItemsShown: (n: number) => void
}

const Pagination: FC<IPagination> = ({ totalItems, setItemsShown }) => {
    const itemsPerPage = 3;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        setItemsShown(page * itemsPerPage)
    };

    const getPageNumbers = () => {
        const pageNumbers = [];
        const startPage = Math.max(1, currentPage - itemsPerPage);
        const endPage = Math.min(totalPages, startPage + 6);

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

        return pageNumbers;
    };

    return (
        <div className="pagination">
            <div className="pagination__container">
                {getPageNumbers().map((number) => (
                    <button
                        className={clsx("pagination__item", number === currentPage && "pagination__item--active")}
                        key={number}
                        onClick={() => handlePageChange(number)}
                    >
                        {number}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Pagination;