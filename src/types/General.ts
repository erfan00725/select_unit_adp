import { DetailPageRow } from "./Props";

export type InfoPageConfig = {
  id: string;
  title: string;
  createdAt?: string;
  modifiedAt?: string;
  rows?: DetailPageRow[];
};

export interface FilterOptionType {
  type: "text" | "number" | "date" | "select" | "checkbox";
  name: string;
  label?: string;
  placeholder?: string;
  defaultValue?: string | number | boolean;
  options?: { label: string; value: string | number }[];
}

export type Orders = "asc" | "desc";

export enum PageType {
  Lesson = "lessons",
  Student = "students",
  Field = "fields",
  Teacher = "teachers",
  SelectUnit = "selectUnit",
  General = "generals",
}

export type ActionReturnType<T extends (...args: any[]) => any> = Awaited<
  ReturnType<T>
>;

export enum Settings {
  FixedFee = "fixedFee",
  CertificateFee = "certificateFee",
  BooksFee = "booksFee",
  PricePerUnit = "pricePerUnit",
  ExtraClassFee = "extraClassFee",
}

export type DeleteFunctionReturnType = Promise<{
  success?: boolean;
  error?: string;
}>;
export type DeleteFunction = (id: string) => DeleteFunctionReturnType;
