import Loading from "@/components/common/Loading";
import { Printbutton } from "@/components/ui/common/Printbutton";
import SelectUnitPrint from "@/components/ui/pages/selectUnit/print/SelectUnitPrint";
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
      <div className="flex justify-between items-center w-full print:hidden mb-4 print:m-0 card">
        <h2 className="text-xl font-bold">چاپ انتخاب واحد‌ها</h2>
        <Printbutton />
      </div>
      {selectUnits.map((unitId, index) => (
        <div className={`mb-6 last:mb-0 print:m-0 page-break`} key={index}>
          <Suspense fallback={<Loading />}>
            <SelectUnitPrint id={unitId} />
          </Suspense>
          <div className="printElement print:flex! flex-row justify-between text-[9px]">
            <span>امضای دانش‌آموز:</span>
            <span>امضای مشاور:</span>
            <span>امضای مدیر:</span>
            <span>ثبت رایانه شد مسئول رایانه:</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default page;
