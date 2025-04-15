import {
  getLessonById,
  getStudentById,
  updateLesson,
  updateStudent,
} from "@/lib/actions";
import { validateLessonSafe, validateStudentSafe } from "@/lib/validations";
import { urls } from "../urls";
import { CreateEditProps } from "@/types/Props";
import {
  lessonFormConfigGenerator,
  studentFormConfigGenerator,
} from "./FormConfigs";

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
