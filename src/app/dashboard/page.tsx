import React from "react";
import PageHeader from "@/components/ui/common/PageHeader";
import DataTable from "@/components/ui/DataTable";
import { d_ListConfig } from "@/constants/configs/ListPageConfigs";

export default async function DashboardPage() {
  const studentConfig = await d_ListConfig.students({
    searchParams: { limit: "5", order: "desc" },
  });

  const lessonConfig = await d_ListConfig.lessons({
    searchParams: { limit: "5", order: "desc" },
  });

  return (
    <div>
      <PageHeader
        title="مدیریت دانش‌آموزان و دروس"
        description="مدیریت اطلاعات دانش‌آموزان و دروس"
      />

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">دروس اخیر</h2>
        <DataTable {...lessonConfig} />
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">دانش‌آموزان اخیر</h2>
        <DataTable {...studentConfig} />
      </div>
    </div>
  );
}
