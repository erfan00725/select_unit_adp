import React from "react";
import PageHeader from "@/components/ui/PageHeader";
import StudentsPageTable from "@/components/ui/pages/students/StudentsPageTable";
import SearchFilterBar from "@/components/ui/SearchFilterBar";
import Pagination from "@/components/ui/Pagination";
import { urls } from "@/constants/urls";
import { getStudents } from "@/lib/actions";
import { FilterOptionType, Orders } from "@/types/General";

type Props = {
  searchParams: Promise<{ [key: string]: string | undefined }>;
};

const StudentsPage = async ({ searchParams }: Props) => {
  const params = await searchParams;
  const { page, q, from, to, order, grade } = params;
  const students = await getStudents({
    page: page ? Number(page) : 1,
    limit: 10,
    query: q,
    from: from ? new Date(from) : undefined,
    to: to ? new Date(to) : undefined,
    order: order ? (order as Orders) : "asc",
  });
  const pageLimit = students.pagination?.limit || 10;

  const filterOptions: FilterOptionType[] = [
    {
      name: "grade",
      type: "select",
      placeholder: "Select grade",
      options: [
        { label: "Grade 1", value: "GRADE1" },
        { label: "Grade 2", value: "GRADE2" },
        { label: "Grade 3", value: "GRADE3" },
      ],
    },
  ];

  return (
    <div>
      <PageHeader
        title="Student Management"
        description="Manage and organize student information"
      />
      <SearchFilterBar
        resultsCount={students.pagination?.total}
        filterOptions={filterOptions}
        searchPlaceholder="Search students, national code, etc"
      />
      <StudentsPageTable studentsData={students} limit={pageLimit} />
      <Pagination
        currentPage={page ? Number(page) : 1}
        itemsPerPage={pageLimit}
        totalItems={students.pagination?.total || 0}
        baseUrl={urls.students}
      />
    </div>
  );
};

export default StudentsPage;
