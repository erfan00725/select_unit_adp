import SelectUnit from "@/components/ui/CourseSelection";
import PageHeader from "@/components/ui/PageHeader";
import { selectedCourses, studentData } from "@/constants/testdata";
import React from "react";

const StudentCourses = () => {
  return (
    <div>
      <PageHeader title="Student Courses" />
      <SelectUnit selectedCourses={selectedCourses} studentData={studentData} />
    </div>
  );
};

export default StudentCourses;
