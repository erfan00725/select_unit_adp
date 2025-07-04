"use client";
import { urls } from "@/constants/urls";
import printOnclick from "@/lib/utils/printOnclick";
import React from "react";

type Props = {
  title?: string;
};

export function Printbutton({ title }: Props) {
  return (
    <button className="button print:hidden" onClick={() => window.print()}>
      {title || "چاپ"}
    </button>
  );
}

export const DetailPrintButton = ({ id }: { id: string }) => (
  <>
    <button
      className="button print:hidden"
      onClick={() => printOnclick(urls.selectUnitPrint, [id])}
    >
      چاپ انتخاب واحد‌
    </button>
    <button
      className="button print:hidden"
      onClick={() => printOnclick(urls.SU_PayForm, [id])}
    >
      چاپ فرم پرداخت شهریه
    </button>
    ,
  </>
);
