// Data type definitions

// Import necessary enum types from Prisma
import { Grade, LessonGrade, UserType, SelectUnit } from "@prisma/client";
import { Orders } from "./General";

export type DataBaseType = {
  id: string | bigint;
  Config?: {
    editUrl?: string;
    [key: string]: any;
  };
};

export type pagination = {
  total: number;
  totalPages: number;
  currentPage: number;
  limit: number;
};

export interface CourseDataType extends DataBaseType {
  courseName: string;
  description: string;
  price: string;
}

// Types from actions folder
export interface FieldDataType extends DataBaseType {
  Name: string;
  FixedFee: bigint;
}

export interface StudentDataType extends DataBaseType {
  FirstName: string;
  LastName: string;
  NationalCode: string;
  Father?: string;
  Birth?: Date;
  Address?: string;
  HomeNumber?: string;
  PhoneNumber?: string;
  fieldId: bigint;
  Grade?: Grade;
}

export interface TeacherDataType extends DataBaseType {
  NationalCode: string;
  FirstName: string;
  LastName: string;
  PhoneNumber: string;
  fieldId?: bigint;
  Birth?: Date;
}

export interface LessonDataType extends DataBaseType {
  TeacherId?: bigint;
  LessonName: string;
  PracticalUnit: number;
  TheoriUnit: number;
  Grade?: LessonGrade;
  fieldId?: bigint;
  PassCondition?: number;
  TheoriHours?: number;
  PracticalHours?: number;
  RequireLesson?: bigint;
  RequireUnit?: number;
  NotifCode?: bigint;
  ValidFrom?: Date;
  ValidTill?: Date;
  PricePerUnit?: bigint;
  Created_at?: Date;
  Updated_at?: Date;
}

export type SelectUnitDataType = Partial<
  Omit<SelectUnit, "Year" | "Period" | "StudentId">
> &
  Pick<SelectUnit, "Year" | "Period" | "StudentId">;

export interface SelectedLessonDataType {
  id?: bigint;
  selectUnitId: bigint;
  lessonId: bigint;
}

export interface UserDataType extends DataBaseType {
  UserName: string;
  Password: string;
  Type?: UserType;
}

export interface GeneralDataType extends DataBaseType {
  Key: string;
  Value: string;
}

export interface BaseListFilterParams {
  query?: string;
  order?: Orders;
  limit?: number;
  page?: number;
  from?: Date;
  to?: Date;
}
