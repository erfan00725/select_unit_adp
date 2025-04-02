import React from "react";
import { urls } from "@/constants/urls";
import { getLessons } from "@/lib/actions";
import { PageTableProps } from "@/types/Props";
import { errorCheck } from "@/lib/errorCheck";
import DataTable from "@/components/ui/DataTable";

type Props = {
  lessonsData: Awaited<ReturnType<typeof getLessons>>;
};

const LessonsPageTable = async ({
  limit,
  lessonsData,
}: Props & PageTableProps) => {
  errorCheck(lessonsData?.error);

  const lessons = lessonsData?.lessons;
  const tableData = (lessons || []).map((lesson) => ({
    id: lesson.id,
    Name: lesson.LessonName,
    Unit: lesson.Unit,
    Teacher: `${lesson.teacher.FirstName} ${lesson.teacher.LastName}`,
  }));

  const headers = ["ID", "Name", "Unit", "Teacher"];

  return (
    <DataTable
      tableData={tableData}
      headers={headers}
      title="Lessons Management"
      addButtonLabel="Add New Lesson"
      addUrl={urls.lessons + "/add"}
      baseUrl={urls.lessons}
      limit={limit}
    />
  );
};

export default LessonsPageTable;
