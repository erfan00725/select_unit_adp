"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faX } from "@fortawesome/free-solid-svg-icons";
import { useSearchParams as useCustomSearchParams } from "@/lib/hooks/useSeachParams";
import { useDebouncedCallback } from "use-debounce";
import { FilterOptionType } from "@/types/General";
import FilterOption from "./FilterOption";
import { useRouter, useSearchParams } from "next/navigation";
import Input from "../common/Input";
import { CalenderFarsi } from "../Form/CalenderFarsi";

interface SearchFilterBarProps {
  searchPlaceholder?: string;
  resultsCount?: number;
  filterOptions?: FilterOptionType[];
}

// This component renders a search and filter bar for lists, localized for Persian users.
const SearchFilterBar: React.FC<SearchFilterBarProps> = ({
  resultsCount,
  filterOptions,
  searchPlaceholder,
}) => {
  const {
    clearSearchParams,
    getSearchParam,
    setSearchParam,
    getAllSearchParams,
    removeSearchParam,
  } = useCustomSearchParams();
  const router = useRouter();
  const searchParams = useSearchParams();

  const debounce = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "") {
      params.delete("q");
    } else {
      params.set("q", value);
    }
    params.delete("page");
    router.push(`?${params.toString()}`);
  }, 100);

  // Handle input and filter changes
  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    switch (e.target.type) {
      case "checkbox":
        setSearchParam(e.target.name, e.target.checked.toString(), true);
        break;
      default:
        setSearchParam(e.target.name, e.target.value, true);
        break;
    }
  };

  return (
    <div className="mb-6">
      {/* Search Bar */}
      <div className="flex flex-col  gap-4 mb-4">
        <div className="relative flex-grow ">
          <Input
            type="text"
            placeholder={searchPlaceholder || "جستجو..."}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            defaultValue={getSearchParam("q")}
            onChange={(e) => debounce(e.target.value)}
            name="q"
            icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
          />
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap gap-2 jus">
          {/* Sort Dropdown */}
          <select
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            defaultValue={getSearchParam("order") || "newest"}
            onChange={onChange}
            name="order"
          >
            <option value="asc">جدیدترین</option>
            <option value="des">قدیمی‌ترین</option>
          </select>

          {/* Date Picker */}
          <div className="flex items-center px-4 py-2 border border-gray-300 rounded-md">
            <label htmlFor="FromDate" className="text-sm text-gray-700 ml-1.5">
              از تاریخ:
            </label>
            <CalenderFarsi
              name="from"
              defaultValue={getSearchParam("from")}
              onChange={(value) => setSearchParam("from", value, true)}
            />
          </div>

          <div className="flex items-center px-4 py-2 border border-gray-300 rounded-md">
            <label htmlFor="ToDate" className="text-sm text-gray-700 m-1.5">
              تا تاریخ:
            </label>
            <CalenderFarsi
              name="till"
              defaultValue={getSearchParam("till")}
              onChange={(value) => setSearchParam("till", value, true)}
            />
          </div>

          {/* Checkbox */}
          {/* <div className="flex items-center px-4 py-2 border border-gray-300 rounded-md">
            <label htmlFor="filterCheckbox" className="text-sm text-gray-700">
              فقط موجودی
            </label>
            <input
              type="checkbox"
              id="filterCheckbox"
              className="mr-2 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              name="filterCheckbox"
              defaultChecked={getSearchParam("filterCheckbox") === "true"}
              onChange={onChange}
            />
          </div> */}

          {/* Filter Options */}
          {filterOptions &&
            filterOptions.map((option, index) => (
              <FilterOption key={index} option={option} onChange={onChange} />
            ))}
        </div>
      </div>

      {/* Active Filters */}
      <div className="flex flex-wrap items-center gap-2 mb-2">
        {Object.values(getAllSearchParams()).length > 0 && (
          <button
            onClick={() => {
              clearSearchParams();
              router.refresh();
            }}
            className="text-sm text-indigo-600 hover:text-indigo-800 ml-2"
          >
            پاک کردن همه فیلترها
          </button>
        )}

        {/* Results Count */}
        {resultsCount != null && (
          <div className="ml-auto text-sm text-gray-600">
            {resultsCount} نتیجه یافت شد
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchFilterBar;
