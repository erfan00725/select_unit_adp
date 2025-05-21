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

  const setSearchParam = (
    param: string,
    value: string,
    deletePage?: boolean
  ) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(param, value);
    if (deletePage) {
      params.delete("page");
    }
    router.push(`?${params.toString()}`);
  };

  const removeSearchParam = (param: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(param);
    router.push(`?${params.toString()}`);
  };

  const clearSearchParams = () => {
    const params = new URLSearchParams();
    router.push(`?${params.toString()}`);
  };

  return {
    getSearchParam,
    setSearchParam,
    removeSearchParam,
    clearSearchParams,
    getAllSearchParams,
  };
};
