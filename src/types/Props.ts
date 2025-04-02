export interface PageHeaderProps {
  title: string;
  description?: string;
}

export type FormProps = {
  Header?: React.ReactNode;
  inputs: {
    type: string;
    name: string;
    title?: string;
    placeholder?: string;
    icon?: React.ReactNode;
    required?: boolean;
    defaultValue?: string;
  }[];
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

export interface SelectItemsProps {
  items: {
    id: string;
    name: string;
    [key: string]: any; // Allow for additional properties
  }[];
  onSelectionChange?: (selectedItems: any[]) => void;
  onSave?: (selectedItems: any[]) => void;
  onCancel?: () => void;
  title?: string;
  searchPlaceholder?: string;
  className?: string;
  initialSelectedItems?: any[];
}
