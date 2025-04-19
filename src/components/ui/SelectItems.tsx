"use client";

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faX } from "@fortawesome/free-solid-svg-icons";
import Checkbox from "./Checkbox";
import Input from "./Input";

export interface SelectItem {
  id: string;
  name: string;
  [key: string]: any; // Allow for additional properties
}

export interface SelectItemsProps {
  items: SelectItem[];
  onSelectionChange?: (selectedItems: SelectItem[]) => void;
  onSave?: (selectedItems: SelectItem[]) => void;
  onCancel?: () => void;
  title?: string;
  searchPlaceholder?: string;
  className?: string;
  initialSelectedItems?: SelectItem[];
  singleSelect?: boolean;
  initialSelectedItemId?: string;
  required?: boolean;
  searchShowLimit?: number;
  clearOnSave?: boolean;
}

const SelectItems: React.FC<SelectItemsProps> = ({
  items,
  onSelectionChange,
  onSave,
  onCancel,
  title = "Select Items",
  searchPlaceholder = "Search items...",
  className = "",
  initialSelectedItems = [],
  singleSelect = true,
  initialSelectedItemId,
  searchShowLimit = 0,
  required = false,
  clearOnSave = false,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItems, setSelectedItems] =
    useState<SelectItem[]>(initialSelectedItems);

  const selectItems = [...items]; // Create a copy of the item
  if (!required) {
    selectItems.unshift({
      id: "none",
      name: "None",
    });
  }

  const [filteredItems, setFilteredItems] = useState<SelectItem[]>(selectItems);

  useEffect(() => {
    let initialSelectedItems = selectItems.filter(
      (item) => item.id == initialSelectedItemId?.toString()
    );

    if (!(initialSelectedItems.length > 0) && !required) {
      initialSelectedItems = [selectItems[0]];
    }

    if (initialSelectedItems.length > 0) {
      setSelectedItems(initialSelectedItems);
    }
  }, []);

  useEffect(() => {
    const filtered = selectItems.filter((item) => {
      const nameMatch = item.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const idMatch = item.id.toLowerCase().includes(searchQuery.toLowerCase());
      return nameMatch || idMatch;
    });

    setFilteredItems(filtered);
  }, [searchQuery]);

  // Handle item selection
  const handleItemSelect = (item: SelectItem, isChecked: boolean) => {
    let newSelectedItems: SelectItem[];

    if (isChecked) {
      if (singleSelect) {
        newSelectedItems = [item];
      } else {
        newSelectedItems = [...selectedItems, item];
      }
    } else {
      newSelectedItems = selectedItems.filter(
        (selectedItem) => selectedItem.id !== item.id
      );
    }

    setSelectedItems(newSelectedItems);

    onSelectionChange && onSelectionChange(newSelectedItems);
  };

  // Check if an item is selected
  const isItemSelected = (itemId: string) => {
    return selectedItems.some((item) => item.id === itemId);
  };

  // Clear all selections
  const clearSelection = () => {
    setSelectedItems([]);

    if (onSelectionChange) {
      onSelectionChange([]);
    }
  };

  // Handle save button click
  const handleSave = () => {
    if (clearOnSave) {
      clearSelection();
    }
    onSave && onSave(selectedItems);
  };

  return (
    <div className={`w-full bg-white rounded-lg shadow-lg p-8 ${className}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        <span className="text-sm text-gray-500">
          {selectedItems.length} items selected
        </span>
      </div>

      {/* Search input */}
      {items.length > searchShowLimit && (
        <div className="relative mb-6 w-full">
          <Input
            type="text"
            placeholder={searchPlaceholder || "Search items..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
          />
        </div>
      )}

      {/* Items list */}
      <div className="max-h-[400px] overflow-y-auto border border-gray-200 rounded-md">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div
              key={item.id}
              className="p-4 border-b border-gray-200 last:border-b-0 hover:bg-gray-50"
            >
              <Checkbox
                label={item.name}
                checked={isItemSelected(item.id)}
                onChange={(e) => handleItemSelect(item, e.target.checked)}
                className="w-full"
              />
            </div>
          ))
        ) : (
          <div className="p-4 text-center text-gray-500">No items found</div>
        )}
      </div>

      {/* Action buttons */}
      <div className="flex justify-between mt-6">
        <button
          onClick={clearSelection}
          className="flex items-center  cursor-pointer text-sm text-gray-600 hover:text-gray-900"
          type="button"
        >
          <FontAwesomeIcon icon={faX} className="mr-2" />
          Clear selection
        </button>

        <div className="flex space-x-4">
          {onCancel && (
            <button
              onClick={onCancel}
              className="px-4 py-2 border cursor-pointer border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              type="button"
            >
              Cancel
            </button>
          )}

          <button
            onClick={handleSave}
            className="px-4 py-2 border cursor-pointer border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            type="button"
          >
            Save Selection
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectItems;
