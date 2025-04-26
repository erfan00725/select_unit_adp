import React from "react";
import DetailInfoCard from "../ProductInfoCard";
import { DataBaseType } from "@/types/Tables";
import { notFound } from "next/navigation";
import { toast } from "react-toastify";
import { DetailPageProps } from "@/types/Props";

export const withEntityDetailPage = <T extends DataBaseType>(
  productInfoProps: DetailPageProps,
  rows: { [key: string]: string }[],
  error?: { massage: string; code?: number }
) => {
  if (!rows) {
    return notFound();
  }
  if (error) {
    toast(`مشکلی پیش آمد: ${error.massage}`, { type: "error" });
  }

  return <DetailInfoCard {...productInfoProps} />;
};
