import React from "react";

interface StudentInfoProps {
  studentName: string;
  studentId: string;
  email: string;
  program: string;
}

const StudentInfoCard: React.FC<StudentInfoProps> = ({
  studentName,
  studentId,
  email,
  program,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-sm text-gray-500">Student Name:</h3>
          <p className="font-medium">{studentName}</p>
        </div>
        <div>
          <h3 className="text-sm text-gray-500">Email:</h3>
          <p className="font-medium">{email}</p>
        </div>
        <div>
          <h3 className="text-sm text-gray-500">Student ID:</h3>
          <p className="font-medium">#{studentId}</p>
        </div>
        <div>
          <h3 className="text-sm text-gray-500">Program:</h3>
          <p className="font-medium">{program}</p>
        </div>
      </div>
    </div>
  );
};

export default StudentInfoCard;
