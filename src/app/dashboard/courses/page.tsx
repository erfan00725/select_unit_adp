import DataTable from "@/components/ui/DataTable";
import { CourseTableConfig } from "@/constants/testdata";
import React from "react";
import PageHeader from "@/components/ui/PageHeader";
import { urls } from "@/constants/urls";

const CoursesPage = () => {
  return (
    <div className="container">
      <PageHeader
        title="Course Management"
        description="Manage and organize course information"
      />
      <DataTable
        tableData={CourseTableConfig}
        title="Course Management"
        addButtonLabel="Add New Course"
        addUrl={urls.courses + "/add"}
        deleteBaseUrl="/"
        editBaseUrl="/"
      />
    </div>
  );
};

export default CoursesPage;
