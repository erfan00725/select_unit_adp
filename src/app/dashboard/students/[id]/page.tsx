import React, { Suspense } from "react";
import PageHeader from "@/components/ui/PageHeader";
import { StudentInfoPage } from "@/components/ui/pages/students/StudentInfoPage";
import Loading from "@/components/common/Loading";
import { deleteStudent, getStudentById } from "@/lib/actions";
import { notFound } from "next/navigation";
import DeleteConfirm from "@/components/ui/DeleteConfirm";
import { urls } from "@/constants/urls";

const StudentDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const paramsRes = await params;
  const id = paramsRes.id;

  const studentData = await getStudentById(BigInt(id));

  if (!studentData.student) {
    return notFound();
  }

  return (
    <div>
      <PageHeader title="Student Info" />
      <DeleteConfirm
        id={id}
        deleteFounction={deleteStudent}
        backUrl={urls.students}
      />
      <Suspense fallback={<Loading />}>
        <StudentInfoPage studentData={studentData} />
      </Suspense>
    </div>
  );
};

export default StudentDetailPage;
