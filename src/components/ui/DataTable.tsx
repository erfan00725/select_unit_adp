import { StudentTableType, CourseTableType } from "@/types/Tables";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

// type Column = {
//   header: string;
//   accessor: string;
//   cellRenderer?: (value: any, row: any) => React.ReactNode;
// };

// type ActionButton<T> = {
//   label: string;
//   onClick: (row: T) => void;
//   className?: string;
// };

// type DataTableProps = {
//   title: string;
//   columns: Column[];
//   data: any[];
//   actionButtons?: ActionButton<any>[];
//   addButtonLabel?: string;
//   onAddClick?: () => void;
// };

// First tableData Object is the Header Value
type Props = {
  title: string;
  description?: string;
  tableData: StudentTableType[] | CourseTableType[];
  addUrl?: string;
  addButtonLabel?: string;
  editBaseUrl?: string;
  deleteBaseUrl?: string;
  limit?: number;
  scrollable?: boolean;
};

const DataTable: React.FC<Props> = ({
  tableData,
  title,
  addButtonLabel,
  addUrl,
  description,
  deleteBaseUrl,
  editBaseUrl,
  limit = 50,
  scrollable = false,
}) => {
  const headers = Object.values(tableData[0]) || [];
  const rows = tableData.filter((_, index) => index > 0 && index < limit);

  // const newData = data[0].map((_, colIndex) =>
  //   data.map((row) => row[colIndex])
  // );

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
              {editBaseUrl || deleteBaseUrl ? (
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              ) : null}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {Object.entries(row).map(([name, data], colIndex) => (
                  <td
                    key={colIndex}
                    className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    {data}
                  </td>
                ))}
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {editBaseUrl && (
                    <Link
                      href={editBaseUrl + row.id}
                      className="text-indigo-600 hover:text-indigo-900 mr-3"
                    >
                      Edit
                    </Link>
                  )}
                  {deleteBaseUrl && (
                    <Link
                      href={deleteBaseUrl + row.id}
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
          <Link
            href={addUrl}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {addButtonLabel || "Add"}
          </Link>
        </div>
      )}
    </div>
  );
};

export default DataTable;
