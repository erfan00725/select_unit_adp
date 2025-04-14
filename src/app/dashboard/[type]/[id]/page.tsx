import React, { Suspense } from "react";
import PageHeader from "@/components/ui/PageHeader";
import Loading from "@/components/common/Loading";
import { deleteLesson, deleteStudent } from "@/lib/actions";
import DeleteConfirm from "@/components/ui/DeleteConfirm";
import { urls } from "@/constants/urls";
import { PageType } from "@/types/General";
import { DetailPage } from "@/components/ui/pages/common/DetailPage";

const LessonDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string; type: PageType }>;
}) => {
  const paramsRes = await params;
  const id = paramsRes.id;
  const type = paramsRes.type;

  let deleteConfig;
  let title;

  switch (type) {
    case PageType.Lesson:
      title = "Lesson Info";
      deleteConfig = {
        deleteFounction: deleteLesson,
        backUrl: urls.lessons,
      };
      break;
    case PageType.Student:
      title = "Student Info";
      deleteConfig = {
        deleteFounction: deleteStudent,
        backUrl: urls.students,
      };
      break;
    default:
      deleteConfig = null;
      title = null;
      break;
  }

  return (
    <div>
      {title && <PageHeader title={title} />}
      {deleteConfig && <DeleteConfirm id={id} {...deleteConfig} />}
      <Suspense fallback={<Loading />}>
        <DetailPage id={id} type={type} />
      </Suspense>
    </div>
  );
};

export default LessonDetailPage;
