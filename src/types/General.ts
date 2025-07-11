import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ReadonlyURLSearchParams } from "next/navigation";
import { DetailPageRow } from "./Props";

export type ActionReturnType<
  T extends (...args: any[]) => any
> = Awaited<ReturnType<T>>;

export interface FilterOptionType {
  type: "text" | "number" | "date" | "select" | "checkbox";
  name: string;
  label?: string;
  placeholder?: string;
  defaultValue?: string | number | boolean;
  options?: { label: string; value: string | number }[];
};

export type UseSearchParamsType = {
  searchParams: ReadonlyURLSearchParams;
  createQueryString: (name: string, value: string) => string;
  router: AppRouterInstance;
  pathname: string;
};

export type Orders = "asc" | "desc";

export enum PageType {
  Lesson = "lessons",
  Student = "students",
  Field = "fields",
  Teacher = "teachers",
  SelectUnit = "selectUnit",
  General = "generals",
  User = "user",
}

export enum Settings {
  FixedFee = "fixedFee",
  PricePerUnitFirst = "pricePerUnitFirst",
  PricePerUnitSecond = "pricePerUnitSecond",
  CertificateFee = "certificateFee",
  ExtraClassFee = "extraClassFee",
  BooksFee = "booksFee",
  LearnedFeeFirst = "learnedFeeFirst",
  LearnedFeeSecond = "learnedFeeSecond",
  InsuranceFee = "insuranceFee",
  SkillRegistrationFee = "skillRegistrationFee",
  OtherFee = "otherFee",
  Founder = "founder",
  BankAccount = "bankAccount",
  BankName = "bankName",
  BankBranch = "bankBranch",
  BankCode = "bankCode",
}

export type DeleteFunctionReturnType = Promise<{
  success?: boolean;
  error?: string;
}>;
export type DeleteFunction = (id: string) => DeleteFunctionReturnType;

export type InfoPageConfig = {
  id: string;
  title: string;
  createdAt?: string;
  modifiedAt?: string;
  rows?: DetailPageRow[];
};