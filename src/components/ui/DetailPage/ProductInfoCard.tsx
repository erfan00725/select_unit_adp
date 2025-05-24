import React from "react";
import InfoRow from "./InfoRow";
import StatusBadge from "./StatusBadge";
import Link from "next/link";
import DisplayLessonHours from "../DisplayLessonHours";
import { DeleteButton } from "./DeleteButton";
import getFarsiDate from "@/lib/getFarsiDate";
import { DetailPageProps, DetailPageRow } from "@/types/Props";
import { priceFormatter } from "@/lib/utils/priceFormatter";

const DetailInfoCard: React.FC<DetailPageProps> = ({
  id,
  title,
  createdAt,
  modifiedAt,
  InfoRows,
  actions,
  baseUrl,
  editUrl,
}) => {
  const formatValue = (row: DetailPageRow) => {
    if (!row.value && row.type !== "status") return null;

    switch (row.type) {
      case "status":
        return (
          <StatusBadge
            status={row.value ? "paid" : "unpaid"}
            variant={row.value ? "paid" : "unpaid"}
          />
        );
      case "category":
        return <span className="text-blue-600">{row.value}</span>;
      case "price":
        return (
          <span className="font-semibold">
            {priceFormatter(row.value?.toString(), true)}
          </span>
        );
      case "hours":
        return <DisplayLessonHours hours={row.value?.toString() || ""} />;
      default:
        return row.value;
    }
  };

  const formBaseUrl = `${baseUrl}/${id}`;

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden print:shadow-none print:rounded-none print:overflow-visible">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 flex justify-between items-center print:p-4 print:border-b-2 print:border-black print:flex-col print:items-start print:gap-2">
        <div className="print:w-full">
          <h1 className="text-2xl font-bold text-gray-900 print:text-xl print:text-black print:mb-2">
            {title}
          </h1>
          <p className="text-sm text-gray-500 mt-1 print:hidden">
            شناسه: {id}
            {createdAt && ` • ایجاد: ${getFarsiDate(createdAt)}`}
            {modifiedAt && ` • ویرایش: ${getFarsiDate(modifiedAt)}`}
          </p>
        </div>
        {baseUrl && (
          <div className="flex space-x-2 print:hidden">
            {actions?.map((action) => action)}
            <Link
              href={editUrl ? editUrl : `${formBaseUrl}/edit`}
              className="button_black"
            >
              ویرایش
            </Link>
            <DeleteButton />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8 print:p-4 print:grid-cols-3 print:gap-2 print:text-black">
        {InfoRows.map((row, rowIndex) => (
          <InfoRow key={rowIndex} label={row.label} value={formatValue(row)} />
        ))}
      </div>
    </div>
  );
};

export default DetailInfoCard;
