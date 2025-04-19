"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faX } from "@fortawesome/free-solid-svg-icons";
import { useSearchParams } from "@/lib/hooks/useSeachParams";
import { useDebouncedCallback } from "use-debounce";
import { FilterOptionType } from "@/types/General";
import FilterOption from "./FilterOption";
import { useRouter } from "next/navigation";
import Input from "./Input";

interface SearchFilterBarProps {
  searchPlaceholder?: string;
  resultsCount?: number;
  filterOptions?: FilterOptionType[];
}

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
  } = useSearchParams();

  const debounce = useDebouncedCallback((value) => {
    onChange(value);
  }, 500);

  const router = useRouter();

  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    switch (e.target.type) {
      case "checkbox":
        setSearchParam(e.target.name, e.target.checked.toString());
        break;

      default:
        setSearchParam(e.target.name, e.target.value);
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
            placeholder={searchPlaceholder}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            defaultValue={getSearchParam("q")}
            onChange={(e) => debounce(e)}
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
            <option value="asc">Newest First</option>
            <option value="des">Oldest First</option>
          </select>

          {/* Date Picker */}
          <div className="flex items-center px-4 py-2 border border-gray-300 rounded-md">
            <label htmlFor="FromDate" className="text-sm text-gray-700 mr-1.5">
              Form :
            </label>
            <input
              type="date"
              className="focus:outline-none"
              id="FromDate"
              name="from"
              onChange={onChange}
              defaultValue={getSearchParam("from")}
            />
          </div>

          <div className="flex items-center px-4 py-2 border border-gray-300 rounded-md">
            <label htmlFor="ToDate" className="text-sm text-gray-700 mr-1.5">
              To :
            </label>
            <input
              type="date"
              id="ToDate"
              name="to"
              className="focus:outline-none"
              onChange={onChange}
              defaultValue={getSearchParam("to")}
            />
          </div>

          {/* Price Range Slider */}
          {/* <div className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md min-w-[200px]">
            <input
              type="range"
              min="0"
              max="1000"
              step="10"
              className="w-full"
              value={priceRange.max}
              onChange={(e) =>
                onPriceRangeChange &&
                onPriceRangeChange(priceRange.min, parseInt(e.target.value))
              }
            />
            <span className="text-sm text-gray-600">${priceRange.max}</span>
          </div> */}

          {/* Checkbox */}
          <div className="flex items-center px-4 py-2 border border-gray-300 rounded-md">
            <input
              type="checkbox"
              id="filterCheckbox"
              className="mr-2 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              name="filterCheckbox"
              defaultChecked={getSearchParam("filterCheckbox") === "true"}
              onChange={onChange}
            />
            <label htmlFor="filterCheckbox" className="text-sm text-gray-700">
              In Stock Only
            </label>
          </div>

          {/* Filter Options */}
          {filterOptions &&
            filterOptions.map((option, index) => (
              <FilterOption key={index} option={option} onChange={onChange} />
            ))}
        </div>
      </div>

      {/* Active Filters */}
      <div className="flex flex-wrap items-center gap-2 mb-2">
        {Object.entries(getAllSearchParams()).map(
          ([key, filter]) =>
            key != "page" &&
            filter && (
              <div
                key={key}
                className="flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-sm"
              >
                <span>{filter}</span>
                <button
                  onClick={() => removeSearchParam(key)}
                  className="text-gray-500 hover:text-gray-700 ml-0.5"
                >
                  <FontAwesomeIcon icon={faX} />
                </button>
              </div>
            )
        )}

        {Object.values(getAllSearchParams()).length > 0 && (
          <button
            onClick={() => {
              clearSearchParams();
              router.refresh();
            }}
            className="text-sm text-indigo-600 hover:text-indigo-800 ml-2"
          >
            Clear all filters
          </button>
        )}

        {/* Results Count */}
        {resultsCount != null && (
          <div className="ml-auto text-sm text-gray-600">
            {resultsCount} results found
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchFilterBar;
