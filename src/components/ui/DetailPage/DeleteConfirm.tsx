"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { homeUrl, urls } from "@/constants/urls";
import { useSearchParams } from "@/lib/hooks/useSeachParams";
import { DeleteFunction } from "@/types/General";

type Props = {
  id: string;
  deleteFounction: DeleteFunction;
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
  const { getSearchParam } = useSearchParams();
  if (!getSearchParam("delete")) {
    return null;
  }

  // const handleDelete = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log("handleDelete");
  //   const res = await deleteFounction(BigInt(id));
  //   if (res.error) {
  //     toast.error(res.error);
  //     return;
  //   }
  //   onDelete?.();
  //   toast.success("Deleted successfully");
  //   router.push(backUrl || urls.dashboard);
  // };

  return (
    <div className="flex flex-col items-center justify-center w-full mb-5">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-red-600">
          {title || "تایید حذف"}
        </h2>
        <p className="mb-6 text-center text-gray-700">
          آیا مطمئن هستید که می‌خواهید این مورد را حذف کنید؟ این عملیات قابل
          بازگشت نیست.
        </p>
        <div className="flex justify-between">
          <button
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none"
            onClick={async () => {
              const result = await deleteFounction(id);
              if (result.success) {
                toast.success("با موفقیت حذف شد");
                onDelete && onDelete();
                router.push(backUrl || homeUrl);
              } else {
                toast.error(result.error || "خطا در حذف");
              }
            }}
          >
            حذف
          </button>
          <Link
            href={backUrl || homeUrl}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 focus:outline-none"
          >
            بازگشت
          </Link>
        </div>
      </div>
    </div>
  );
}
