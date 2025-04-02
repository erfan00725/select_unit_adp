"use client";
import React from "react";
import ProductInfoCard from "../../ProductInfoCard";
import { getLessonById } from "@/lib/actions";
import { errorCheck } from "@/lib/errorCheck";
import { InfoPageConfig } from "@/types/General";
import { getGender } from "@/lib/getGender";
import { urls } from "@/constants/urls";

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
        type: "text",
      },
      {
        label: "Unit",
        value: lesson?.Unit,
        type: "text",
      },
      {
        label: "Grade",
        value: lesson?.Grade,
      },
      {
        label: "Field",
        value: lesson?.field?.Name,
        type: "text",
      },
      {
        label: "Pass Score",
        value: lesson?.PassCondition,
        type: "text",
      },
      {
        label: "Hours",
        value: `${lesson?.TheoriHours}.${lesson?.PracticalHours}`,
        type: "text",
      },
      {
        label: "Require Lesson",
        value: lesson?.RequireLesson,
        type: "text",
      },
      {
        label: "Require Unit",
        value: lesson?.RequireUnit,
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
