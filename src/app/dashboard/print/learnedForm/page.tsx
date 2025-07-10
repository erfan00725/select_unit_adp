import Loading from "@/components/common/Loading";
import { Printbutton } from "@/components/ui/common/Printbutton";
import LearnedFormFetch from "@/components/ui/pages/selectUnit/print/LearnedFormFetch";
import React, { Suspense } from "react";

async function page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const params = await searchParams;
  const selectUnits = params.studentIds?.split(",") || [];
  return (
    <div>
      <div className="flex justify-between items-center w-full print:hidden mb-4 card">
        <h2 className="text-xl font-bold">چاپ درخواست انتخاب واحد‌ها </h2>
        <Printbutton />
      </div>
      {selectUnits.map((unitId, index) => (
        <div className={`mb-6 page-break`} key={index}>
          <Suspense fallback={<Loading />}>
            <LearnedFormFetch id={unitId} key={index} />
          </Suspense>
        </div>
      ))}
    </div>
  );
}

export default page;
