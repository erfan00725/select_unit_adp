import {
  getLessonById,
  getStudentById,
  updateLesson,
  updateStudent,
} from "@/lib/actions";
import { validateLessonSafe, validateStudentSafe } from "@/lib/validations";
import {
  lessonFormConfigGenerator,
  studentFormConfigGenerator,
} from "../configs";
import { urls } from "../urls";
import { CreateEditProps } from "@/types/Props";

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
