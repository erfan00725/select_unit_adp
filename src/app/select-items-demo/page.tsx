"use client";

import React, { useState } from "react";
import SelectItems from "@/components/ui/SelectItems";
import PageHeader from "@/components/ui/PageHeader";
import { ModalWrapper } from "@/components/ui/ModalWrapper";

// Sample data for demonstration
const sampleItems = [
  { id: "1", name: "کیت دوربین حرفه‌ای" },
  { id: "2", name: "هدفون بی‌سیم" },
  { id: "3", name: "ساعت هوشمند سری ۷" },
  { id: "4", name: "لپ‌تاپ پرو ۱۶ اینچ" },
  { id: "5", name: "پد شارژ بی‌سیم" },
  { id: "6", name: "اسپیکر بلوتوثی" },
  { id: "7", name: "مانیتور ۴K ۳۲ اینچ" },
  { id: "8", name: "ماوس گیمینگ" },
  { id: "9", name: "کیبورد مکانیکی" },
  { id: "10", name: "اس‌اس‌دی اکسترنال ۱ ترابایت" },
  { id: "11", name: "تبلت گرافیکی" },
  { id: "12", name: "پاوربانک قابل حمل" },
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
    alert(`انتخاب ذخیره شد! ${items.length} آیتم انتخاب شده است.`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="دموی انتخاب آیتم‌ها"
        description="نمونه‌ای از کامپوننت انتخاب آیتم‌ها"
      />

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">دموی کامپوننت</h2>
        <ModalWrapper
          isShown={isSelectShown}
          onClose={() => setIsSelectShown(false)}
        >
          <SelectItems
            items={sampleItems}
            onSelectionChange={handleSelectionChange}
            onSave={handleSaveSelection}
            title="انتخاب محصولات"
            searchPlaceholder="جستجوی محصولات..."
          />
        </ModalWrapper>
      </div>

      <button onClick={() => setIsSelectShown(true)}>نمایش مودال</button>

      {savedSelection.length > 0 && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">انتخاب ذخیره‌شده شما</h2>
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
