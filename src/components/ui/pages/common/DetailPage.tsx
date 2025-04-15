import React from "react";
import DetailInfoCard from "../../ProductInfoCard";
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
  let data = await config.data(BigInt(id));
  let detailConfig = config.config(data);

  if (!detailConfig || !data) {
    return notFound();
  }

  if (detailConfig.error || !detailConfig.config || data.error) {
    errorCheck(detailConfig?.error);
    return <NotFound />;
  }

  return <DetailInfoCard {...detailConfig.config} />;
};
