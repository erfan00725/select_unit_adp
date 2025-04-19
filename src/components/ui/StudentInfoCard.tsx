import { getStudentById } from "@/lib/actions";
import { notFound } from "next/navigation";
import React from "react";

interface StudentInfoProps {
  studentId: string;
}

const StudentInfoCard: React.FC<StudentInfoProps> = async ({ studentId }) => {
  const studentData = await getStudentById(BigInt(studentId));
  const student = studentData.student;

  if (!student) {
    return notFound();
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-sm text-gray-500">Student Name:</h3>
          <p className="font-medium">{`${student.FirstName} ${student.LastName}`}</p>
        </div>
        <div>
          <h3 className="text-sm text-gray-500">National Code:</h3>
          <p className="font-medium">{student.NationalCode}</p>
        </div>
        <div>
          <h3 className="text-sm text-gray-500">Student ID:</h3>
          <p className="font-medium">#{studentId}</p>
        </div>
        <div>
          <h3 className="text-sm text-gray-500">Program:</h3>
          <p className="font-medium">{student.field.Name || "_"}</p>
        </div>
        <div>
          <h3 className="text-sm text-gray-500">Grade:</h3>
          <p className="font-medium">{student.Grade || "_"}</p>
        </div>
      </div>
    </div>
  );
};

export default StudentInfoCard;
