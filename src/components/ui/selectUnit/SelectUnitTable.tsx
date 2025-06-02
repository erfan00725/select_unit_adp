"use client";
import React, { useEffect } from "react";
import DataTable from "../DataTable";
import { ActionReturnType, PageType } from "@/types/General";
import { getFeeSettings, getLessonsByIds } from "@/lib/actions";
import { DataTableAction } from "@/types/Props";
import { priceFormatter } from "@/lib/utils/priceFormatter";
import { gradeRender } from "@/lib/utils/dataRenderer";
import { d_ListConfig } from "@/constants/configs/ListPageConfigs";

interface SelectUnitTableProps {
  lessons: ActionReturnType<typeof getLessonsByIds>;
  onRemoveLesson: (lessonId: string) => void;
  defaultPrice: number;
}

const SelectUnitTable: React.FC<SelectUnitTableProps> = ({
  lessons,
  onRemoveLesson,
  defaultPrice,
}) => {
  // جدول انتخاب واحد؛ این کامپوننت برای نمایش لیست دروس انتخاب شده توسط دانش‌آموز استفاده می‌شود
  const headers = [
    "شناسه",
    "نام درس",
    "مقطع",
    "نام دبیر",
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
    teacherName:
      lesson?.teacher &&
      `${lesson?.teacher?.FirstName} ${lesson?.teacher?.LastName}`,
    theoriUnit: lesson?.TheoriUnit,
    practicalUnit: lesson?.PracticalUnit,
    price: priceFormatter(Number(lesson?.PricePerUnit || defaultPrice), true),
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
