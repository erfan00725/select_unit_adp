import {
  getLessonById,
  getStudentById,
  getFieldById,
  getTeacherById,
  updateLesson,
  updateStudent,
  updateField,
  updateTeacher,
  getGeneralByKey, // Added for General entity
  updateGeneral,
  updateUser,
  getUserById, // Added for General entity
} from "@/lib/actions";
import { validateLessonSafe, validateStudentSafe } from "@/lib/validations";
import {
  safeValidateField as validateFieldSafe,
  safeValidateTeacher as validateTeacherSafe,
  validateGeneralSafe, // Added for General entity
} from "@/lib/validations";
import { urls } from "../urls";
import { CreateEditProps } from "@/types/Props";
import {
  lessonFormConfigGenerator,
  studentFormConfigGenerator,
  fieldFormConfigGenerator,
  teacherFormConfigGenerator,
  generalFormConfigGenerator,
  userFormConfigGenerator, // Added for General entity
} from "./FormConfigs";
import { PageType } from "@/types/General";
import { validateUserSafe } from "@/lib/validations/user";

export const LessonEditConfig: CreateEditProps<any, any> = {
  submitFunction: updateLesson,
  validateFunction: validateLessonSafe,
  formGenerator: lessonFormConfigGenerator,
  getDataById: (id: string) => getLessonById(id, false),
  entityName: "درس‌ها",
  redirectUrl: urls.lessons,
};

export const StudentEditConfig: CreateEditProps<any, any> = {
  submitFunction: updateStudent,
  validateFunction: validateStudentSafe,
  formGenerator: studentFormConfigGenerator,
  getDataById: getStudentById,
  entityName: "اندانش‌آموز",
  redirectUrl: urls.students,
};

export const FieldEditConfig: CreateEditProps<any, any> = {
  submitFunction: updateField,
  validateFunction: validateFieldSafe,
  formGenerator: fieldFormConfigGenerator,
  getDataById: getFieldById,
  entityName: "رشته‌ها",
  redirectUrl: urls.fields,
};

export const TeacherEditConfig: CreateEditProps<any, any> = {
  submitFunction: updateTeacher,
  validateFunction: validateTeacherSafe,
  formGenerator: teacherFormConfigGenerator,
  getDataById: getTeacherById,
  entityName: "دبیران",
  redirectUrl: urls.teachers,
};

export const GeneralEditConfig: CreateEditProps<any, any> = {
  submitFunction: updateGeneral,
  validateFunction: validateGeneralSafe,
  formGenerator: generalFormConfigGenerator,
  getDataById: getGeneralByKey,
  entityName: "تنظیمات عمومی",
  redirectUrl: urls.generals,
  backToSingle: false,
};

export const UserEditConfig: CreateEditProps<any, any> = {
  submitFunction: updateUser,
  validateFunction: validateUserSafe,
  formGenerator: userFormConfigGenerator,
  getDataById: getUserById,
  entityName: "کاربران",
  redirectUrl: urls.generals,
  backToSingle: false,
};

export const EditPageConfigs: { [K in PageType]?: CreateEditProps<any, any> } =
  {
    fields: FieldEditConfig,
    lessons: LessonEditConfig,
    students: StudentEditConfig,
    teachers: TeacherEditConfig,
    generals: GeneralEditConfig,
    user: UserEditConfig, // Added for User entity
  };
