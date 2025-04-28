"use client";
import { useSearchParams } from "@/lib/hooks/useSeachParams";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Activefilters() {
  const { getAllSearchParams, removeSearchParam } = useSearchParams();
  return (
    <div>
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
                onClick={() => {
                  removeSearchParam(key);
                }}
                className="text-gray-500 hover:text-gray-700 ml-0.5"
              >
                <FontAwesomeIcon icon={faX} />
              </button>
            </div>
          )
      )}
    </div>
  );
}
