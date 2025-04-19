"use client";

import { useRouter, useSearchParams as useParams } from "next/navigation";

export const useSearchParams = () => {
  const searchParams = useParams();
  const router = useRouter();

  const getSearchParam = (param: string) => {
    return searchParams.get(param) || "";
  };

  const getAllSearchParams = () => {
    const params: { [key: string]: string } = {};
    searchParams.forEach((value, key) => {
      params[key] = value;
    });
    return params;
  };

  const setSearchParam = (param: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(param, value);
    router.push(`?${params.toString()}`);
  };

  const removeSearchParam = (param: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(param);
    router.push(`?${params.toString()}`);
  };

  const clearSearchParams = () => {
    router.push("");
  };

  return {
    getSearchParam,
    setSearchParam,
    removeSearchParam,
    clearSearchParams,
    getAllSearchParams,
  };
};
