import Loading from "@/components/common/Loading";
import Printbutton from "@/components/ui/common/Printbutton";
import { DetailPage } from "@/components/ui/pages/common/DetailPage";
import SelectUnitPrintAlt from "@/components/ui/pages/selectUnit.ts/SelectUnitPrintAlt";
import { PageType } from "@/types/General";
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
        <h2 className="text-xl font-bold">چاپ درخواست انتخاب واحد‌ها </h2>
        <Printbutton />
      </div>
      {selectUnits.map((unitId, index) => (
        <div className={`mb-6 page-break`} key={index}>
          <Suspense fallback={<Loading />}>
            <SelectUnitPrintAlt id={unitId} key={index} />
          </Suspense>
        </div>
      ))}
    </div>
  );
}

export default page;
