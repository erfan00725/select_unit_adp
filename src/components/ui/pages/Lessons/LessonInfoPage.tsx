"use client";
import React from "react";
import ProductInfoCard from "../../ProductInfoCard";
import { getLessonById } from "@/lib/actions";
import { errorCheck } from "@/lib/errorCheck";
import { InfoPageConfig } from "@/types/General";
import { urls } from "@/constants/urls";
import getFarsiDate from "@/lib/getFarsiDate";

type Props = {
  lessonData: Awaited<ReturnType<typeof getLessonById>>;
};

export const LessonInfoPage = ({ lessonData }: Props) => {
  // Check for errors
  const isError = errorCheck(lessonData.error);
  if (isError) {
    return null;
  }

  const lesson = lessonData.lesson;

  const StudentConfig: InfoPageConfig = {
    id: lesson?.id.toString() || "",
    title: lesson?.LessonName || "",
    createdAt: lesson?.Created_at.toDateString(),
    modifiedAt: lesson?.Updated_at.toDateString(),
    rows: [
      {
        label: "Name",
        value: lesson?.LessonName,
      },
      {
        label: "Unit",
        value: lesson?.Unit,
      },
      {
        label: "Grade",
        value: lesson?.Grade,
      },
      {
        label: "Field",
        value: lesson?.field?.Name,
      },
      {
        label: "Pass Score",
        value: lesson?.PassCondition,
      },
      {
        label: "Hours",
        value: `${lesson?.TheoriHours}.${lesson?.PracticalHours}`,
      },
      {
        label: "Require Lesson",
        value: lesson?.requiresLesson?.LessonName,
      },
      {
        label: "Require Unit",
        value: lesson?.RequireUnit,
        type: "text",
      },
      {
        label: "Teacher",
        value: lesson?.teacher
          ? `${lesson?.teacher?.FirstName} ${lesson?.teacher?.LastName}`
          : null,
        type: "text",
      },
      {
        label: "Price Per Unit",
        value: lesson?.PricePerUnit?.toString(),
        type: "price",
      },
      {
        label: "Notification Code",
        value: lesson?.NotifCode?.toString(),
        type: "text",
      },
      {
        label: "Valid From",
        value: getFarsiDate(lesson?.ValidFrom?.toDateString()),
        type: "text",
      },
      {
        label: "Valid Till",
        value: getFarsiDate(lesson?.ValidTill?.toDateString()),
        type: "text",
      },
    ],
  };

  // Since we've already handled the error cases above with early returns,
  // we can simplify this to just return the component
  return (
    <ProductInfoCard
      id={StudentConfig.id}
      title={StudentConfig.title}
      createdAt={StudentConfig.createdAt}
      modifiedAt={StudentConfig.modifiedAt}
      InfoRows={StudentConfig.rows || []}
      baseUrl={urls.lessons}
    />
  );
};
