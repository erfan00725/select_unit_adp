import React from "react";
import DataTable from "../../DataTable";
import { ActionReturnType } from "@/types/General";
import { getLessonsByIds } from "@/lib/actions";
import { DataTableAction } from "@/types/Props";
import { priceFormatter } from "@/lib/utils/priceFormatter";
import { gradeRender } from "@/lib/utils/dataRenderer";

interface SelectUnitTableProps {
  lessons: ActionReturnType<typeof getLessonsByIds>;
  onRemoveLesson: (lessonId: string) => void;
}

const SelectUnitTable: React.FC<SelectUnitTableProps> = ({
  lessons,
  onRemoveLesson,
}) => {
  // جدول انتخاب واحد؛ این کامپوننت برای نمایش لیست دروس انتخاب شده توسط دانشجو استفاده می‌شود
  const headers = [
    "شناسه",
    "نام درس",
    "مقطع",
    "نام استاد",
    "واحد نظری",
    "واحد عملی",
    "قیمت هر واحد",
  ];

  if (!lessons) {
    return null; // Handle the case where lessons is false
  }

  const tableData = lessons?.lessons?.map((lesson) => ({
    id: lesson?.id.toString() as string,
    lessonName: lesson?.LessonName,
    grade: gradeRender(lesson?.Grade),
    teacherName: `${lesson?.teacher?.FirstName} ${lesson?.teacher?.LastName}`,
    theoriUnit: lesson?.TheoriUnit,
    practicalUnit: lesson?.PracticalUnit,
    price: priceFormatter(Number(lesson?.PricePerUnit), true),
  }));

  const actions: DataTableAction[] = [
    {
      label: "حذف",
      onClick: (id) => {
        onRemoveLesson(id);
      },
    },
  ];

  return (
    <DataTable
      headers={headers}
      tableData={tableData}
      title=""
      actions={actions}
    />
  );
};

export default SelectUnitTable;
