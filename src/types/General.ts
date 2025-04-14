import { DetailPageRow } from "@/components/ui/ProductInfoCard";

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
}
