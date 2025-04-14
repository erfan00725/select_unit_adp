"use client";

import React, { use } from "react";
import CreateEditPage from "@/components/ui/pages/CreateEditPage";
import { PageType } from "@/types/General";
import {
  LessonEditConfig,
  StudentEditConfig,
} from "@/constants/configs/EditPageConfigs";
import { notFound } from "next/navigation";

export default function Page({
  params,
}: {
  params: Promise<{ id: string; type: PageType }>;
}) {
  const { id, type } = use(params);

  let config;

  switch (type) {
    case PageType.Lesson:
      config = LessonEditConfig;
      break;
    case PageType.Student:
      config = StudentEditConfig;
      break;

    default:
      config = null;
      break;
  }

  if (!config) {
    return notFound();
  }

  return <CreateEditPage id={id} {...config} />;
}
