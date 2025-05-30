import React from "react";
import Logo from "./Logo";
import { PageHeaderProps } from "@/types/Props";

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="text-center mb-10 print:hidden">
      <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}
