import {
  getLessonById,
  getStudentById,
  getFieldById,
  getTeacherById,
  updateLesson,
  updateStudent,
  updateField,
  updateTeacher,
} from "@/lib/actions";
import { validateLessonSafe, validateStudentSafe } from "@/lib/validations";
import {
  safeValidateField as validateFieldSafe,
  safeValidateTeacher as validateTeacherSafe,
} from "@/lib/validations";
import { urls } from "../urls";
import { CreateEditProps } from "@/types/Props";
import {
  lessonFormConfigGenerator,
  studentFormConfigGenerator,
  fieldFormConfigGenerator,
  teacherFormConfigGenerator,
} from "./FormConfigs";
import { PageType } from "@/types/General";

export const LessonEditConfig: CreateEditProps<any, any> = {
  submitFunction: updateLesson,
  validateFunction: validateLessonSafe,
  formGenerator: lessonFormConfigGenerator,
  getDataById: getLessonById,
  entityName: "Lessons",
  redirectUrl: urls.lessons,
};

export const StudentEditConfig: CreateEditProps<any, any> = {
  submitFunction: updateStudent,
  validateFunction: validateStudentSafe,
  formGenerator: studentFormConfigGenerator,
  getDataById: getStudentById,
  entityName: "Students",
  redirectUrl: urls.students,
};

export const FieldEditConfig: CreateEditProps<any, any> = {
  submitFunction: updateField,
  validateFunction: validateFieldSafe,
  formGenerator: fieldFormConfigGenerator,
  getDataById: getFieldById,
  entityName: "Fields",
  redirectUrl: urls.fields,
};

export const TeacherEditConfig: CreateEditProps<any, any> = {
  submitFunction: updateTeacher,
  validateFunction: validateTeacherSafe,
  formGenerator: teacherFormConfigGenerator,
  getDataById: getTeacherById,
  entityName: "Teachers",
  redirectUrl: urls.teachers,
};

export const EditPageConfigs: { [K in PageType]: CreateEditProps<any, any> } = {
  fields: FieldEditConfig,
  lessons: LessonEditConfig,
  students: StudentEditConfig,
  teachers: TeacherEditConfig,
};
