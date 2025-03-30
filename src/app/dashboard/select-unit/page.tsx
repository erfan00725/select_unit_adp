import React from "react";
import SelectUnit from "@/components/ui/CourseSelection";
import { selectedCourses, studentData } from "@/constants/testdata";

const SelectUnitPage = () => {
  return (
    <SelectUnit selectedCourses={selectedCourses} studentData={studentData} />
  );
};

export default SelectUnitPage;
