"use client";
import React, { useEffect, useState } from "react";
import DataTable from "../../DataTable";
import {
  d_SelectUnitList,
  ListGeneralReturnType,
  s_SelectUnitList,
} from "@/constants/configs/ListPageConfigs";
import { useParams } from "next/navigation";
import Loading from "@/components/common/Loading";

export const UserSelectUnitList = () => {
  const params = useParams();
  const [configs, setConfigs] = useState<ListGeneralReturnType | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  if (!params?.id) return null;

  // TODO: SelectUnits must be combined, List must change for SelectUnits and SelectUnit add, delete, update and single page must added

  useEffect(() => {
    d_SelectUnitList({
      studentId: BigInt(params?.id as string),
      searchParams: {},
    })
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
  return isLoading ? (
    <Loading />
  ) : configs ? (
    <div className="mt-5">
      <DataTable {...configs} />
    </div>
  ) : null;
};
