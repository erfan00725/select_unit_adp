"use client";

import { useRouter, useSearchParams } from "next/navigation";

export const useSeachParams = () => {
  const searchParams = useSearchParams();
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
    router.push(`${window.location.pathname}?${params.toString()}`);
  };

  const removeSearchParam = (param: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(param);
    router.push(`${window.location.pathname}?${params.toString()}`);
  };

  const clearSearchParams = () => {
    router.push(window.location.pathname);
  };

  return {
    getSearchParam,
    setSearchParam,
    removeSearchParam,
    clearSearchParams,
    getAllSearchParams,
  };
};
