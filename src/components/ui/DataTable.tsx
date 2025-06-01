"use client";
import { DataTableProps } from "@/types/Props";
import { DataBaseType } from "@/types/Tables";
import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";

const DataTable = <T extends DataBaseType>({
  tableData,
  headers,
  title,
  addButtonLabel,
  baseUrl,
  addUrl: baseAddUrl,
  editUrl: baseEditUrl,
  limit = 50,
  scrollable = false,
  actions,
  canAdd = true,
  editable = true,
  canRemove = true,
  haveSinglePage = true,
  selectable = false,
  generalActions,
}: DataTableProps<T>) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const rows = tableData?.filter((_, index) => index < limit);

  const addUrl = baseAddUrl ? baseAddUrl : baseUrl ? `${baseUrl}/add` : null;
  const editUrl = (id: number | string) => {
    if (!editable) {
      return null;
    }
    return baseEditUrl
      ? baseEditUrl?.replace(":id", id.toString())
      : baseUrl
      ? `${baseUrl}/${id}/edit`
      : null;
  };

  const isEditable = editable && (baseUrl || baseEditUrl);

  return (
    <div className="card mb-8 print:shadow-none! print:p-0! print:rounded-none">
      <h2 className="text-xl font-bold text-gray-900 mb-6 print:text-sm print:text-black print:mb-4 print:border-b print:border-black print:pb-2 print:hidden">
        {title}
      </h2>

      <div
        className={clsx(
          "overflow-x-auto overflow-y-auto print:overflow-visible",
          {
            "overflow-y-scroll!": scrollable,
          }
        )}
      >
        <table className="min-w-full divide-y divide-gray-200 print:text-sm print:border-collapse print:border print:border-gray-400">
          <thead>
            <tr className="text-right print:bg-gray-100">
              {selectable && (
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider print:hidden">
                  انتخاب
                </th>
              )}
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider print:px-0.5 print:py-0.5 print:text-[9px] print:text-black print:font-bold print:border print:border-gray-400"
                >
                  {header}
                </th>
              ))}
              {isEditable || (actions || []).length > 0 ? (
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider print:hidden">
                  عملیات
                </th>
              ) : null}
            </tr>
          </thead>
          {rows && rows.length > 0 ? (
            <tbody className="bg-white divide-y divide-gray-200 print:divide-gray-400">
              {rows?.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="print:break-inside-avoid print:border-b print:border-gray-300"
                >
                  {selectable && (
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 print:hidden">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-indigo-600"
                        checked={selectedItems.includes(row.id.toString())}
                        onChange={() => {
                          if (selectedItems.includes(row.id.toString())) {
                            setSelectedItems(
                              selectedItems.filter(
                                (item) => item !== row.id.toString()
                              )
                            );
                          } else {
                            setSelectedItems([
                              ...selectedItems,
                              row.id.toString(),
                            ]);
                          }
                        }}
                      />
                    </td>
                  )}
                  {Object.entries(row).map(
                    ([key, data], colIndex) =>
                      key === "Config" || (
                        <td
                          key={colIndex}
                          className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 print:px-0.5 print:py-0.5 print:pr-1 print:text-[9px] print:text-black print:border print:border-gray-400 print:whitespace-normal"
                        >
                          {baseUrl && haveSinglePage ? (
                            <Link
                              href={`${baseUrl}/${row.id}`}
                              className="print:no-underline print:text-black"
                            >
                              {(data as String) || "_"}
                            </Link>
                          ) : (
                            (data as String) || "_"
                          )}
                        </td>
                      )
                  )}
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium print:hidden">
                    {actions &&
                      actions.map((action) =>
                        action.href ? (
                          <Link
                            key={action.label}
                            href={action.href.replace("$?", row.id.toString())}
                            className={`tableAction ${action.className}`}
                          >
                            {action.label}
                          </Link>
                        ) : (
                          <span
                            key={action.label}
                            className={`tableAction ${action.className} cursor-pointer`}
                            onClick={() =>
                              action.onClick &&
                              action.onClick(row.id.toString())
                            }
                          >
                            {action.label}
                          </span>
                        )
                      )}
                    {isEditable && (
                      <Link
                        href={
                          row.Config && row.Config.editUrl
                            ? row.Config?.editUrl
                            : editUrl(row.id.toString()) || ""
                        }
                        className="tableAction text-blue-600! hover:text-blue-900!"
                      >
                        ویرایش{" "}
                      </Link>
                    )}
                    {isEditable && canRemove && (
                      <Link
                        href={`${baseUrl}/${row.id}?delete=true`}
                        className="tableAction text-red-600! hover:text-red-900!"
                      >
                        {" "}
                        حذف
                      </Link>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td
                  colSpan={headers.length}
                  className="text-center py-8 text-gray-500 print:py-4 print:text-black print:border print:border-gray-400"
                >
                  داده‌ای یافت نشد
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>

      <div className="flex justify-end mb-4 print:hidden">
        {generalActions &&
          generalActions.map((action) => (
            <span
              key={action.label}
              className={`button mr-2 ${action.className}`}
              onClick={() => action.onClick && action.onClick(selectedItems)}
            >
              {action.label}
            </span>
          ))}
        {addUrl && canAdd && (
          <Link href={addUrl} className="button mr-5">
            {addButtonLabel || "افزودن جدید"}
          </Link>
        )}
      </div>
    </div>
  );
};

export default DataTable;

// {
//   rows && rows.length === 0 && (
//     <tr>
//       <td colSpan={headers.length} className="text-center py-8 text-gray-500">
//         داده‌ای یافت نشد
//       </td>
//     </tr>
//   );
// }
