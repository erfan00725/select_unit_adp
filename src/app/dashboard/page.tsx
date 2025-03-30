import React from "react";
import DataTable from "@/components/ui/DataTable";
import PageHeader from "@/components/ui/PageHeader";
import { CourseTableConfig, StudentTableConfig } from "@/constants/testdata";

export default function DashboardPage() {
  return (
    <div className="container">
      <PageHeader
        title="Student & Course Management"
        description="Manage students and courses information"
      />

      {/* Student Management Section */}
      <DataTable
        tableData={StudentTableConfig}
        title="Student Management"
        addButtonLabel="Add New Student"
        addUrl="/"
        deleteBaseUrl="/"
        editBaseUrl="/"
      />
      {/* Course Management Section */}
      <DataTable
        tableData={CourseTableConfig}
        title="Course Management"
        addButtonLabel="Add New Course"
        addUrl="/"
        deleteBaseUrl="/"
        editBaseUrl="/"
        limit={5}
      />
    </div>
  );
}
