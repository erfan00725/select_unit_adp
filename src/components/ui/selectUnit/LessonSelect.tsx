"use client";
import React from "react";
import { SelectItem } from "../Form/SelectItems";
import { SelectButton } from "../Form/SelectButton";

type Props = {
  items: SelectItem[];
  selectedLessons: string[];
  setSelectedLessons: React.Dispatch<React.SetStateAction<string[]>>;
};

export const LessonSelect = ({
  items,
  selectedLessons,
  setSelectedLessons,
}: Props) => {
  const onSelectSave = (selectedItems: SelectItem[]) => {
    const noneDuplicate = selectedItems.filter(
      (item) => !selectedLessons.includes(item.id)
    );
    setSelectedLessons((prev) => {
      return [...prev, ...noneDuplicate.map((item) => item.id)];
    });
  };

  return (
    <SelectButton
      items={items}
      buttunTitle="افزودن درس"
      buttnClassName="text-white! bg-indigo-600! hover:bg-indigo-700!"
      required
      singleSelect={false}
      onSave={onSelectSave}
      clearOnSave={true}
      showSelectOnButton={false}
    />
  );
};
