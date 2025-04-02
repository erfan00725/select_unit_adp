// Data type definitions

// Import necessary enum types from Prisma
import { Grade, LessonGrade, UserType, Period } from "@/generated/prisma";
import { Orders } from "./General";

export type DataBaseType = {
  id: string | bigint;
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
  Grade: Grade;
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
  TeacherId: bigint;
  LessonName: string;
  Unit: number;
  Grade: LessonGrade;
  fieldId?: bigint;
  PassCondition?: number;
  TheoriHours?: number;
  PracticalHours?: number;
  RequireLesson?: number;
  RequireUnit?: bigint;
  NotifCode: bigint;
  ValidFrom: Date;
  ValidTill?: Date;
  PricePerUnit?: bigint;
}

export interface SelectUnitDataType {
  StudentId: bigint;
  LessonId: bigint;
  Year: number;
  Period: Period;
  ExtraFee?: bigint;
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
