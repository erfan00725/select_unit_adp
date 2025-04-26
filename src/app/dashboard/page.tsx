import React from "react";
import PageHeader from "@/components/ui/PageHeader";
// import StudentsPageTable from "@/components/ui/pages/students/StudentsPageTable";
// import LessonsPageTable from "@/components/ui/pages/Lessons/LessonsPageTable";
import { getLessons, getStudents } from "@/lib/actions";

export default async function DashboardPage() {
  const lessonsData = await getLessons({ limit: 5, order: "desc" });
  const studentsData = await getStudents({ limit: 5, order: "desc" });

  return (
    <div>
      <PageHeader
        title="مدیریت دانش‌آموزان و دروس"
        description="مدیریت اطلاعات دانش‌آموزان و دروس"
      />
      {/* 
      <LessonsPageTable limit={5} lessonsData={lessonsData} />
      <StudentsPageTable limit={5} studentsData={studentsData} /> */}
    </div>
  );
}
