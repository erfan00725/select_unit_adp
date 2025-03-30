import DataTable from "@/components/ui/DataTable";
import { StudentTableConfig } from "@/constants/testdata";
import React from "react";
import PageHeader from "@/components/ui/PageHeader";
import { urls } from "@/constants/urls";

const StudentsPage = () => {
  return (
    <div className="container">
      <PageHeader
        title="Student Management"
        description="Manage and organize student information"
      />
      <DataTable
        tableData={StudentTableConfig}
        title="Student Management"
        addButtonLabel="Add New Student"
        addUrl={urls.students + "/add"}
        deleteBaseUrl="/"
        editBaseUrl="/"
      />{" "}
    </div>
  );
};

export default StudentsPage;
