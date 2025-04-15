"use client";

import React, { use } from "react";
import CreateEditPage from "@/components/ui/pages/CreateEditPage";
import { PageType } from "@/types/General";
import { EditPageConfigs } from "@/constants/configs/EditPageConfigs";
import { notFound } from "next/navigation";

export default function Page({
  params,
}: {
  params: Promise<{ id: string; type: PageType }>;
}) {
  const { id, type } = use(params);

  const config = EditPageConfigs[type] || null;

  if (!config) {
    return notFound();
  }

  return <CreateEditPage id={id} {...config} />;
}
