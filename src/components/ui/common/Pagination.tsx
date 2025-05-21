"use client";
import React from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useSearchParams } from "@/lib/hooks/useSeachParams";

export interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange?: (page: number) => void;
  baseUrl?: string;
  className?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
  className,
}) => {
  const { setSearchParam, getSearchParam } = useSearchParams();

  // Calculate the range of items being displayed
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];

    // Always show first page
    if (currentPage >= 3) {
      pages.push(1);
      if (currentPage >= 4) {
        pages.push("...");
      }
    }

    // Calculate range of pages to show around current page
    const startPage = Math.max(1, currentPage - 1);
    const endPage = Math.min(totalPages, currentPage + 1);

    // Add pages around current page
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    // Always show last page
    if (currentPage <= totalPages - 2) {
      if (currentPage <= totalPages - 3) {
        pages.push("...");
      }
      pages.push(totalPages);
    }

    return pages;
  };

  // Handle page change
  const handlePageChange = (page: number) => {
    const currentPage = getSearchParam("page") || "1";
    if (page !== Number(currentPage)) setSearchParam("page", page.toString());
    if (onPageChange) {
      onPageChange(page);
    }
  };

  return (
    <div className={clsx("flex flex-col items-center space-y-2", className)}>
      {/* Range info */}
      <div className="text-sm text-gray-600">
        {totalItems === 0
          ? "هیچ داده‌ای وجود ندارد"
          : `نمایش ${startItem} تا ${endItem} از ${totalItems} مورد`}
      </div>
      {/* Pagination controls */}
      <nav
        className="flex items-center space-x-2 rtl:space-x-reverse"
        aria-label="صفحه‌بندی"
      >
        {/* Previous button */}
        <button
          className="px-3 py-1 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 cursor-pointer disabled:cursor-default disabled:opacity-50"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="صفحه قبل"
          type="button"
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
        {/* Page numbers */}
        {getPageNumbers().map((page, idx) =>
          typeof page === "number" ? (
            <button
              key={idx}
              className={clsx(
                "px-3 py-1 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 cursor-pointer",
                {
                  "bg-indigo-600 text-white border-indigo-600 hover:bg-indigo-700":
                    page === currentPage,
                }
              )}
              onClick={() => handlePageChange(page)}
              aria-current={page === currentPage ? "page" : undefined}
              type="button"
            >
              {page}
            </button>
          ) : (
            <span key={idx} className="px-2 text-gray-400">
              ...
            </span>
          )
        )}
        {/* Next button */}
        <button
          className="px-3 py-1 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 cursor-pointer disabled:cursor-default disabled:opacity-50"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages || totalPages === 0}
          aria-label="صفحه بعد"
          type="button"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </nav>
    </div>
  );
};

export default Pagination;
