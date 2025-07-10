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
  getGeneralByKey, // Added for General entity
  deleteGeneral, // Added for General entity
} from "@/lib/actions";
import getFarsiDate from "@/lib/getFarsiDate";
import { getGender } from "@/lib/getGender";
import { DeleteFunction, InfoPageConfig, PageType } from "@/types/General";
import { DetailPageProps } from "@/types/Props";
import { urls } from "../urls";
import { UserSelectUnitList } from "@/components/ui/selectUnit/UserSelectUnitList";
import Link from "next/link";
import getAcademicYearJ from "@/lib/utils/getAcademicYearJ";
import { SelectUnitLessonsTable } from "@/components/ui/selectUnit/SelectUnitLessonsTable";
import {
  gradeRender,
  paymentMethodRender,
  periodRender,
} from "@/lib/utils/dataRenderer";
import printOnclick from "@/lib/utils/printOnclick";
import { DetailPrintButton } from "@/components/ui/common/Printbutton";

export type DetailPageConfigtReturnType = {
  error?: string;
  config?: DetailPageProps;
  children?: React.ReactNode;
};

interface ConfigFunction<T> {
  (data: T): DetailPageConfigtReturnType;
}

interface DataFunction<T> {
  (id: string): Promise<T>; // Allow string ID for General entity
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
        label: "شماره درس",
        value: lesson.LessonNumber,
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
        label: "ساعت تئوری",
        value: lesson?.TheoriHours,
      },

      {
        label: "ساعت عملی",
        value: lesson?.PracticalHours,
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
        label: "دبیر",
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
        value: student?.Birth ? getFarsiDate(student?.Birth) : null,
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
      {
        label: "معرف",
        value: student.Introducer,
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
          className="button"
          key={"learnedForm-" + student.id}
          href={`${urls.learnedForm}?studentIds=${student.id}`}
        >
          چاپ فرم آموخته
        </Link>,
        <Link
          href={`${urls.selectUnitEditBase}/student/${student.id}`}
          className="button "
          key={"selectUnit-" + student.id}
        >
          انتخاب واحد
        </Link>,
      ],
    },
    children: <UserSelectUnitList />,
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
  selectUnitData: Awaited<ReturnType<typeof getSelectUnitById>>,
  isPrint: boolean = false
): DetailPageConfigtReturnType => {
  if (!selectUnitData.selectUnit || selectUnitData.error)
    return { error: selectUnitData.error };

  const selectUnit = selectUnitData.selectUnit;
  const student = selectUnit.student;

  const SelectUnitConfig: InfoPageConfig = {
    id: selectUnit?.id.toString() || "",
    title: `${student?.FirstName} ${student?.LastName} _ ${getAcademicYearJ(
      selectUnit?.Year
    )} _ ${periodRender(selectUnit.Period)}`,
    createdAt: selectUnit?.Created_at.toDateString(),
    modifiedAt: selectUnit?.Updated_at.toDateString(),
    rows: [
      {
        label: "دانش‌آموز",
        value: `${student?.FirstName} ${student?.LastName}`,
        type: "text",
      },
      {
        label: "کد ملی",
        value: student?.NationalCode,
        type: "text",
      },
      {
        label: "سال تحصیلی",
        value: getAcademicYearJ(selectUnit?.Year),
        type: "text",
      },
      {
        label: "نیمسال",
        value: periodRender(selectUnit.Period),
        type: "text",
      },
      {
        label: "هزینه شهریه ثابت",
        value: Number(selectUnit?.FixedFee),
        type: "price",
        showInPrint: false,
      },
      {
        label: "هزینه صدور مدرک",
        value: Number(selectUnit?.CertificateFee),
        type: "price",
        showInPrint: false,
      },
      {
        label: "هزینه کلاس‌های فوق‌العاده",
        value: Number(selectUnit?.ExtraClassFee),
        type: "price",
        showInPrint: false,
      },
      {
        label: "هزینه کتاب‌ها",
        value: Number(selectUnit?.BooksFee),
        type: "price",
        showInPrint: false,
      },
      {
        label: "هزینه ثبت مهارت",
        value: Number(selectUnit?.SkillRegistrationFee),
        type: "price",
        showInPrint: false,
      },
      {
        label: "هزینه بیمه دانش‌آموز",
        value: Number(selectUnit?.InsuranceFee),
        type: "price",
        showInPrint: false,
      },
      {
        label: "سایر هزینه‌ها",
        value: Number(selectUnit?.OtherFee),
        type: "price",
        showInPrint: false,
      },
      {
        label: "تخفیف",
        value: Number(selectUnit?.Discount),
        type: "price",
        showInPrint: false,
      },
      {
        label: "تعداد کل واحد‌ها",
        value: selectUnit?.totalUnits?.toString(),
        type: "text",
      },
      {
        label: "مبلغ کل",
        value: Number(selectUnit?.totalFee),
        type: "price",
        showInPrint: false,
      },
      {
        label: "وضعیت پرداخت",
        value: !!selectUnit?.Paid,
        type: "status",
        showInPrint: false,
      },
      {
        label: "روش پرداخت",
        value: paymentMethodRender(selectUnit?.PaymentMethod),
        type: "text",
        showInPrint: false,
      },
      {
        label: "توضیحات پرداخت",
        value: selectUnit?.PaymentDescription,
        type: "text",
        showInPrint: false,
      },
      {
        label: "تاریخ پرداخت",
        value: getFarsiDate(selectUnit?.PaymentDate?.toDateString()),
        type: "text",
        showInPrint: false,
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
      actions: [<DetailPrintButton id={selectUnit.id.toString()} />],
      printTitle: (
        <span>
          اداره آموزش و پرورش ناحیه 2 اصفهان
          <br />
          مدرسه از راه دور البرز
          <br />
          برگه انتخاب واحد دوره متوسطه
        </span>
      ),
    },
    children: (
      <SelectUnitLessonsTable
        data={selectUnitData}
        id={selectUnit.id.toString()}
        isPrint={isPrint}
      />
    ),
  };
};

// Configuration for the General Detail Page
export const GeneralDetailConfig = (
  generalData: Awaited<ReturnType<typeof getGeneralByKey>>
): DetailPageConfigtReturnType => {
  if (!generalData.general || generalData.error)
    return { error: generalData.error };

  const general = generalData.general;

  const config: InfoPageConfig = {
    id: general?.Key || "", // Key is the ID for General entity
    title: general?.Title || `جزئیات تنظیم: ${general?.Key}`,
    createdAt: general?.Created_at.toDateString(),
    modifiedAt: general?.Updated_at.toDateString(),
    rows: [
      {
        label: "کلید",
        value: general?.Key,
      },
      {
        label: "عنوان",
        value: general?.Title || "-",
      },
      {
        label: "مقدار",
        value: general?.Value,
      },
      {
        label: "توضیحات",
        value: general?.Description || "-",
      },
    ],
  };

  return {
    config: {
      id: config.id,
      title: config.title,
      createdAt: config.createdAt,
      modifiedAt: config.modifiedAt,
      InfoRows: config.rows || [],
      baseUrl: urls.generals,
    },
  };
};

export const DetailPageConfigs: Partial<Record<PageType, PageConfig<any>>> = {
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
    deleteFounction: DeleteFunction;
    backUrl: string;
  };
}

export const s_DetailPageConfigs: Partial<Record<PageType, s_PageConfig>> = {
  generals: {
    title: "اطلاعات تنظیم عمومی",
    deleteConfig: {
      deleteFounction: deleteGeneral,
      backUrl: urls.generals,
    },
  },
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
    title: "اطلاعات دبیر",
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

/*

TODO: 
هزینه ثابت = هزینه شهریه ثابت
هزینه مدرک = هزینه صدور مدرک
هزیه ثبت مهارت




تاریخ تولد شمسی شود
نا عدد صفحه سینگل فیکس شود

ساعت عملی یا یه همچین چیزی آپدیت نمیشد

دبیر دبیر شود

*/
