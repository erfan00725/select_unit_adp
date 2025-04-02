import React, { Suspense } from "react";
import PageHeader from "@/components/ui/PageHeader";
import Loading from "@/components/common/Loading";
import StudentsPageTable from "@/components/ui/pages/students/StudentsPageTable";

const StudentsPage = () => {
  return (
    <div>
      <PageHeader
        title="Student Management"
        description="Manage and organize student information"
      />
      <Suspense fallback={<Loading />}>
        <StudentsPageTable />
      </Suspense>
    </div>
  );
};

export default StudentsPage;
