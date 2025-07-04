import Loading from "@/components/common/Loading";
import { Printbutton } from "@/components/ui/common/Printbutton";
import SelectUnitPrintForm from "@/components/ui/pages/selectUnit/SelectUnitPrintForm";
import React, { Suspense } from "react";

async function page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const params = await searchParams;
  const selectUnits = params.selectUnitIds?.split(",") || [];
  return (
    <div>
      <div className="flex justify-between items-center w-full print:hidden mb-4 card">
        <h2 className="text-xl font-bold">چاپ فرم پرداخت شهریه </h2>
        <Printbutton />
      </div>
      {selectUnits.map((unitId, i) => (
        <div className={`mb-6 page-break`} key={i}>
          <Suspense fallback={<Loading />}>
            <SelectUnitPrintForm id={unitId} key={i} />
          </Suspense>
        </div>
      ))}
    </div>
  );
}

export default page;
