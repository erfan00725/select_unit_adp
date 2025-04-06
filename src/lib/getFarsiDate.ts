import React from "react";

export default function getFarsiDate(date: Date | string | number) {
  return new Date(date).toLocaleDateString("fa-IR");
}
