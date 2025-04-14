"use client";
import CreateEditPage from "@/components/ui/pages/CreateEditPage";
import { studentFormConfigGenerator } from "@/constants/configs";
import { urls } from "@/constants/urls";
import { getStudentById, updateStudent } from "@/lib/actions";
import { validateStudentSafe } from "@/lib/validations";
import React, { use } from "react";

const Page = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);

  return (
    <CreateEditPage
      submitFunction={updateStudent}
      validateFunction={validateStudentSafe}
      formGenerator={studentFormConfigGenerator}
      id={id}
      getDataById={getStudentById}
      entityName="Students"
      redirectUrl={urls.students}
    />
  );
};

export default Page;
