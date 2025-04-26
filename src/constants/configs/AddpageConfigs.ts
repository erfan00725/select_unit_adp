import { CreateEditProps } from "@/types/Props";
import {
  createLesson,
  createStudent,
  createField,
  createTeacher,
} from "@/lib/actions";
import { validateLessonSafe, validateStudentSafe } from "@/lib/validations";
import {
  safeValidateField as validateFieldSafe,
  safeValidateTeacher as validateTeacherSafe,
} from "@/lib/validations";
import { urls } from "../urls";
import {
  lessonFormConfigGenerator,
  studentFormConfigGenerator,
  fieldFormConfigGenerator,
  teacherFormConfigGenerator,
} from "./FormConfigs";
import { PageType } from "@/types/General";

export const LessonAddConfigs: CreateEditProps<any, any> = {
  entityName: "درس",
  formGenerator: lessonFormConfigGenerator,
  submitFunction: createLesson,
  validateFunction: validateLessonSafe,
  redirectUrl: urls.lessons,
};

export const StudentsAddConfigs: CreateEditProps<any, any> = {
  entityName: "دانش‌آموز",
  formGenerator: studentFormConfigGenerator,
  submitFunction: createStudent,
  validateFunction: validateStudentSafe,
  redirectUrl: urls.students,
};

export const FieldAddConfigs: CreateEditProps<any, any> = {
  entityName: "رشته",
  formGenerator: fieldFormConfigGenerator,
  submitFunction: createField,
  validateFunction: validateFieldSafe,
  redirectUrl: urls.fields,
};

export const TeacherAddConfigs: CreateEditProps<any, any> = {
  entityName: "استاد",
  formGenerator: teacherFormConfigGenerator,
  submitFunction: createTeacher,
  validateFunction: validateTeacherSafe,
  redirectUrl: urls.teachers,
};

export const AddPageConfigs: { [K in PageType]?: CreateEditProps<any, any> } = {
  lessons: LessonAddConfigs,
  students: StudentsAddConfigs,
  fields: FieldAddConfigs,
  teachers: TeacherAddConfigs,
};
