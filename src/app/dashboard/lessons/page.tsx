import React from "react";
import PageHeader from "@/components/ui/PageHeader";
import LessonsPageTable from "@/components/ui/pages/Lessons/LessonsPageTable";
import SearchFilterBar from "@/components/ui/SearchFilterBar";
import Pagination from "@/components/ui/Pagination";
import { urls } from "@/constants/urls";
import { getLessons } from "@/lib/actions";
import { FilterOptionType, Orders } from "@/types/General";

type Props = {
  searchParams: Promise<{ [key: string]: string | undefined }>;
};

const LessonsPage = async ({ searchParams }: Props) => {
  const params = await searchParams;
  const { page, q, from, to, order, unit } = params;
  const lessons = await getLessons({
    page: page ? Number(page) : 1,
    limit: 10,
    query: q,
    from: from ? new Date(from) : undefined,
    to: to ? new Date(to) : undefined,
    order: order ? (order as Orders) : "asc",
    unit,
  });
  const pageLimit = lessons.pagination?.limit || 10;

  const filterOptions: FilterOptionType[] = [
    {
      name: "unit",
      type: "number",
      placeholder: "Enter unit",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Lessons Management"
        description="Manage and organize lesson information"
      />
      <SearchFilterBar
        resultsCount={lessons.pagination?.total}
        filterOptions={filterOptions}
        searchPlaceholder="Search lessons, teachers, etc"
      />
      <LessonsPageTable lessonsData={lessons} limit={pageLimit} />
      <Pagination
        currentPage={page ? Number(page) : 1}
        itemsPerPage={pageLimit}
        totalItems={lessons.pagination?.total || 1}
        baseUrl={urls.lessons}
      />
    </div>
  );
};

export default LessonsPage;
