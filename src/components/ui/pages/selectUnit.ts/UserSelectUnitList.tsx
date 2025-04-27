"use client";
import React, { useEffect, useState } from "react";
import DataTable from "../../DataTable";
import {
  d_StudentSelectUnitList,
  ListGeneralReturnType,
  s_ListConfig,
} from "@/constants/configs/ListPageConfigs";
import { useParams } from "next/navigation";
import Loading from "@/components/common/Loading";
import { PageType } from "@/types/General";

export const UserSelectUnitList = () => {
  const params = useParams();
  const [configs, setConfigs] = useState<ListGeneralReturnType | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  if (!params?.id) return null;

  // TODO: SelectUnits must be combined, List must change for SelectUnits and SelectUnit add, delete, update and single page must added

  useEffect(() => {
    d_StudentSelectUnitList({
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

  const s_selectUnitConfig = s_ListConfig[PageType.SelectUnit];
  const addUrl = s_selectUnitConfig?.addUrl?.replace(
    ":id",
    params?.id as string
  );
  const editUrl = s_selectUnitConfig?.editUrl?.replace(
    ":studentId",
    params?.id as string
  );
  return isLoading ? (
    <Loading />
  ) : configs?.tableData ? (
    <div className="mt-5">
      {configs?.tableData.length > 0 ? (
        <DataTable {...configs} addUrl={addUrl} editUrl={editUrl} />
      ) : (
        <p className="text-center text-gray-600">
          انتخاب واحدی برای این دانش‌اموز انجام نشده است!
        </p>
      )}
    </div>
  ) : null;
};
