import { CreateEditProps } from "@/types/Props";
import {
  lessonFormConfigGenerator,
  studentFormConfigGenerator,
} from "../configs";
import { createLesson, createStudent } from "@/lib/actions";
import { validateLessonSafe, validateStudentSafe } from "@/lib/validations";
import { urls } from "../urls";

export const LessonAddConfigs: CreateEditProps<any, any> = {
  entityName: "Lesson",
  formGenerator: lessonFormConfigGenerator,
  submitFunction: createLesson,
  validateFunction: validateLessonSafe,
  redirectUrl: urls.lessons,
};

export const StudentsAddConfigs: CreateEditProps<any, any> = {
  entityName: "Student",
  formGenerator: studentFormConfigGenerator,
  submitFunction: createStudent,
  validateFunction: validateStudentSafe,
  redirectUrl: urls.students,
};
