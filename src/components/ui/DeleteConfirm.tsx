"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { urls } from "@/constants/urls";
import { useSeachParams } from "@/lib/hooks/useSeachParams";

type Props = {
  id: string;
  deleteFounction: (id: bigint) => Promise<
    | {
        error: string;
        success?: undefined;
      }
    | {
        success: boolean;
        error?: undefined;
      }
  >;
  onDelete?: () => void;
  title?: string;
  backUrl?: string;
};

export default function DeleteConfirm({
  id,
  deleteFounction,
  onDelete,
  title,
  backUrl,
}: Props) {
  const router = useRouter();
  const { getSearchParam, clearSearchParams } = useSeachParams();
  if (!getSearchParam("delete")) {
    return null;
  }

  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("handleDelete");
    const res = await deleteFounction(BigInt(id));
    if (res.error) {
      toast.error(res.error);
      return;
    }
    onDelete?.();
    toast.success("Deleted successfully");
    router.push(backUrl || urls.dashboard);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-5">
      <h1 className="text-2xl font-bold text-red-600 mb-4">
        Delete Confirmation
      </h1>
      <p className="text-gray-700 mb-6">
        Are you sure you want to delete this {title || "item"}? This action
        cannot be undone.
      </p>
      <div className="flex space-x-4 mt-6">
        <button
          onClick={handleDelete}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Confirm Delete
        </button>
        <button
          onClick={clearSearchParams}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Cancel
        </button>
      </div>{" "}
    </div>
  );
}
