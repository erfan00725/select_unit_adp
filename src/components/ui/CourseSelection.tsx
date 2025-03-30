"use client";
import React, { useState } from "react";
import PageHeader from "@/components/ui/PageHeader";
import StudentInfoCard from "@/components/ui/StudentInfoCard";
import CourseSelectionTable from "@/components/ui/CourseSelectionTable";
import Link from "next/link";

interface Course {
  id: string;
  courseName: string;
  description: string;
  price: string;
}

interface Student {
  studentName: string;
  studentId: string;
  email: string;
  program: string;
}

type Props = {
  studentData: Student;
  selectedCourses: Course[];
  editable?: boolean;
};

const SelectUnit = ({
  selectedCourses,
  studentData,
  editable = true,
}: Props) => {
  // Calculate total price
  const totalPrice = selectedCourses.reduce((total, course) => {
    const price = parseInt(course.price.replace(/[^0-9]/g, ""));
    return total + price;
  }, 0);

  // Handle remove course
  const handleRemoveCourse = (courseId: string) => {};

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="Course Selection"
        description="Choose from our available courses"
      />

      {/* Student Information Card */}
      <StudentInfoCard
        studentName={studentData.studentName}
        studentId={studentData.studentId}
        email={studentData.email}
        program={studentData.program}
      />

      {/* Course Selection Table */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">Selected Courses</h2>
          {editable && (
            <Link
              href="/"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Course
            </Link>
          )}
        </div>

        <CourseSelectionTable
          courses={selectedCourses}
          onRemoveCourse={handleRemoveCourse}
          editable={editable}
        />

        <div className="mt-6 text-right">
          <p className="text-lg font-bold">Total: ${totalPrice}</p>
        </div>
      </div>

      {/* Action Buttons */}
      {editable && (
        <div className="flex justify-end space-x-4">
          <button className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Cancel
          </button>
          <button className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Confirm Selection
          </button>
        </div>
      )}
    </div>
  );
};

export default SelectUnit;
