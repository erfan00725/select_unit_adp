import { DataTableProps } from "@/types/Props";
import { DataBaseType } from "@/types/Tables";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

const DataTable = <T extends DataBaseType>({
  tableData,
  headers,
  title,
  addButtonLabel,
  baseUrl,
  limit = 50,
  scrollable = false,
  actions,
}: DataTableProps<T>) => {
  const rows = tableData?.filter((_, index) => index < limit);

  const addUrl = baseUrl ? `${baseUrl}/add` : null;

  return (
    <div className="card mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-6">{title}</h2>

      <div
        className={clsx("overflow-x-auto overflow-y-auto", {
          "overflow-y-scroll!": scrollable,
        })}
      >
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
              {baseUrl || actions ? (
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              ) : null}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {rows?.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {Object.entries(row).map(([name, data], colIndex) => (
                  <td
                    key={colIndex}
                    className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    {baseUrl ? (
                      <Link href={`${baseUrl}/${row.id}`}>{data || "_"}</Link>
                    ) : (
                      data || "_"
                    )}
                  </td>
                ))}
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
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
                            action.onClick && action.onClick(row.id.toString())
                          }
                        >
                          {action.label}
                        </span>
                      )
                    )}
                  {baseUrl && (
                    <Link
                      href={`${baseUrl}/${row.id}/edit`}
                      className="tableAction text-blue-600! hover:text-blue-900!"
                    >
                      Edit
                    </Link>
                  )}
                  {baseUrl && (
                    <Link
                      href={`${baseUrl}/${row.id}?delete=true`}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </Link>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {addUrl && (
        <div className="mt-6">
          <Link href={addUrl} className="button_black">
            {addButtonLabel || "Add"}
          </Link>
        </div>
      )}
    </div>
  );
};

export default DataTable;
