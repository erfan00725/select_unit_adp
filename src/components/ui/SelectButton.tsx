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

export const SelectButton = ({
  onClose,
  onSave,
  buttunTitle,
  buttnClassName,
  showSelectOnButton = false,
  children,
  ...rest
}: SelectButtonProps) => {
  const [selectedItems, setSelectedItems] = useState<SelectItem[]>([]);
  const [isSelectShown, setIsSelectShown] = useState(false);

  const handleCloseModal = () => {
    setIsSelectShown(false);
    if (onClose) onClose();
  };

  const onSelectSave = (selectedItems: SelectItem[]) => {
    setSelectedItems(selectedItems);
    if (rest.singleSelect && selectedItems.length > 0) {
    }
    setIsSelectShown(false);
    onSave && onSave(selectedItems);
  };

  const onSelectionChange = (item: SelectItem[]) => {
    if (rest.singleSelect && selectedItems.length > 0) {
      setIsSelectShown(false);
    }
    rest.onSelectionChange && rest.onSelectionChange(item);
  };

  const buttonTitle = () => {
    let title = buttunTitle || "Select";
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
