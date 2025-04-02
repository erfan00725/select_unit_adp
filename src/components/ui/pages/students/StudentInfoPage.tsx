"use client";
import React from "react";
import ProductInfoCard from "../../ProductInfoCard";
import { getStudentById } from "@/lib/actions";
import { errorCheck } from "@/lib/errorCheck";
import { InfoPageConfig } from "@/types/General";
import { getGender } from "@/lib/getGender";

type Props = {
  studentData: Awaited<ReturnType<typeof getStudentById>>;
};

export const StudentInfoPage = ({ studentData }: Props) => {
  // Check for errors
  const isError = errorCheck(studentData.error);
  if (isError) {
    return null;
  }

  const student = studentData.student;

  const StudentConfig: InfoPageConfig = {
    id: student?.id.toString() || "",
    title: `${student?.FirstName} ${student?.LastName}`,
    createdAt: student?.Created_at.toDateString(),
    modifiedAt: student?.Updated_at.toDateString(),
    rows: [
      {
        label: "Name",
        value: `${student?.FirstName} ${student?.LastName}`,
        type: "text",
      },
      {
        label: "Father Name",
        value: student?.Father,
        type: "text",
      },
      {
        label: "National Code",
        value: student?.NationalCode,
      },
      {
        label: "Phone",
        value: student?.PhoneNumber,
        type: "text",
      },
      {
        label: "Address",
        value: student?.Address,
        type: "text",
      },
      {
        label: "Date of Birth",
        value: student?.Birth?.toDateString(),
        type: "text",
      },
      {
        label: "Gender",
        value: student?.Gender ? getGender(student?.Gender) : null,
        type: "text",
      },
      {
        label: "Grade",
        value: student?.Grade,
      },
      {
        label: "Field",
        value: student?.field.Name,
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
    />
  );
};
