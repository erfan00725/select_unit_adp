import { Lesson } from "@prisma/client";
import React from "react";

export default function calcTotalUnit(lessons: Lesson[]) {
  return lessons.reduce((acc, lesson) => {
    return acc + (lesson.TheoriUnit || 0) + (lesson.PracticalUnit || 0);
  }, 0);
}
