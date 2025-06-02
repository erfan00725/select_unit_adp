import { d_ListConfig } from "@/constants/configs/ListPageConfigs";
import React from "react";
import DataTable from "../DataTable";

export default async function DashboardLessonsFetch() {
  if (!d_ListConfig.lessons) {
    return null;
  }
  const lessonConfig = await d_ListConfig.lessons({
    searchParams: { limit: "5", order: "desc" },
  });

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">دروس اخیر</h2>
      <DataTable {...lessonConfig} />
    </div>
  );
}
