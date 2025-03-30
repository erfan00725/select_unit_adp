import Form from "../Form";
import PageHeader from "../PageHeader";
import { FormPageProps } from "@/types/Props";

const FormPage: React.FC<FormPageProps> = (props) => {
  return (
    <div className="container_center">
      <Form {...props} Header={<PageHeader {...props} />} />
    </div>
  );
};

export default FormPage;
