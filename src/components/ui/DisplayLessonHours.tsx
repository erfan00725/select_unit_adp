import React from "react";

// نمایش ساعت و دقیقه به صورت فارسی
export default function DisplayLessonHours({ hours }: { hours: string }) {
  const hoursSplit = hours.split(".", 2);
  const hour = hoursSplit[0] || "0";
  const minute = hoursSplit[1] ? (parseInt(hoursSplit[1]) * 6).toString() : "0";
  return (
    <div>
      {hour !== "0" && <span>{hour} ساعت </span>}
      {minute !== "0" && <span>{minute} دقیقه</span>}
      {hour === "0" && minute === "0" && <span>بدون زمان</span>}
    </div>
  );
}
