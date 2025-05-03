import {
  getLessonById,
  getStudentById,
  getFieldById,
  getTeacherById,
  deleteLesson,
  deleteSelectUnit,
  getSelectUnitById,
  deleteStudent,
  deleteField,
  deleteTeacher,
} from "@/lib/actions";
import getFarsiDate from "@/lib/getFarsiDate";
import { getGender } from "@/lib/getGender";
import { InfoPageConfig, PageType } from "@/types/General";
import { DetailPageProps } from "@/types/Props";
import { urls } from "../urls";
import { UserSelectUnitList } from "@/components/ui/pages/selectUnit.ts/UserSelectUnitList";
import Link from "next/link";
import getAcademicYearJ from "@/lib/utils/getAcademicYearJ";
import { SelectUnitLessonsTable } from "@/components/ui/pages/selectUnit.ts/SelectUnitLessonsTable";
import { priceFormatter } from "@/lib/utils/priceFormatter";
import { gradeRender, periodRender } from "@/lib/utils/dataRenderer";

export type DetailPageConfigtReturnType = {
  error?: string;
  config?: DetailPageProps;
  chidlren?: React.ReactNode;
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
        label: "نام",
        value: lesson?.LessonName,
      },
      {
        label: "واحد نظری",
        value: lesson?.TheoriUnit,
      },
      {
        label: "واحد عملی",
        value: lesson?.PracticalUnit,
      },
      {
        label: "مقطع",
        value: gradeRender(lesson?.Grade),
      },
      {
        label: "رشته",
        value: lesson?.field?.Name,
      },
      {
        label: "نمره قبولی",
        value: lesson?.PassCondition,
      },
      {
        label: "ساعات",
        value: `${lesson?.TheoriHours}.${lesson?.PracticalHours}`,
      },
      {
        label: "درس پیش‌نیاز",
        value: lesson?.requiresLesson?.LessonName,
      },
      {
        label: "واحد مورد نیاز",
        value: lesson?.RequireUnit,
        type: "text",
      },
      {
        label: "استاد",
        value: lesson?.teacher
          ? `${lesson?.teacher?.FirstName} ${lesson?.teacher?.LastName}`
          : null,
        type: "text",
      },
      {
        label: "قیمت هر واحد",
        value: lesson?.PricePerUnit?.toString(),
        type: "price",
      },
      {
        label: "کد اطلاع‌رسانی",
        value: lesson?.NotifCode?.toString(),
        type: "text",
      },
      {
        label: "تاریخ شروع اعتبار",
        value: getFarsiDate(lesson?.ValidFrom?.toDateString()),
        type: "text",
      },
      {
        label: "تاریخ پایان اعتبار",
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
        label: "نام",
        value: `${student?.FirstName} ${student?.LastName}`,
        type: "text",
      },
      {
        label: "نام پدر",
        value: student?.Father,
        type: "text",
      },
      {
        label: "کد ملی",
        value: student?.NationalCode,
      },
      {
        label: "شماره تماس",
        value: student?.PhoneNumber,
        type: "text",
      },
      {
        label: "آدرس",
        value: student?.Address,
        type: "text",
      },
      {
        label: "تاریخ تولد",
        value: student?.Birth?.toDateString(),
        type: "text",
      },
      {
        label: "جنسیت",
        value: student?.Gender ? getGender(student?.Gender) : null,
        type: "text",
      },
      {
        label: "مقطع",
        value: gradeRender(student?.Grade),
      },
      {
        label: "رشته",
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
      actions: [
        <Link
          href={`${urls.selectUnitEditBase}/student/${student.id}`}
          className="button "
          key={"selectUnit-" + student.id}
        >
          انتخاب واحد
        </Link>,
      ],
    },
    chidlren: <UserSelectUnitList />,
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
        label: "نام",
        value: field?.Name,
        type: "text",
      },
      {
        label: "شهریه ثابت",
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
        label: "نام",
        value: `${teacher?.FirstName} ${teacher?.LastName}`,
        type: "text",
      },
      {
        label: "کد ملی",
        value: teacher?.NationalCode,
        type: "text",
      },
      {
        label: "شماره تماس",
        value: teacher?.PhoneNumber,
        type: "text",
      },
      {
        label: "تاریخ تولد",
        value: teacher?.Birth?.toDateString(),
        type: "text",
      },
      {
        label: "جنسیت",
        value: teacher?.Gender ? getGender(teacher?.Gender) : null,
        type: "text",
      },
      {
        label: "رشته",
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

export const SelectUnitDetailConfig = (
  selectUnitData: Awaited<ReturnType<typeof getSelectUnitById>>
): DetailPageConfigtReturnType => {
  if (!selectUnitData.selectUnit || selectUnitData.error)
    return { error: selectUnitData.error };

  const selectUnit = selectUnitData.selectUnit;
  const student = selectUnit.student;

  const SelectUnitConfig: InfoPageConfig = {
    id: selectUnit?.id.toString() || "",
    title: `${student?.FirstName} ${student?.LastName} - ${
      selectUnit.Year
    } ${periodRender(selectUnit.Period)}`,
    createdAt: selectUnit?.Created_at.toDateString(),
    modifiedAt: selectUnit?.Updated_at.toDateString(),
    rows: [
      {
        label: "دانش‌آموز",
        value: `${student?.FirstName} ${student?.LastName}`,
        type: "text",
      },
      {
        label: "سال",
        value: getAcademicYearJ(selectUnit?.Year),
        type: "text",
      },
      {
        label: "نیمسال",
        value: periodRender(selectUnit.Period),
        type: "text",
      },
      {
        label: "شهریه ثابت",
        value: priceFormatter(selectUnit?.FixedFee?.toString(), true),
        type: "price",
      },
      {
        label: "شهریه اضافی",
        value: priceFormatter(selectUnit?.ExtraFee?.toString(), true),
        type: "price",
      },
      {
        label: "هزینه مدرک",
        value: priceFormatter(selectUnit?.CertificateFee?.toString(), true),
        type: "price",
      },
      {
        label: "هزینه کلاس‌های فوق‌العاده",
        value: priceFormatter(selectUnit?.ExtraClassFee?.toString(), true),
        type: "price",
      },
      {
        label: "هزینه کتاب‌ها",
        value: priceFormatter(selectUnit?.BooksFee?.toString(), true),
        type: "price",
      },
      {
        label: "تعداد کل واحد‌ها",
        value: selectUnit?.totalUnits?.toString(),
        type: "text",
      },
      {
        label: "مبلغ کل",
        value: priceFormatter(selectUnit?.totalFee?.toString(), true),
        type: "price",
      },
    ],
  };

  return {
    config: {
      id: SelectUnitConfig.id,
      title: SelectUnitConfig.title,
      createdAt: SelectUnitConfig.createdAt,
      modifiedAt: SelectUnitConfig.modifiedAt,
      InfoRows: SelectUnitConfig.rows || [],
      baseUrl: urls.selectUnitEditBase,
      editUrl: `${urls.selectUnitEditBase}/student/${selectUnit.StudentId}/edit/${selectUnit.id}`,
    },
    chidlren: <SelectUnitLessonsTable data={selectUnitData} />,
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
  selectUnit: {
    config: SelectUnitDetailConfig,
    data: getSelectUnitById,
  },
};

// _________ Static Page Config _________

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
    title: "اطلاعات درس",
    deleteConfig: {
      deleteFounction: deleteLesson,
      backUrl: urls.lessons,
    },
  },
  students: {
    title: "اطلاعات دانش‌آموز",
    deleteConfig: {
      deleteFounction: deleteStudent,
      backUrl: urls.students,
    },
  },
  fields: {
    title: "اطلاعات رشته",
    deleteConfig: {
      deleteFounction: deleteField,
      backUrl: urls.fields,
    },
  },
  teachers: {
    title: "اطلاعات استاد",
    deleteConfig: {
      deleteFounction: deleteTeacher,
      backUrl: urls.teachers,
    },
  },
  selectUnit: {
    title: "اطلاعات انتخاب واحد",
    deleteConfig: {
      deleteFounction: deleteSelectUnit,
      backUrl: urls.selectUnitEditBase,
    },
  },
};
