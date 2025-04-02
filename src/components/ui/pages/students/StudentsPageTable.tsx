import React from "react";
import DataTable from "../../DataTable";
import { urls } from "@/constants/urls";
import { getStudents } from "@/lib/actions";
import { PageTableProps } from "@/types/Props";
import { errorCheck } from "@/lib/errorCheck";

const StudentsPageTable = async ({ limit }: PageTableProps) => {
  const studentsData = await getStudents();
  errorCheck(studentsData.error);

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
