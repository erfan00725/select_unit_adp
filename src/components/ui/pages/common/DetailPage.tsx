import React from "react";
import DetailInfoCard from "../../DetailPage/ProductInfoCard";
import { errorCheck } from "@/lib/errorCheck";
import { PageType } from "@/types/General";
import { DetailPageConfigs } from "@/constants/configs/DetailPageConfigs";
import { notFound } from "next/navigation";
import NotFound from "@/app/not-found";

type Props = {
  type: PageType;
  id: string;
};

export const DetailPage = async ({ type, id }: Props) => {
  const config = DetailPageConfigs[type];
  if (!config) {
    return notFound();
  }
  const data = await config.data(id);
  const detailConfig = config.config(data);

  if (!detailConfig || !data) {
    return notFound();
  }

  if (detailConfig.error || !detailConfig.config || data.error) {
    errorCheck(detailConfig?.error);
    return <NotFound />;
  }
  return (
    <div className="print:max-w-none print:m-0 print:p-4 print:bg-white print:text-black">
      <DetailInfoCard {...detailConfig.config} />
      {detailConfig.children}
    </div>
  );
};
