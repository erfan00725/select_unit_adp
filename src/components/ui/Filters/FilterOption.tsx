"use client";
import { useSearchParams } from "@/lib/hooks/useSeachParams";
import { FilterOptionType } from "@/types/General";
import clsx from "clsx";
import React from "react";

type Props = {
  option: FilterOptionType;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
};

export default function FilterOption({ option, onChange }: Props) {
  const { getSearchParam } = useSearchParams();

  let Input: React.ReactElement | undefined = (
    <input
      className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 "
      type={option.type}
      defaultValue={
        getSearchParam(option.name) ||
        (typeof option.defaultValue === "boolean"
          ? option.defaultValue.toString()
          : option.defaultValue)
      }
      name={option.name}
      id={option.name}
      placeholder={option.placeholder ? option.placeholder : "جستجو..."}
      onChange={onChange}
      defaultChecked={getSearchParam(option.name) === "true"}
      onWheel={(e) => e.currentTarget.blur()}
    />
  );

  let className = "";

  const defaultValue =
    getSearchParam(option.name) ||
    (typeof option.defaultValue === "boolean"
      ? option.defaultValue.toString()
      : option.defaultValue);

  switch (option.type) {
    case "select":
      Input = (
        <select
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          defaultValue={defaultValue || ""}
          onChange={onChange}
          name={option.name}
        >
          <option value="">{`${
            option.placeholder ? option.placeholder : "انتخاب..."
          }`}</option>
          {option.options?.map((option) => (
            <option key={option.value} value={option.value}>
              {`${option.label ? option.label : "گزینه"} `}
            </option>
          ))}
        </select>
      );
      break;
    case "checkbox":
    case "date":
      className = "filterNoBorder py-2";
      break;

    default:
      break;
  }

  return (
    <div className={clsx("flex flex-col gap-2 h-full", className)}>
      {option.label && (
        <label htmlFor={option.name} className="text-sm text-gray-700">
          {option.label}
        </label>
      )}
      {Input}
    </div>
  );
}
