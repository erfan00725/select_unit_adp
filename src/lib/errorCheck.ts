import { toast } from "react-toastify";

export const errorCheck = (error: string | undefined | null) => {
  "use client";
  if (error) {
    console.log(error);
    // toast(`somthing went wrong: ${error}`, { type: "error" });
    return true;
  }
  return false;
};
