import React from "react";

interface InfoRowProps {
  label: string;
  value?: React.ReactNode;
  className?: string;
}

const InfoRow: React.FC<InfoRowProps> = ({ label, value, className = "" }) => {
  return (
    <div className={`mb-2 ${className}`}>
      <h3 className="text-sm text-gray-500">{label}:</h3>
      <p className="font-medium">{value || "_"}</p>
    </div>
  );
};

export default InfoRow;
