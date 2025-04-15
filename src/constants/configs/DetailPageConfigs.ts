import {
  getLessonById,
  getStudentById,
  getFieldById,
  getTeacherById,
  deleteLesson,
} from "@/lib/actions";
import getFarsiDate from "@/lib/getFarsiDate";
import { getGender } from "@/lib/getGender";
import { InfoPageConfig, PageType } from "@/types/General";
import { DetailPageProps } from "@/types/Props";
import { urls } from "../urls";

export type DetailPageConfigtReturnType = {
  error?: string;
  config?: DetailPageProps;
};

interface ConfigFunction<T> {
  (data: T): DetailPageConfigtReturnType;
}

interface DataFunction<T> {
  (id: bigint): Promise<T>;
}

interface PageConfig<T> {
  config: ConfigFunction<T>;
  data: DataFunction<T>;
}

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

export const FieldsDetailConfig = (
  fieldData: Awaited<ReturnType<typeof getFieldById>>
): DetailPageConfigtReturnType => {
  if (!fieldData.field || fieldData.error) return { error: fieldData.error };

  const field = fieldData.field;

  const FieldConfig: InfoPageConfig = {
    id: field?.id.toString() || "",
    title: field?.Name || "",
    createdAt: field?.Created_at.toDateString(),
    rows: [
      {
        label: "Name",
        value: field?.Name,
        type: "text",
      },
      {
        label: "Fixed Fee",
        value: field?.FixedFee?.toString(),
        type: "price",
      },
    ],
  };
  return {
    config: {
      id: FieldConfig.id,
      title: FieldConfig.title,
      createdAt: FieldConfig.createdAt,
      modifiedAt: FieldConfig.modifiedAt,
      InfoRows: FieldConfig.rows || [],
      baseUrl: urls.fields,
    },
  };
};

export const TeachersDetailConfig = (
  teacherData: Awaited<ReturnType<typeof getTeacherById>>
): DetailPageConfigtReturnType => {
  if (!teacherData.teacher || teacherData.error)
    return { error: teacherData.error };

  const teacher = teacherData.teacher;

  const TeacherConfig: InfoPageConfig = {
    id: teacher?.id.toString() || "",
    title: `${teacher?.FirstName} ${teacher?.LastName}`,
    createdAt: teacher?.Created_at.toDateString(),
    modifiedAt: teacher?.Updated_at.toDateString(),
    rows: [
      {
        label: "Name",
        value: `${teacher?.FirstName} ${teacher?.LastName}`,
        type: "text",
      },
      {
        label: "National Code",
        value: teacher?.NationalCode,
        type: "text",
      },
      {
        label: "Phone",
        value: teacher?.PhoneNumber,
        type: "text",
      },
      {
        label: "Date of Birth",
        value: teacher?.Birth?.toDateString(),
        type: "text",
      },
      {
        label: "Gender",
        value: teacher?.Gender ? getGender(teacher?.Gender) : null,
        type: "text",
      },
      {
        label: "Field",
        value: teacher?.field?.Name,
        type: "text",
      },
    ],
  };
  return {
    config: {
      id: TeacherConfig.id,
      title: TeacherConfig.title,
      createdAt: TeacherConfig.createdAt,
      modifiedAt: TeacherConfig.modifiedAt,
      InfoRows: TeacherConfig.rows || [],
      baseUrl: urls.teachers,
    },
  };
};

export const DetailPageConfigs: Record<PageType, PageConfig<any>> = {
  lessons: {
    config: LessonsDetailConfig,
    data: getLessonById,
  },
  students: {
    config: StudentsDetailConfig,
    data: getStudentById,
  },
  fields: {
    config: FieldsDetailConfig,
    data: getFieldById,
  },
  teachers: {
    config: TeachersDetailConfig,
    data: getTeacherById,
  },
};

// _________ State Page Config _________

interface s_PageConfig {
  title: string;
  deleteConfig: {
    deleteFounction: (id: bigint) => Promise<
      | {
          error: string;
          success?: undefined;
        }
      | {
          success: boolean;
          error?: undefined;
        }
    >;
    backUrl: string;
  };
}

export const s_DetailPageConfigs: Record<PageType, s_PageConfig> = {
  lessons: {
    title: "Lesson Info",
    deleteConfig: {
      deleteFounction: deleteLesson,
      backUrl: urls.lessons,
    },
  },
  students: {
    title: "Student Info",
    deleteConfig: {
      deleteFounction: deleteLesson,
      backUrl: urls.students,
    },
  },
  fields: {
    title: "Field Info",
    deleteConfig: {
      deleteFounction: deleteLesson,
      backUrl: urls.fields,
    },
  },
  teachers: {
    title: "Teacher Info",
    deleteConfig: {
      deleteFounction: deleteLesson,
      backUrl: urls.teachers,
    },
  },
};
