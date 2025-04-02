import FormPage from "@/components/ui/pages/FormPage";
import { lessonFormConfigGenerator } from "@/constants/configs";

export default function AddCoursePage() {
  let formConfig = lessonFormConfigGenerator();

  return <FormPage {...formConfig} />;
}
