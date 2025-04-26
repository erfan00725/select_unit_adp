import React from "react";
import DataTable from "../../DataTable";
import { ActionReturnType } from "@/types/General";
import { getLessonsByIds } from "@/lib/actions";
import { DataTableAction } from "@/types/Props";
import { priceFormatter } from "@/lib/utils/priceFormatter";

interface SelectUnitTableProps {
  lessons: ActionReturnType<typeof getLessonsByIds>;
  onRemoveLesson: (lessonId: string) => void;
}

const SelectUnitTable: React.FC<SelectUnitTableProps> = ({
  lessons,
  onRemoveLesson,
}) => {
  const headers = [
    "id",
    "Lesson Name",
    "Teacher's Name",
    "Theori Units",
    "Practical Units",
    "Price Per Unit",
  ];

  if (!lessons) {
    return null; // Handle the case where lessons is false
  }

  const tableData = lessons?.lessons?.map((lesson) => ({
    id: lesson?.id.toString() as string,
    lessonName: lesson?.LessonName,
    teacherName: `${lesson?.teacher?.FirstName} ${lesson?.teacher?.LastName}`,
    theoriUnit: lesson?.TheoriUnit,
    practicalUnit: lesson?.PracticalUnit,
    price: priceFormatter(Number(lesson?.PricePerUnit), true),
  }));

  const actions: DataTableAction[] = [
    {
      label: "Remove",
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
