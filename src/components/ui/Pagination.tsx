import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
  baseUrl,
  className,
}) => {
  // Calculate the range of items being displayed
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  // Log pagination parameters
  console.log("Pagination Parameters:", {
    currentPage,
    totalItems,
    itemsPerPage,
    startItem,
    endItem,
    totalPages,
    baseUrl,
    className,
    hasOnPageChange: !!onPageChange,
  });

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5; // Show at most 5 page numbers

    // Always show first page
    if (currentPage > 3) {
      pages.push(1);
      if (currentPage > 4) {
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
    if (currentPage < totalPages - 2) {
      if (currentPage < totalPages - 3) {
        pages.push("...");
      }
      pages.push(totalPages);
    }

    return pages;
  };

  // Handle page change
  const handlePageChange = (page: number) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  // Render page link or button
  const renderPageLink = (
    page: number | string,
    label?: string | React.ReactElement
  ) => {
    const isCurrentPage = page === currentPage;
    const isDisabled = typeof page === "string"; // For ellipsis

    // For ellipsis
    if (isDisabled) {
      return <span className="px-3 py-2 text-gray-500">{label || page}</span>;
    }

    // If using server-side navigation with URLs
    if (baseUrl) {
      return (
        <Link
          href={`${baseUrl}?page=${page}`}
          className={clsx(
            "px-3 py-2 rounded-md",
            isCurrentPage
              ? "bg-black text-white"
              : "text-gray-700 hover:bg-gray-200"
          )}
          aria-current={isCurrentPage ? "page" : undefined}
        >
          {label || page}
        </Link>
      );
    }
  };

  return (
    <div
      className={clsx(
        "flex flex-col sm:flex-row sm:items-center sm:justify-between py-3",
        className
      )}
    >
      <div className="text-sm text-gray-700 mb-2 sm:mb-0">
        Showing <span className="font-medium">{startItem}</span> to{" "}
        <span className="font-medium">{endItem}</span> of{" "}
        <span className="font-medium">{totalItems}</span> results
      </div>

      <nav className="flex items-center space-x-1">
        {/* Previous page button */}
        {currentPage <= 1 ||
          renderPageLink(
            currentPage > 1 ? currentPage - 1 : currentPage,
            <FontAwesomeIcon icon={faArrowLeft} />
          )}

        {/* Page numbers */}
        {getPageNumbers().map((page, index) => (
          <React.Fragment key={index}>{renderPageLink(page)}</React.Fragment>
        ))}

        {/* Next page button */}
        {currentPage >= totalPages ||
          renderPageLink(
            currentPage < totalPages ? currentPage + 1 : currentPage,
            <FontAwesomeIcon icon={faArrowRight} />
          )}
      </nav>
    </div>
  );
};

export default Pagination;
