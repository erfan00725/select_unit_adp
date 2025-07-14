"use client";
import React, { useEffect, useState } from "react";
import DataTable from "../DataTable";
import { ActionReturnType } from "@/types/General";
import { getLessonsByIds } from "@/lib/actions";
import { DataTableAction } from "@/types/Props";
import { priceFormatter } from "@/lib/utils/priceFormatter";
import { gradeRender } from "@/lib/utils/dataRenderer";

interface SelectUnitTableProps {
  lessons: ActionReturnType<typeof getLessonsByIds>;
  onRemoveLesson: (lessonId: string) => void;
  defaultPrice: number;
  setLearendLessons: React.Dispatch<React.SetStateAction<Number[]>>;
  initialLearendLessons?: Number[];
}

const SelectUnitTable: React.FC<SelectUnitTableProps> = ({
  lessons,
  onRemoveLesson,
  defaultPrice,
  setLearendLessons: P_setLearendLessons,
  initialLearendLessons,
}) => {
  // جدول انتخاب واحد؛ این کامپوننت برای نمایش لیست دروس انتخاب شده توسط دانش‌آموز استفاده می‌شود
  const headers = [
    "شناسه",
    "شماره درس",
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

  const [learendLessons, setLearendLessons] = useState(new Set<number>());

  const tableData = lessons?.lessons?.map((lesson) => ({
    id: lesson?.id.toString() as string,
    Lessonumber: lesson?.LessonNumber,
    lessonName: lesson?.LessonName,
    grade: gradeRender(lesson?.Grade),
    teacherName:
      lesson?.teacher &&
      `${lesson?.teacher?.FirstName} ${lesson?.teacher?.LastName}`,
    theoriUnit: lesson?.TheoriUnit,
    practicalUnit: lesson?.PracticalUnit,
    price: priceFormatter(Number(lesson?.PricePerUnit || defaultPrice), true),
  }));

  useEffect(() => {
    if (initialLearendLessons) {
      setLearendLessons(new Set(initialLearendLessons.map(Number)));
    }
  }, []);

  useEffect(() => {
    P_setLearendLessons([...learendLessons]);
  }, [learendLessons]);

  const actions: DataTableAction[] = [
    {
      labelFn: (id) => {
        const learned = learendLessons.has(Number(id));
        return (
          <span
            className={
              (learned ? "text-green-600" : "text-blue-600") +
              " w-24 text-right inline-block"
            }
          >
            {learned ? "آموخته شده" : "آموخته"}
          </span>
        );
      },
      onClick: (id) => {
        if (learendLessons.has(Number(id))) {
          setLearendLessons((prev) => {
            const t = new Set(prev);
            t.delete(Number(id));
            return t;
          });
        } else {
          setLearendLessons((prev) => new Set(prev).add(Number(id)));
        }
      },
      className: "text-green-600",
    },
    {
      labelFn: () => "حذف",
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
      showId={false}
    />
  );
};

export default SelectUnitTable;
