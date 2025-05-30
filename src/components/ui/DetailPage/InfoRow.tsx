import { DetailPageRow } from "@/types/Props";
import React from "react";

const InfoRow: React.FC<DetailPageRow> = ({
  label,
  value,
  className = "",
  showInPrint = true,
}) => {
  return (
    <div
      className={`mb-2 ${className} print:mb-3 print:break-inside-avoid ${
        showInPrint ? "" : "print:hidden"
      }`}
    >
      <h3 className="text-sm text-gray-500 print:text-xs print:text-black print:font-semibold print:mb-0.5">
        {label}:
      </h3>
      <p className="font-medium print:text-xs print:text-black print:leading-relaxed">
        {value || "_"}
      </p>
    </div>
  );
};

export default InfoRow;
