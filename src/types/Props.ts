import { SelectButtonProps } from "@/components/ui/SelectButton";

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

export type FormInputProps = {
  type: string;
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
