import Loading from "@/components/common/Loading";
import SelectUnitPrintForm from "@/components/ui/pages/selectUnit/SelectUnitPrintForm";
import { Suspense } from "react";

const PrintPage = async () => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <SelectUnitPrintForm id="4" />
      </Suspense>
    </div>
  );
};

export default PrintPage;
