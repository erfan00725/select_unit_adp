import FormPage from "@/components/ui/pages/FormPage";
import { lessonFormConfigGenerator } from "@/constants/configs";
import { getLessonById } from "@/lib/actions";
import { FormPageProps } from "@/types/Props";
import React from "react";

export default async function EditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const paramsRes = await params;
  const lessonData = await getLessonById(BigInt(paramsRes.id));
  let formConfig: FormPageProps = lessonFormConfigGenerator(lessonData);

  return <FormPage {...formConfig} />;
}
