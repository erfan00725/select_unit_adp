"use client";
import React, { useEffect, useState } from "react";
import DataTable from "../../DataTable";
import {
  d_ListConfig,
  d_SelectUnitList,
  ListGeneralReturnType,
  s_SelectUnitList,
} from "@/constants/configs/ListPageConfigs";
import { useParams } from "next/navigation";
import Loading from "@/components/common/Loading";

export const SelectUnitLessonsTable = () => {
  const params = useParams();
  const [configs, setConfigs] = useState<ListGeneralReturnType | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  if (!params?.id) return null;

  useEffect(() => {
    d_ListConfig
      ?.lessons?.({ searchParams: {} })
      .then((res) => {
        setConfigs(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const s_selectUnitConfig = s_SelectUnitList;
  const addUrl = s_selectUnitConfig.addUrl.replace(":id", params?.id as string);
  return isLoading ? (
    <Loading />
  ) : configs ? (
    <div className="mt-5">
      <DataTable {...configs} canAdd={false} />
    </div>
  ) : null;
};
