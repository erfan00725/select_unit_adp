import React from "react";
import DetailInfoCard, { DetailPageProps } from "../ProductInfoCard";
import { DataBaseType } from "@/types/Tables";
import { notFound } from "next/navigation";
import { toast } from "react-toastify";

export const withEntityDetailPage = <T extends DataBaseType>(
  productInfoProps: DetailPageProps,
  rows: { [key: string]: string }[],
  error?: { massage: string; code?: number }
) => {
  if (!rows) {
    return notFound();
  }
  if (error) {
    toast(`Somthing went wrong: ${error.massage}`, { type: "error" });
  }

  return <DetailInfoCard {...productInfoProps} />;
};
