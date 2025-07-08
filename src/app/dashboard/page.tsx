import React, { Suspense } from "react";
import PageHeader from "@/components/ui/common/PageHeader";
import DashboardLessonsFetch from "@/components/ui/pages/DashboardLessonsFetch";
import Loading from "@/components/common/Loading";
import DashboardStudentFetch from "@/components/ui/pages/DashboardStudentsFetch";

export default async function DashboardPage() {
  return (
    <div>
      <PageHeader
        title="مدیریت دانش‌آموزان و دروس"
        description="مدیریت اطلاعات دانش‌آموزان و دروس"
      />
      <Suspense fallback={<Loading />}>
        <DashboardStudentFetch />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <DashboardLessonsFetch />
      </Suspense>
    </div>
  );
}
