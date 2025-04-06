import React, { Suspense } from "react";
import PageHeader from "@/components/ui/PageHeader";
import Loading from "@/components/common/Loading";
import { deleteLesson, getLessonById } from "@/lib/actions";
import { notFound } from "next/navigation";
import { LessonInfoPage } from "@/components/ui/pages/Lessons/LessonInfoPage";
import DeleteConfirm from "@/components/ui/DeleteConfirm";
import { urls } from "@/constants/urls";

const LessonDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const paramsRes = await params;
  const id = paramsRes.id;

  const lessonData = await getLessonById(BigInt(id));

  if (!lessonData.lesson) {
    return notFound();
  }

  return (
    <div>
      <PageHeader title="Lesson Info" />
      <DeleteConfirm
        id={id}
        deleteFounction={deleteLesson}
        backUrl={urls.lessons}
      />
      <Suspense fallback={<Loading />}>
        <LessonInfoPage lessonData={lessonData} />
      </Suspense>
    </div>
  );
};

export default LessonDetailPage;
