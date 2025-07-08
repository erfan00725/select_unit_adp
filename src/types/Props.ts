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
  disabled?: boolean;
};

export type FormProps = {
  Header?: React.ReactNode;
  inputs: FormInputProps[];
  children?: React.ReactNode;
  className?: string;
  addText?: string;
  onSubmit?: (formData: Record<string, any>) => void;
  useDefaultValues?: boolean;
  isSubmiting?: boolean;
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
  label?: string;
  labelFn?: (id: string) => any;
  href?: string;
  onClick?: (id: string) => void;
  className?: string;
  icon?: React.ReactNode;
};

export type DataTableGeneralAction = {
  label: string;
  onClick?: (selectedItems?: string[]) => void;
  className?: string;
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
  canRemove?: boolean;
  editable?: boolean;
  haveSinglePage?: boolean;
  selectable?: boolean;
  generalActions?: DataTableGeneralAction[];
  showId?: boolean;
};

export type CreateEditProps<T extends (...args: any) => any, S> = {
  id?: string;
  formGenerator: (data?: Awaited<ReturnType<T>>) => Promise<FormPageProps>;
  getDataById?: (id: string) => ReturnType<T>;
  entityName: string;
  redirectUrl?: string;
  submitFunction: SubmitFunction<S>;
  validateFunction: ValidateFunction<S>;
  backToSingle?: boolean;
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
  printTitle?: string | React.ReactNode;
  canEdit?: boolean;
}

export interface DetailPageRow {
  label: string;
  value?: React.ReactNode;
  type?: "text" | "status" | "category" | "price" | "number" | "hours";
  showInPrint?: boolean;
  className?: string;
}

export type InputValueType = Record<
  string,
  { active: boolean; value: string | number }
>;

export type SelectUnitFormConfig = {
  id: string;
  label: string;
  type: "select" | "number" | "price" | "text" | string;
  name: string;
  options?: Array<{ value: string; label: string }>;
  required?: boolean;
  className?: string;
  canBeDisabled?: boolean;
};

export type SelectUnitFormInpursProps = {
  configs: SelectUnitFormConfig[];
  initialValues?: InputValueType; // Added for edit mode
  onInputsChange?: (inputsValue: InputValueType) => void;
};
