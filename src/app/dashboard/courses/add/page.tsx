import FormPage from "@/components/ui/pages/FormPage";
import { FormPageProps } from "@/types/Props";

const formConfig: FormPageProps = {
  title: "Add New Course",
  description: "Please fill in the course details below",
  inputs: [
    {
      title: "Course Name",
      name: "courseName",
      type: "text",
      placeholder: "Enter course name",
      required: true,
    },
    {
      title: "Course Description",
      name: "courseDescription",
      type: "textarea",
      placeholder: "Enter course description",
    },
    {
      title: "Course Duration (hours)",
      name: "duration",
      type: "number",
      placeholder: "Enter duration",
      required: true,
    },
    {
      title: "Start Date",
      name: "startDate",
      type: "date",
      required: true,
    },
  ],
};

export default function AddCoursePage() {
  return <FormPage {...formConfig} />;
}
