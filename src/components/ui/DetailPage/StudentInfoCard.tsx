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
          <h3 className="text-sm text-gray-500">نام دانشجو:</h3>
          <p className="font-medium">{`${student.FirstName} ${student.LastName}`}</p>
        </div>
        <div>
          <h3 className="text-sm text-gray-500">کد ملی:</h3>
          <p className="font-medium">{student.NationalCode}</p>
        </div>
        <div>
          <h3 className="text-sm text-gray-500">شماره دانشجویی:</h3>
          <p className="font-medium">#{studentId}</p>
        </div>
        <div>
          <h3 className="text-sm text-gray-500">رشته:</h3>
          <p className="font-medium">{student.field.Name || "_"}</p>
        </div>
        <div>
          <h3 className="text-sm text-gray-500">مقطع:</h3>
          <p className="font-medium">{student.Grade || "_"}</p>
        </div>
      </div>
    </div>
  );
};

export default StudentInfoCard;
