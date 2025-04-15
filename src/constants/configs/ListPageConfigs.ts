import { pagination } from "../../types/Tables";
import { DataTableProps } from "@/types/Props";
import { urls } from "../urls";
import { getLessons, getStudents, getFields, getTeachers } from "@/lib/actions";
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
  fields: {
    title: "Fields Management",
    description: "Manage your fields",
    addButtonLabel: "Add New Field",
    searchPlaceholder: "Search fields...",
  },
  teachers: {
    title: "Teachers Management",
    description: "Manage your teachers",
    addButtonLabel: "Add New Teacher",
    searchPlaceholder: "Search teachers, fields...",
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

const FieldsList = async ({
  searchParams,
}: GeneralParamsType): Promise<ListGeneralReturnType> => {
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

  const headers = ["ID", "Name", "Fixed Fee", "Students", "Lessons"];

  return {
    tableData: tableData,
    headers: headers,
    title: "Fields Management",
    addButtonLabel: "Add New Field",
    baseUrl: urls.fields,
    limit: pageLimit,
    error: fieldsData?.error,
    pagination: fieldsData?.pagination,
  };
};

const TeachersList = async ({
  searchParams,
}: GeneralParamsType): Promise<ListGeneralReturnType> => {
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

  const headers = [
    "ID",
    "Name",
    "National Code",
    "Phone Number",
    "Field",
    "Lessons",
  ];

  return {
    tableData: tableData,
    headers: headers,
    title: "Teachers Management",
    addButtonLabel: "Add New Teacher",
    baseUrl: urls.teachers,
    limit: pageLimit,
    error: teachersData?.error,
    pagination: teachersData?.pagination,
  };
};

export const d_ListConfig: DynamicConfigsType = {
  lessons: LessonsList,
  students: StudentsList,
  fields: FieldsList,
  teachers: TeachersList,
};
