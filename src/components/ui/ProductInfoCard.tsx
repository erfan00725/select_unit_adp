import React from "react";
import InfoRow from "./InfoRow";
import StatusBadge from "./StatusBadge";
import Link from "next/link";
import DisplayLessonHours from "./DisplayLessonHours";
import { DeleteButton } from "./DeleteButton";
import getFarsiDate from "@/lib/getFarsiDate";
import { DetailPageProps, DetailPageRow } from "@/types/Props";

const DetailInfoCard: React.FC<DetailPageProps> = ({
  id,
  title,
  createdAt,
  modifiedAt,
  InfoRows,
  actions,
  baseUrl,
}) => {
  const formatValue = (row: DetailPageRow) => {
    if (!row.value) return null;

    switch (row.type) {
      case "status":
        return <StatusBadge status={row.value as string} variant="active" />;
      case "category":
        return <span className="text-blue-600">{row.value}</span>;
      case "price":
        return <span className="font-semibold">{row.value}</span>;
      case "hours":
        return <DisplayLessonHours hours={row.value?.toString() || ""} />;
      default:
        return row.value;
    }
  };

  const formBaseUrl = `${baseUrl}/${id}`;

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          <p className="text-sm text-gray-500 mt-1">
            شناسه: {id}
            {createdAt && ` • ایجاد: ${getFarsiDate(createdAt)}`}
            {modifiedAt && ` • ویرایش: ${getFarsiDate(modifiedAt)}`}
          </p>
        </div>
        {baseUrl && (
          <div className="flex space-x-2">
            {actions?.map((action) => action)}
            <Link href={`${formBaseUrl}/edit`} className="button_black">
              ویرایش
            </Link>
            <DeleteButton />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {InfoRows.map((row, rowIndex) => (
          <InfoRow key={rowIndex} label={row.label} value={formatValue(row)} />
        ))}
      </div>
    </div>
  );
};

export default DetailInfoCard;
