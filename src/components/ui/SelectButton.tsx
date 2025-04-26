"use client";
import React, { useState } from "react";
import SelectItems, { SelectItem, SelectItemsProps } from "./SelectItems";
import { ModalWrapper } from "./ModalWrapper";

export type Props = {
  items: SelectItem[];
  buttunTitle?: string;
  singleSelect?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  buttnClassName?: string;
  showSelectOnButton?: boolean;
};

export type SelectButtonProps = Props & SelectItemsProps;

// This component provides a button that opens a modal for selecting items, localized for Persian users.
export const SelectButton = ({
  onClose,
  onSave,
  buttunTitle,
  buttnClassName,
  showSelectOnButton = false,
  children,
  ...rest
}: SelectButtonProps) => {
  // State for selected items
  const [selectedItems, setSelectedItems] = useState<SelectItem[]>([]);
  // State for showing the select modal
  const [isSelectShown, setIsSelectShown] = useState(false);

  // Handle closing the modal
  const handleCloseModal = () => {
    setIsSelectShown(false);
    if (onClose) onClose();
  };

  // Handle saving selected items
  const onSelectSave = (selectedItems: SelectItem[]) => {
    setSelectedItems(selectedItems);
    if (rest.singleSelect && selectedItems.length > 0) {
    }
    setIsSelectShown(false);
    onSave && onSave(selectedItems);
  };

  // Handle selection change
  const onSelectionChange = (item: SelectItem[]) => {
    if (rest.singleSelect && selectedItems.length > 0) {
      setIsSelectShown(false);
    }
    rest.onSelectionChange && rest.onSelectionChange(item);
  };

  // Generate the button title based on selection
  const buttonTitle = () => {
    let title = buttunTitle || "انتخاب";
    if (selectedItems.length > 0 && showSelectOnButton) {
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
        className={`button w-f ${buttnClassName}`}
      >
        {buttonTitle()}
        {children}
      </button>
      <ModalWrapper isShown={isSelectShown} onClose={handleCloseModal}>
        <SelectItems
          {...rest}
          onSave={onSelectSave}
          onSelectionChange={onSelectionChange}
        />
      </ModalWrapper>
    </>
  );
};
