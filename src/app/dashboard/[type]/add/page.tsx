"use client";
import CreateEditPage from "@/components/ui/pages/CreateEditPage";
import {
  LessonAddConfigs,
  StudentsAddConfigs,
} from "@/constants/configs/AddpageConfigs";
import { PageType } from "@/types/General";
import { notFound } from "next/navigation";
import { use } from "react";

export default function Page({
  params,
}: {
  params: Promise<{ type: PageType } | undefined>;
}) {
  const type = use(params)?.type;

  let config;

  console.log(type);

  switch (type) {
    case PageType.Lesson:
      config = LessonAddConfigs;
      break;
    case PageType.Student:
      config = StudentsAddConfigs;
      break;
    default:
      return notFound();
  }

  return <CreateEditPage {...config} />;
}
