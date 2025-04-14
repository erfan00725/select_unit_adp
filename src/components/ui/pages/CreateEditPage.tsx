"use client";

import Loading from "@/components/common/Loading";
import FormPage from "@/components/ui/pages/FormPage";
import { useFormSubmit } from "@/lib/hooks/useFormSubmit";
import { FormPageProps } from "@/types/Props";
import React, { useEffect, useState } from "react";
import { SubmitFunction, ValidateFunction } from "@/types/Form";

type Props<T extends (...args: any) => any, S> = {
  id?: string;
  formGenerator: (data?: Awaited<ReturnType<T>>) => Promise<FormPageProps>;
  getDataById?: (id: bigint) => ReturnType<T>;
  entityName: string;
  redirectUrl?: string;
  submitFunction: SubmitFunction<S>;
  validateFunction: ValidateFunction<S>;
};

export default function CreateEditPage<T extends (...args: any) => any, S>({
  id,
  formGenerator,
  entityName,
  getDataById,
  redirectUrl,
  submitFunction,
  validateFunction,
}: Props<T, S>) {
  const [formConfig, setFormConfig] = useState<FormPageProps | null>(null);
  const { submitForm } = useFormSubmit();

  useEffect(() => {
    const fetchData = async () => {
      const lessonData =
        getDataById && id ? await getDataById(BigInt(id)) : undefined;
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
      redirectUrl: `${redirectUrl}/${id || ""}`,
    });
  };

  if (!formConfig) {
    return <Loading />;
  }

  return <FormPage {...formConfig} onSubmit={onSubmit} />;
}
