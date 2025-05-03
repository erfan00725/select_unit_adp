import { SelectButtonProps } from "@/components/ui/Form/SelectButton";
import { DataBaseType } from "./Tables";
import { SubmitFunction, ValidateFunction } from "./Form";

export interface PageHeaderProps {
  title: string;
  description?: string;
}

export enum InpueValueType {
  string,
  number,
  date,
  bool,
}

export enum InputDataType {
  string,
  number,
  bool,
  date,
  bigint,
}

export type FormInputProps = {
  type: string;
  dataType?: InputDataType;
  name: string;
  title?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  required?: boolean;
  defaultValue?: string;
  value?: string | number | readonly string[];
  onChange?: (value: string | number | readonly string[] | undefined) => void;
  SelectButtonProps?: SelectButtonProps;
  valueType?: InpueValueType;
};

export type FormProps = {
  Header?: React.ReactNode;
  inputs: FormInputProps[];
  children?: React.ReactNode;
  className?: string;
  addText?: string;
  onSubmit?: (formData: Record<string, any>) => void;
  useDefaultValues?: boolean;
};

export type FormPageProps = FormProps & PageHeaderProps;

export type PageTableProps = {
  limit?: number;
};

export interface SearchFilterBarProps {
  onSearch?: (value: string) => void;
  onCategoryChange?: (category: string) => void;
  onDateChange?: (date: string) => void;
  onPriceRangeChange?: (min: number, max: number) => void;
  onSortChange?: (sortOption: string) => void;
  onFilterRemove?: (filterId: string) => void;
  onClearAllFilters?: () => void;
}

// in href "$?" will replace with data id
export type DataTableAction = {
  label: string;
  href?: string;
  onClick?: (id: string) => void;
  className?: string;
  icon?: React.ReactNode;
};

export type DataTableProps<T extends DataBaseType> = {
  title: string;
  description?: string;
  tableData: T[];
  headers: string[];
  addButtonLabel?: string;
  baseUrl?: string;
  editUrl?: string;
  addUrl?: string;
  deleteUrl?: string;
  limit?: number;
  scrollable?: boolean;
  actions?: DataTableAction[];
  canAdd?: boolean;
  editable?: boolean;
};

export type CreateEditProps<T extends (...args: any) => any, S> = {
  id?: string;
  formGenerator: (data?: Awaited<ReturnType<T>>) => Promise<FormPageProps>;
  getDataById?: (id: bigint) => ReturnType<T>;
  entityName: string;
  redirectUrl?: string;
  submitFunction: SubmitFunction<S>;
  validateFunction: ValidateFunction<S>;
};

export interface DetailPageProps {
  id: string;
  title: string;
  createdAt?: string;
  modifiedAt?: string;
  InfoRows: DetailPageRow[];
  actions?: React.ReactNode[];
  baseUrl?: string;
  editUrl?: string;
}

export interface DetailPageRow {
  label: string;
  value?: React.ReactNode;
  type?: "text" | "status" | "category" | "price" | "number" | "hours";
}
