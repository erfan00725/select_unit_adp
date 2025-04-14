import React from "react";
import { urls } from "@/constants/urls";
import { getStudents } from "@/lib/actions";
import { PageTableProps } from "@/types/Props";
import { errorCheck } from "@/lib/errorCheck";
import DataTable from "@/components/ui/DataTable";

type Props = {
  studentsData: Awaited<ReturnType<typeof getStudents>>;
};

const StudentsPageTable = async ({
  limit,
  studentsData,
}: Props & PageTableProps) => {
  errorCheck(studentsData?.error);

  const students = studentsData.students;
  const tableData = (students || []).map((student) => ({
    id: student.id,
    FirstName: student.FirstName,
    LastName: student.LastName,
    NationalCode: student.NationalCode,
    Field: student.field.Name,
    Grade: student.Grade,
    PhoneNumber: student.PhoneNumber,
  }));

  const headers = [
    "ID",
    "First Name",
    "Last Name",
    "National Code",
    "Field",
    "Grade",
    "Phone Number",
  ];

  return (
    <DataTable
      tableData={tableData}
      headers={headers}
      title="Student Management"
      addButtonLabel="Add New Student"
      addUrl={urls.students + "/add"}
      baseUrl={urls.students}
      limit={limit}
    />
  );
};

export default StudentsPageTable;
