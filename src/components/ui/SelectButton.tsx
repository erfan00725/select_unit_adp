"use client";
import React, { Suspense, useState } from "react";
import SelectItems, { Item, SelectItemsProps } from "./SelectItems";
import { ModalWrapper } from "./ModalWrapper";

export type Props = {
  items: Item[];
  buttunTitle?: string;
  singleSelect?: boolean;
  onClose?: () => void;
};

export type SelectButtonProps = Props & SelectItemsProps;

export const SelectButton = (props: SelectButtonProps) => {
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);
  const [isSelectShown, setIsSelectShown] = useState(false);

  const handleCloseModal = () => {
    setIsSelectShown(false);
    if (props.onClose) props.onClose();
  };

  const onSave = (selectedItems: Item[]) => {
    setSelectedItems(selectedItems);
    setIsSelectShown(false);
    props.onSave && props.onSave(selectedItems);
  };

  const buttonTitle = () => {
    let title = props.buttunTitle || "Select";
    if (selectedItems.length > 0) {
      title = selectedItems[0].name;
      if (selectedItems.length > 1) title += "...";
    }

    return title;
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsSelectShown(true)}
        className="button w-f"
      >
        {buttonTitle()}
      </button>
      <ModalWrapper isShown={isSelectShown} onClose={handleCloseModal}>
        <SelectItems {...props} onSave={onSave} />
      </ModalWrapper>
    </>
  );
};
