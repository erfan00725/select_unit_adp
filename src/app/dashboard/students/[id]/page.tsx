import React, { Suspense } from "react";
import PageHeader from "@/components/ui/PageHeader";
import { StudentInfoPage } from "@/components/ui/pages/students/StudentInfoPage";
import Loading from "@/components/common/Loading";
import { getStudentById } from "@/lib/actions";
import { notFound } from "next/navigation";

const StudentDetailPage = async ({ params }: { params: { id: string } }) => {
  const studentData = await getStudentById(BigInt(params.id));

  if (!studentData.student) {
    return notFound();
  }

  return (
    <div>
      <PageHeader title="Students Info" />
      <Suspense fallback={<Loading />}>
        <StudentInfoPage studentData={studentData} />
      </Suspense>
    </div>
  );
};

export default StudentDetailPage;
