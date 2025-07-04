import DetailInfoCard from "@/components/ui/DetailPage/ProductInfoCard";
import { SelectUnitDetailConfig } from "@/constants/configs/DetailPageConfigs";
import { getSelectUnitById } from "@/lib/actions";
import React from "react";

type Props = {
  id: string;
};

const SelectUnitPrint = async ({ id }: Props) => {
  const data = await getSelectUnitById(id);
  const detailConfig = SelectUnitDetailConfig(data, true);

  if (detailConfig.error || !detailConfig.config || data.error) {
    return (
      <span className="print:hidden block text-center">مشکلی پیش آمد!</span>
    );
  }
  return (
    <div className="print:max-w-none print:m-0 print:p-4 print:bg-white print:text-black">
      <DetailInfoCard
        {...detailConfig.config}
        actions={undefined}
        canEdit={false}
      />
      {detailConfig.children}
    </div>
  );
};

export default SelectUnitPrint;
