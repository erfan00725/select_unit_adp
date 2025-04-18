"use client";
import CreateEditPage from "@/components/ui/pages/CreateEditPage";
import { lessonFormConfigGenerator } from "@/constants/configs/FormConfigs";
import { urls } from "@/constants/urls";
import { createLesson } from "@/lib/actions";
import { validateLessonSafe } from "@/lib/validations";

export default function AddCoursePage() {
  return (
    <CreateEditPage
      entityName="Lesson"
      formGenerator={lessonFormConfigGenerator}
      submitFunction={createLesson}
      validateFunction={validateLessonSafe}
      redirectUrl={urls.lessons}
    />
  );
}
