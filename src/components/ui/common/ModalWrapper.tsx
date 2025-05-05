import clsx from "clsx";
import React from "react";

type Props = {
  isShown: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export const ModalWrapper = ({ isShown, onClose, children }: Props) => {
  return (
    <div
      className={clsx(
        "z-[100] w-dvw h-dvh fixed left-0 top-0 hidden justify-center items-center p-0 bg-black/50 backdrop-blur-sm  md:p-40",
        {
          "flex!": isShown,
        }
      )}
      onClick={() => isShown && onClose()}
      aria-label="پس‌زمینه مودال"
    >
      <div onClick={(e) => e.stopPropagation()} className="w-full">
        {children}
      </div>
    </div>
  );
};
