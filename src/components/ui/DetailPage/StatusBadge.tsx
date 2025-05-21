import React from "react";

type StatusVariant =
  | "active"
  | "inactive"
  | "pending"
  | "archived"
  | "outOfStock"
  | "paid"
  | "unpaid";

interface StatusBadgeProps {
  status: string;
  variant?: StatusVariant;
  className?: string;
}

const getStatusStyles = (variant: StatusVariant): string => {
  const styles = {
    active: "bg-green-100 text-green-800",
    inactive: "bg-gray-100 text-gray-800",
    pending: "bg-yellow-100 text-yellow-800",
    archived: "bg-blue-100 text-blue-800",
    outOfStock: "bg-red-100 text-red-800",
    paid: "bg-green-100 text-green-800",
    unpaid: "bg-red-100 text-red-800",
  };

  return styles[variant] || styles.inactive;
};

const statusTextMap: Record<string, string> = {
  active: "فعال",
  inactive: "غیرفعال",
  pending: "در انتظار",
  archived: "بایگانی‌شده",
  outOfStock: "ناموجود",
  paid: "پرداخت شده",
  unpaid: "پرداخت نشده",
};

const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  variant = "active",
  className = "",
}) => {
  const baseStyles = "px-2 py-1 text-xs font-medium rounded-full";
  const variantStyles = getStatusStyles(variant as StatusVariant);
  const localizedStatus = statusTextMap[status] || status;

  return (
    <span className={`${baseStyles} ${variantStyles} ${className}`}>
      {localizedStatus}
    </span>
  );
};

export default StatusBadge;
