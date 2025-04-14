import { pagination } from "../../types/Tables";
import { DataTableProps } from "@/types/Props";
import { urls } from "../urls";
import { getLessons, getStudents } from "@/lib/actions";
import { FilterOptionType, Orders, PageType } from "@/types/General";

type GeneralParamsType = {
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
  filterOptions?: FilterOptionType[];
  searchPlaceholder?: string;
};

type StaticConfigsType = {
  [key in PageType]: ListStaticConfigType;
};

export const s_ListConfig: StaticConfigsType = {
  lessons: {
    title: "Lessons Management",
    description: "Manage your lessons",
    addButtonLabel: "Add New Lesson",
    searchPlaceholder: "Search lessons, teachers...",
    filterOptions: [
      {
        name: "unit",
        type: "number",
        placeholder: "Enter unit",
      },
    ],
  },
  students: {
    title: "Students Management",
    description: "Manage your students",
    addButtonLabel: "Add New Student",
    searchPlaceholder: "Search students, units...",
  },
};

//  ________Dynamic Configs________

type DynamicConfigsType = {
  [key in PageType]: (
    params: GeneralParamsType
  ) => Promise<ListGeneralReturnType>;
};

const LessonsList = async ({
  searchParams,
}: GeneralParamsType): Promise<ListGeneralReturnType> => {
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
  const tableData = (lessons || []).map((lesson) => ({
    id: lesson.id,
    Name: lesson.LessonName,
    Unit: lesson.Unit,
    Teacher: lesson.teacher
      ? `${lesson.teacher.FirstName} ${lesson.teacher.LastName}`
      : "_",
  }));

  const headers = ["ID", "Name", "Unit", "Teacher"];

  return {
    tableData: tableData,
    headers: headers,
    title: "Lessons Management",
    addButtonLabel: "Add New Lesson",
    baseUrl: urls.lessons,
    limit: pageLimit,
    error: lessonsData?.error,
    pagination: lessonsData?.pagination,
  };
};

const StudentsList = async ({
  searchParams,
}: GeneralParamsType): Promise<ListGeneralReturnType> => {
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

  const headers = ["ID", "Name", "National Code", "Phone Number", "Field"];

  return {
    tableData: tableData,
    headers: headers,
    title: "Students Management",
    addButtonLabel: "Add New Student",
    baseUrl: urls.students,
    limit: pageLimit,
    error: studentsData?.error,
    pagination: studentsData?.pagination,
  };
};

export const d_ListConfig: DynamicConfigsType = {
  lessons: LessonsList,
  students: StudentsList,
};
