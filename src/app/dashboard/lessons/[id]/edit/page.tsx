"use client";

import Loading from "@/components/common/Loading";
import FormPage from "@/components/ui/pages/FormPage";
import { lessonFormConfigGenerator } from "@/constants/configs";
import { getLessonById, updateLesson } from "@/lib/actions";
import { validateLessonUpdateSafe } from "@/lib/validations";
import { useFormSubmit } from "@/lib/hooks/useFormSubmit";
import { FormPageProps } from "@/types/Props";
import React, { use, useEffect, useState } from "react";

export default function EditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [formConfig, setFormConfig] = useState<FormPageProps | null>(null);
  const { id } = use(params);
  const { submitForm } = useFormSubmit();

  useEffect(() => {
    const fetchData = async () => {
      const lessonData = await getLessonById(BigInt(id));
      const config = await lessonFormConfigGenerator(lessonData);
      setFormConfig(config);
    };

    fetchData();
  }, [id]);

  const onSubmit = (formData: Record<string, any>) => {
    submitForm({
      id,
      formData,
      validateFn: validateLessonUpdateSafe,
      submitFn: updateLesson,
      entityName: "lesson",
      redirectUrl: "/dashboard/lessons/" + id,
    });
  };

  if (!formConfig) {
    return <Loading />;
  }

  return <FormPage {...formConfig} onSubmit={onSubmit} />;
}
