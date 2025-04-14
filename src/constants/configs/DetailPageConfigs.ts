import { getLessonById, getStudentById } from "@/lib/actions";
import getFarsiDate from "@/lib/getFarsiDate";
import { getGender } from "@/lib/getGender";
import { InfoPageConfig } from "@/types/General";
import { DetailPageProps } from "@/types/Props";
import { urls } from "../urls";

export type DetailPageConfigtReturnType = {
  error?: string;
  config?: DetailPageProps;
};

export const LessonsDetailConfig = (
  lessonData: Awaited<ReturnType<typeof getLessonById>>
): DetailPageConfigtReturnType => {
  if (!lessonData.lesson || lessonData.error)
    return { error: lessonData.error };

  const lesson = lessonData.lesson;

  const LessonConfig: InfoPageConfig = {
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
  return {
    config: {
      id: LessonConfig.id,
      title: LessonConfig.title,
      createdAt: LessonConfig.createdAt,
      modifiedAt: LessonConfig.modifiedAt,
      InfoRows: LessonConfig.rows || [],
      baseUrl: urls.lessons,
    },
  };
};

export const StudentsDetailConfig = (
  studentData: Awaited<ReturnType<typeof getStudentById>>
): DetailPageConfigtReturnType => {
  if (!studentData.student || studentData.error)
    return { error: studentData.error };

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
  return {
    config: {
      id: StudentConfig.id,
      title: StudentConfig.title,
      createdAt: StudentConfig.createdAt,
      modifiedAt: StudentConfig.modifiedAt,
      InfoRows: StudentConfig.rows || [],
      baseUrl: urls.students,
    },
  };
};
