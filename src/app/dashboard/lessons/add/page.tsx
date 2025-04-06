"use client";
import FormPage from "@/components/ui/pages/FormPage";
import { lessonFormConfigGenerator } from "@/constants/configs";
import { createLesson } from "@/lib/actions";
import { validateLessonSafe } from "@/lib/validations";
import { useFormSubmit } from "@/lib/hooks/useFormSubmit";
import { FormPageProps } from "@/types/Props";
import { useEffect, useState } from "react";

export default function AddCoursePage() {
  const [formConfig, setFormConfig] = useState<FormPageProps | null>(null);
  const { submitForm } = useFormSubmit();

  useEffect(() => {
    const fetchData = async () => {
      const config = await lessonFormConfigGenerator();
      setFormConfig(config);
    };

    fetchData();
  }, []);

  const onSubmit = (formData: Record<string, any>) => {
    submitForm({
      formData,
      validateFn: validateLessonSafe,
      submitFn: createLesson,
      entityName: "lesson",
      redirectUrl: "/dashboard/lessons",
    });
  };

  return formConfig && <FormPage {...formConfig} onSubmit={onSubmit} />;
}
