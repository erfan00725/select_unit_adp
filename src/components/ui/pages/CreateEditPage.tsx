"use client";

import Loading from "@/components/common/Loading";
import FormPage from "@/components/ui/pages/FormPage";
import { useFormSubmit } from "@/lib/hooks/useFormSubmit";
import { CreateEditProps, FormPageProps } from "@/types/Props";
import React, { useEffect, useState } from "react";

export default function CreateEditPage<T extends (...args: any) => any, S>({
  id,
  formGenerator,
  entityName,
  getDataById,
  redirectUrl,
  submitFunction,
  validateFunction,
  backToSingle = true,
}: CreateEditProps<T, S>) {
  const [formConfig, setFormConfig] = useState<FormPageProps | null>(null);
  const { submitForm, isLoading } = useFormSubmit();

  useEffect(() => {
    const fetchData = async () => {
      const lessonData = getDataById && id ? await getDataById(id) : undefined;
      const config = await formGenerator(lessonData);
      setFormConfig(config);
    };

    fetchData();
  }, [id]);

  const onSubmit = (formData: Record<string, any>) => {
    submitForm({
      id,
      formData,
      validateFn: validateFunction,
      submitFn: submitFunction,
      entityName: entityName,
      redirectUrl: `${redirectUrl}/${(backToSingle && id) || ""}`,
    });
  };

  if (!formConfig) {
    return <Loading />;
  }

  return (
    <FormPage {...formConfig} onSubmit={onSubmit} isSubmiting={isLoading} />
  );
}
