"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faX } from "@fortawesome/free-solid-svg-icons";
import Checkbox from "./Checkbox";
import Input from "./Input";

export interface Item {
  id: string;
  name: string;
  [key: string]: any; // Allow for additional properties
}

interface SelectItemsProps {
  items: Item[];
  onSelectionChange?: (selectedItems: Item[]) => void;
  onSave?: (selectedItems: Item[]) => void;
  onCancel?: () => void;
  title?: string;
  searchPlaceholder?: string;
  className?: string;
  initialSelectedItems?: Item[];
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
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItems, setSelectedItems] =
    useState<Item[]>(initialSelectedItems);

  // Filter items based on search query
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle item selection
  const handleItemSelect = (item: Item, isChecked: boolean) => {
    let newSelectedItems: Item[];

    if (isChecked) {
      newSelectedItems = [...selectedItems, item];
    } else {
      newSelectedItems = selectedItems.filter(
        (selectedItem) => selectedItem.id !== item.id
      );
    }

    setSelectedItems(newSelectedItems);

    if (onSelectionChange) {
      onSelectionChange(newSelectedItems);
    }
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
    if (onSave) {
      onSave(selectedItems);
    }
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
      <div className="relative mb-6 w-full">
        <Input
          type="text"
          placeholder={searchPlaceholder || "Search items..."}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
        />
      </div>

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
          className="flex items-center text-sm text-gray-600 hover:text-gray-900"
          type="button"
        >
          <FontAwesomeIcon icon={faX} className="mr-2" />
          Clear selection
        </button>

        <div className="flex space-x-4">
          {onCancel && (
            <button
              onClick={onCancel}
              className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              type="button"
            >
              Cancel
            </button>
          )}

          <button
            onClick={handleSave}
            className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
