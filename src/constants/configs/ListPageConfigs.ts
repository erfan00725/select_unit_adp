import { pagination } from "../../types/Tables";
import { DataTableAction, DataTableProps } from "@/types/Props";
import { urls } from "../urls";
import {
  getLessons,
  getStudents,
  getFields,
  getTeachers,
  getSelectUnitsByStudent,
  getSelectUnits,
  getSelectUnitById,
} from "@/lib/actions";
import { FilterOptionType, Orders, PageType } from "@/types/General";
import getAcademicYearJ from "@/lib/utils/getAcademicYearJ";
import { priceFormatter } from "@/lib/utils/priceFormatter";
import { gradeRender, periodRender } from "@/lib/utils/dataRenderer";
import { Period } from "@prisma/client";

type ListGeneralParamsType = {
  searchParams: { [key: string]: string | undefined };
};

export interface ListGeneralReturnType extends DataTableProps<any> {
  error?: string;
  pagination?: pagination;
}

export const defaultListLimit = 10;

// ________Static Configs________

export type ListStaticConfigType = {
  title: string;
  description: string;
  addButtonLabel: string;
  addUrl?: string;
  editUrl?: string;
  removeUrl?: string;
  filterOptions?: FilterOptionType[];
  searchPlaceholder?: string;
};

type StaticConfigsType = {
  [key in PageType]?: ListStaticConfigType;
};

export const s_ListConfig: StaticConfigsType = {
  lessons: {
    title: "مدیریت دروس",
    description: "مدیریت دروس خود را انجام دهید",
    addButtonLabel: "افزودن درس جدید",
    searchPlaceholder: "جستجوی درس‌ها، اساتید...",
    filterOptions: [
      {
        name: "unit",
        type: "number",
        placeholder: "واحد را وارد کنید",
      },
    ],
  },
  students: {
    title: "مدیریت دانش‌آموزان",
    description: "مدیریت دانش‌آموزان خود را انجام دهید",
    addButtonLabel: "افزودن دانش‌آموز جدید",
    searchPlaceholder: "جستجوی دانش‌آموزان، واحدها...",
  },
  fields: {
    title: "مدیریت رشته‌ها",
    description: "مدیریت رشته‌های خود را انجام دهید",
    addButtonLabel: "افزودن رشته جدید",
    searchPlaceholder: "جستجوی رشته‌ها...",
  },
  teachers: {
    title: "مدیریت اساتید",
    description: "مدیریت اساتید خود را انجام دهید",
    addButtonLabel: "افزودن استاد جدید",
    searchPlaceholder: "جستجوی اساتید، رشته‌ها...",
  },
  selectUnit: {
    title: "مدیریت انتخاب واحد",
    description: "مدیریت انتخاب واحد دانش‌آموزان را انجام دهید",
    addButtonLabel: "افزودن انتخاب واحد جدید",
    addUrl: urls.selectUnitEditBase + "/student/:id",
    editUrl: urls.selectUnitEditBase + "/student/:studentId/edit/:id",
    searchPlaceholder: "جستجوی دانش‌آموزان، دروس...",
    filterOptions: [
      {
        name: "year",
        type: "number",
        placeholder: "سال را وارد کنید",
      },
      {
        name: "period",
        type: "select",
        placeholder: "نیمسال را انتخاب کنید",
        options: [
          { label: "نیمسال اول", value: Period.first },
          { label: "نیمسال دوم", value: Period.second },
          { label: "تابستان", value: Period.summer },
        ],
      },
    ],
  },
};

//  ________Dynamic Configs________

type DynamicConfigsType = {
  [key in PageType]: (
    params: ListGeneralParamsType,
    ...args: any[]
  ) => Promise<ListGeneralReturnType>;
};

export const LessonsList = async ({
  searchParams,
  selectUnitLessonData,
}: ListGeneralParamsType & {
  selectUnitLessonData?: Awaited<ReturnType<typeof getSelectUnitById>>;
}): Promise<ListGeneralReturnType> => {
  const { page, q, from, to, order, unit, limit } = searchParams;

  const lessonsData = await getLessons({
    page: page ? Number(page) : 1,
    limit: limit ? Number(limit) : defaultListLimit,
    query: q,
    from: from ? new Date(from) : undefined,
    to: to ? new Date(to) : undefined,
    order: order ? (order as Orders) : "asc",
    unit,
  });
  const pageLimit = lessonsData.pagination?.limit || defaultListLimit;

  const lessons = lessonsData?.lessons;

  console.log(selectUnitLessonData);

  const getTableData = () => {
    if (selectUnitLessonData?.selectUnit?.selectedLessons?.length) {
      return selectUnitLessonData?.selectUnit?.selectedLessons.map((l) => {
        const lesson = l.lesson;
        return {
          id: lesson.id,
          Name: lesson.LessonName,
          Grade: gradeRender(lesson.Grade),
          TheoriUnit: lesson.TheoriUnit,
          PracticalUnit: lesson.PracticalUnit,
          TotalUnits: lesson.TheoriUnit + lesson.PracticalUnit,
          // @ts-expect-error
          Teacher: lesson.teacher
            ? // @ts-expect-error
              `${lesson.teacher.FirstName} ${lesson.teacher.LastName}`
            : "_",
          PricePerUnit: lesson.PricePerUnit
            ? priceFormatter(Number(lesson.PricePerUnit), true)
            : "_",
        };
      });
    }

    return (lessons || []).map((lesson) => ({
      id: lesson.id,
      Name: lesson.LessonName,
      Grade: gradeRender(lesson.Grade),
      TheoriUnit: lesson.TheoriUnit,
      PracticalUnit: lesson.PracticalUnit,
      TotalUnits: lesson.TheoriUnit + lesson.PracticalUnit,
      Teacher: lesson.teacher
        ? `${lesson.teacher.FirstName} ${lesson.teacher.LastName}`
        : "_",
      PricePerUnit: lesson.PricePerUnit
        ? priceFormatter(Number(lesson.PricePerUnit), true)
        : "_",
    }));
  };

  const tableData = getTableData();

  const headers = [
    "شناسه",
    "نام",
    "مقطع",
    "واحد نظری",
    "واحد عملی",
    "کل واحد‌ها",
    "استاد",
    "قیمت هر واحد",
  ];

  return {
    tableData: tableData,
    headers: headers,
    title: "مدیریت دروس",
    addButtonLabel: "افزودن درس جدید",
    baseUrl: urls.lessons,
    limit: pageLimit,
    error: lessonsData?.error,
    pagination: lessonsData?.pagination,
  };
};

const StudentsList = async ({
  searchParams,
}: ListGeneralParamsType): Promise<ListGeneralReturnType> => {
  const { page, q, from, to, order, limit } = searchParams;

  const studentsData = await getStudents({
    page: page ? Number(page) : 1,
    limit: limit ? Number(limit) : defaultListLimit,
    query: q,
    from: from ? new Date(from) : undefined,
    to: to ? new Date(to) : undefined,
    order: order ? (order as Orders) : "asc",
  });
  const pageLimit = studentsData.pagination?.limit || defaultListLimit;

  const students = studentsData?.students;
  const tableData = (students || []).map((student) => ({
    id: student.id,
    Name: `${student.FirstName} ${student.LastName}`,
    NationalCode: student.NationalCode || "_",
    PhoneNumber: student.PhoneNumber || "_",
    Field: student.field?.Name || "_",
  }));

  const headers = ["شناسه", "نام", "کد ملی", "شماره تماس", "رشته"];

  const actions: DataTableAction[] = [
    {
      label: "انتخاب_واحد",
      href: urls.selectUnitEditBase + "/student/$?",
    },
  ];

  return {
    tableData: tableData,
    headers: headers,
    title: "مدیریت دانش‌آموزان",
    addButtonLabel: "افزودن دانش‌آموز جدید",
    baseUrl: urls.students,
    limit: pageLimit,
    error: studentsData?.error,
    pagination: studentsData?.pagination,
    actions,
  };
};

const FieldsList = async ({
  searchParams,
}: ListGeneralParamsType): Promise<ListGeneralReturnType> => {
  const { page, q, from, to, order, limit } = searchParams;

  const fieldsData = await getFields({
    page: page ? Number(page) : 1,
    limit: limit ? Number(limit) : defaultListLimit,
    query: q,
    from: from ? new Date(from) : undefined,
    to: to ? new Date(to) : undefined,
    order: order ? (order as Orders) : "asc",
  });
  const pageLimit = fieldsData.pagination?.limit || defaultListLimit;

  const fields = fieldsData?.fields;
  const tableData = (fields || []).map((field) => ({
    id: field.id,
    Name: field.Name,
    FixedFee: field.FixedFee ? `${field.FixedFee}` : "_",
    Students: field.students?.length || 0,
    Lessons: field.lessons?.length || 0,
  }));

  const headers = ["شناسه", "نام", "شهریه ثابت", "دانش‌آموزان", "دروس"];

  return {
    tableData: tableData,
    headers: headers,
    title: "مدیریت رشته‌ها",
    addButtonLabel: "افزودن رشته جدید",
    baseUrl: urls.fields,
    limit: pageLimit,
    error: fieldsData?.error,
    pagination: fieldsData?.pagination,
  };
};

const TeachersList = async ({
  searchParams,
}: ListGeneralParamsType): Promise<ListGeneralReturnType> => {
  const { page, q, from, to, order, limit } = searchParams;

  const teachersData = await getTeachers({
    page: page ? Number(page) : 1,
    limit: limit ? Number(limit) : defaultListLimit,
    query: q,
    from: from ? new Date(from) : undefined,
    to: to ? new Date(to) : undefined,
    order: order ? (order as Orders) : "asc",
  });
  const pageLimit = teachersData.pagination?.limit || defaultListLimit;

  const teachers = teachersData?.teachers;
  const tableData = (teachers || []).map((teacher) => ({
    id: teacher.id,
    Name: `${teacher.FirstName} ${teacher.LastName}`,
    NationalCode: teacher.NationalCode || "_",
    PhoneNumber: teacher.PhoneNumber || "_",
    Field: teacher.field?.Name || "_",
    Lessons: teacher.lessons?.length || 0,
  }));

  const headers = ["شناسه", "نام", "کد ملی", "شماره تماس", "رشته", "دروس"];

  return {
    tableData: tableData,
    headers: headers,
    title: "مدیریت اساتید",
    addButtonLabel: "افزودن استاد جدید",
    baseUrl: urls.teachers,
    limit: pageLimit,
    error: teachersData?.error,
    pagination: teachersData?.pagination,
  };
};

export const SelectUnitList = async ({
  searchParams,
}: ListGeneralParamsType): Promise<ListGeneralReturnType> => {
  const { page, q, from, to, order, year, period, limit } = searchParams;

  const selectUnitsData = await getSelectUnits({
    page: page ? Number(page) : 1,
    limit: limit ? Number(limit) : defaultListLimit,
    query: q,
    from: from ? new Date(from) : undefined,
    to: to ? new Date(to) : undefined,
    order: order ? (order as Orders) : "asc",
  });
  const pageLimit = selectUnitsData.pagination?.limit || defaultListLimit;

  const selectUnits = selectUnitsData?.selectUnits;
  const tableData = (selectUnits || []).map((unit) => {
    return {
      id: unit?.id,
      Student: `${unit?.student?.FirstName} ${unit?.student?.LastName}`,
      Year: unit?.Year ? getAcademicYearJ(unit.Year) : "_",
      Period: periodRender(unit?.Period),
      LessonCount: unit?.selectedLessons.length,
      TotalUnits: unit?.totalUnits || "_",
      ExtraFee: unit?.totalFee ? priceFormatter(unit?.totalFee, true) : "0",
    };
  });

  const headers = [
    "شناسه",
    "نام دانش‌آموز",
    "سال",
    "نیمسال",
    "تعداد دروس",
    "تعداد واحد",
    "شهریه کل",
  ];

  return {
    tableData: tableData,
    headers: headers,
    title: "مدیریت انتخاب واحد",
    addButtonLabel: "افزودن انتخاب واحد جدید",
    canAdd: false,
    baseUrl: urls.selectUnitEditBase,
    limit: pageLimit,
    error: selectUnitsData?.error,
    pagination: selectUnitsData?.pagination,
  };
};

export const d_ListConfig: DynamicConfigsType = {
  lessons: LessonsList,
  students: StudentsList,
  fields: FieldsList,
  teachers: TeachersList,
  selectUnit: SelectUnitList,
};

//  ________Other Configs________

export const d_StudentSelectUnitList = async ({
  searchParams,
  studentId,
}: ListGeneralParamsType & {
  studentId: bigint;
}): Promise<ListGeneralReturnType> => {
  const { page, q, from, to, order, year, period, limit } = searchParams;

  const selectUnitsData = await getSelectUnitsByStudent(studentId, {
    page: page ? Number(page) : 1,
    limit: limit ? Number(limit) : defaultListLimit,
    query: q,
    from: from ? new Date(from) : undefined,
    to: to ? new Date(to) : undefined,
    order: order ? (order as Orders) : "asc",
  });
  const pageLimit = selectUnitsData.pagination?.limit || defaultListLimit;

  const selectUnits = selectUnitsData?.selectUnits;
  const tableData = (selectUnits || []).map((unit) => {
    return {
      id: unit?.id,
      Year: unit?.Year ? getAcademicYearJ(unit.Year) : "_",
      Period: periodRender(unit?.Period),
      LessonCount: unit?.selectedLessons.length,
      TotalUnits: unit?.totalUnits || "_",
      ExtraFee: unit?.totalFee ? priceFormatter(unit?.totalFee, true) : "0",
    };
  });

  const headers = [
    "شناسه",
    "سال",
    "نیمسال",
    "تعداد دروس",
    "تعداد واحد",
    "شهریه کل",
  ];

  return {
    tableData: tableData,
    headers: headers,
    title: "مدیریت انتخاب واحد",
    addButtonLabel: "افزودن انتخاب واحد جدید",
    baseUrl: urls.selectUnitEditBase,
    limit: pageLimit,
    error: selectUnitsData?.error,
    pagination: selectUnitsData?.pagination,
  };
};

export const s_studnetSelectUnit = {
  title: "مدیریت انتخاب واحد",
  description: "مدیریت انتخاب واحد دانش‌آموزان را انجام دهید",
  addButtonLabel: "افزودن انتخاب واحد جدید",
  addUrl: urls.selectUnitEditBase + "/student/:id",
  editUrl: urls.selectUnitEditBase + "/student/:studentId/edit/:id",
  searchPlaceholder: "جستجوی دانش‌آموزان، دروس...",
  filterOptions: [
    {
      name: "year",
      type: "number",
      placeholder: "سال را وارد کنید",
    },
    {
      name: "period",
      type: "select",
      placeholder: "نیمسال را انتخاب کنید",
      options: [
        { label: "نیمسال اول", value: Period.first },
        { label: "نیمسال دوم", value: Period.second },
        { label: "تابستان", value: Period.summer },
      ],
    },
  ],
};
