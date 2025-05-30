"use client";
import React from "react";

type Props = {
  title?: string;
};

export default function Printbutton({ title }: Props) {
  return (
    <button className="button print:hidden" onClick={() => window.print()}>
      {title || "چاپ"}
    </button>
  );
}
