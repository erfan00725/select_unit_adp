"use client";

import React, { useState } from "react";
import SelectItems from "@/components/ui/SelectItems";
import PageHeader from "@/components/ui/PageHeader";
import { ModalWrapper } from "@/components/ui/ModalWrapper";

// Sample data for demonstration
const sampleItems = [
  { id: "1", name: "Professional Camera Kit" },
  { id: "2", name: "Wireless Headphones" },
  { id: "3", name: "Smart Watch Series 7" },
  { id: "4", name: 'Laptop Pro 16"' },
  { id: "5", name: "Wireless Charging Pad" },
  { id: "6", name: "Bluetooth Speaker" },
  { id: "7", name: '4K Monitor 32"' },
  { id: "8", name: "Gaming Mouse" },
  { id: "9", name: "Mechanical Keyboard" },
  { id: "10", name: "External SSD 1TB" },
  { id: "11", name: "Graphic Tablet" },
  { id: "12", name: "Portable Power Bank" },
];

export default function SelectItemsDemo() {
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const [savedSelection, setSavedSelection] = useState<any[]>([]);
  const [isSelectShown, setIsSelectShown] = useState<boolean>(false);

  const handleSelectionChange = (items: any[]) => {
    setSelectedItems(items);
  };

  const handleSaveSelection = (items: any[]) => {
    setSavedSelection(items);
    alert(`Selection saved! ${items.length} items selected.`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="Select Items Demo"
        description="Example of the SelectItems component"
      />

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Component Demo</h2>
        <ModalWrapper
          isShown={isSelectShown}
          onClose={() => setIsSelectShown(false)}
        >
          <SelectItems
            items={sampleItems}
            onSelectionChange={handleSelectionChange}
            onSave={handleSaveSelection}
            title="Select Products"
            searchPlaceholder="Search products..."
          />
        </ModalWrapper>
      </div>

      <button onClick={() => setIsSelectShown(true)}>Show Modal</button>

      {savedSelection.length > 0 && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Your Saved Selection</h2>
          <ul className="list-disc pl-5 space-y-2">
            {savedSelection.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
