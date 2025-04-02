"use client";
import { useSeachParams } from "@/lib/hooks/useSeachParams";
import React from "react";

export const DeleteButton = () => {
  const { setSearchParam } = useSeachParams();

  return (
    <button
      onClick={() => {
        setSearchParam("delete", "true");
      }}
      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
    >
      Delete
    </button>
  );
};
