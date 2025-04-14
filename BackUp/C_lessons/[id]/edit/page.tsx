"use client";

import { lessonFormConfigGenerator } from "@/constants/configs";
import { getLessonById, updateLesson } from "@/lib/actions";
import React, { use } from "react";
import CreateEditPage from "@/components/ui/pages/CreateEditPage";
import { urls } from "@/constants/urls";
import { validateLessonSafe } from "@/lib/validations";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  return (
    <CreateEditPage
      submitFunction={updateLesson}
      validateFunction={validateLessonSafe}
      id={id}
      formGenerator={lessonFormConfigGenerator}
      getDataById={getLessonById}
      entityName="Lessons"
      redirectUrl={urls.lessons}
    />
  );
}
