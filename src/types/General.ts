import { ProductInfoRow } from "@/components/ui/ProductInfoCard";

export type InfoPageConfig = {
  id: string;
  title: string;
  createdAt?: string;
  modifiedAt?: string;
  rows?: ProductInfoRow[];
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
