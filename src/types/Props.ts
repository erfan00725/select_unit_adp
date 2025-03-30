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
  }[];
  children?: React.ReactNode;
  className?: string;
  addText?: string;
  onSubmit?: (formData: Record<string, any>) => void;
};

export type FormPageProps = FormProps & PageHeaderProps;
