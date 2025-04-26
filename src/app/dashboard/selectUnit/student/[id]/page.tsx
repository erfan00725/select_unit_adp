import React, { Suspense } from "react";
import StudentInfoCard from "@/components/ui/StudentInfoCard";
import { SelectUnitFormFetch } from "@/components/ui/pages/selectUnit.ts/SelectUnitFormFetch";
import Loading from "@/components/common/Loading";
import PageHeader from "@/components/ui/PageHeader";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | undefined }>;
};

const AddSelectUnitPage = async ({ params, searchParams }: Props) => {
  const id = (await params).id;

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="انتخاب واحد"
        description="از میان دوره‌های موجود انتخاب کنید"
      />

      {/* Student Information Card */}
      <Suspense fallback={<Loading />}>
        <StudentInfoCard studentId={id} />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <SelectUnitFormFetch studnetId={id} />
      </Suspense>
    </div>
  );
};

export default AddSelectUnitPage;
