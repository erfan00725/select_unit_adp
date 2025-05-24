import React from "react";

interface InfoRowProps {
  label: string;
  value?: React.ReactNode;
  className?: string;
}

const InfoRow: React.FC<InfoRowProps> = ({ label, value, className = "" }) => {
  return (
    <div className={`mb-2 ${className} print:mb-3 print:break-inside-avoid`}>
      <h3 className="text-sm text-gray-500 print:text-xs print:text-black print:font-semibold print:mb-1">
        {label}:
      </h3>
      <p className="font-medium print:text-sm print:text-black print:leading-relaxed">
        {value || "_"}
      </p>
    </div>
  );
};

export default InfoRow;
