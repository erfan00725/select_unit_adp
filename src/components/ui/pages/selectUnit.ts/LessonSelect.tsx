"use client";
import React from "react";
import { SelectItem } from "../../SelectItems";
import { SelectButton } from "../../SelectButton";
import { useSearchParams } from "@/lib/hooks/useSeachParams";
import { string } from "zod";

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
  const { setSearchParam, getSearchParam } = useSearchParams();

  const onSelectSave = (selectedItems: SelectItem[]) => {
    const noneDuplicate = selectedItems.filter(
      (item) => !selectedLessons.includes(item.id)
    );
    setSelectedLessons((prev) => {
      return [...prev, ...noneDuplicate.map((item) => item.id)];
    });
    console.log("Selected items:", selectedItems);
  };

  return (
    <SelectButton
      items={items}
      buttunTitle="Add Course"
      buttnClassName="text-white! bg-indigo-600! hover:bg-indigo-700!"
      required
      singleSelect={false}
      onSave={onSelectSave}
      clearOnSave={true}
    />
  );
};
