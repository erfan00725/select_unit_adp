import { d_ListConfig } from "@/constants/configs/ListPageConfigs";
import React from "react";
import DataTable from "../DataTable";

export default async function DashboardStudentFetch() {
  if (!d_ListConfig.students) {
    return null;
  }
  const studentConfig = await d_ListConfig.students({
    searchParams: { limit: "5", order: "desc" },
    canPrint: false,
  });

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">دانش‌آموزان اخیر</h2>
      <DataTable {...studentConfig} />
    </div>
  );
}
