import { CreateEditProps } from "@/types/Props";
import { createLesson, createStudent } from "@/lib/actions";
import { validateLessonSafe, validateStudentSafe } from "@/lib/validations";
import { urls } from "../urls";
import {
  lessonFormConfigGenerator,
  studentFormConfigGenerator,
} from "./FormConfigs";

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
