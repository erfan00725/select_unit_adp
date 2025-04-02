import React from "react";

export default function DisplayLessonHours({ hours }: { hours: string }) {
  const hoursSplit = hours.split(".", 2);
  return <div>DisplayLessonHours</div>;
}
