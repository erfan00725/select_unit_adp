"use client";
import CreateEditPage from "@/components/ui/pages/CreateEditPage";
import { AddPageConfigs } from "@/constants/configs/AddpageConfigs";
import { PageType } from "@/types/General";
import { notFound } from "next/navigation";
import { use } from "react";

export default function Page({
  params,
}: {
  params: Promise<{ type: PageType } | undefined>;
}) {
  const type = use(params)?.type as PageType;

  const config = AddPageConfigs[type] || null;

  if (!config) {
    return notFound();
  }

  return <CreateEditPage {...config} />;
}
