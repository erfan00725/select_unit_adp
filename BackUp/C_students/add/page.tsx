"use client";
import CreateEditPage from "@/components/ui/pages/CreateEditPage";
import { studentFormConfigGenerator } from "@/constants/configs";
import { urls } from "@/constants/urls";
import { createStudent } from "@/lib/actions";
import { validateStudentSafe } from "@/lib/validations";

const AddCoursePage = () => {
  return (
    <CreateEditPage
      submitFunction={createStudent}
      validateFunction={validateStudentSafe}
      formGenerator={studentFormConfigGenerator}
      entityName="Students"
      redirectUrl={urls.students}
    />
  );
};

export default AddCoursePage;
