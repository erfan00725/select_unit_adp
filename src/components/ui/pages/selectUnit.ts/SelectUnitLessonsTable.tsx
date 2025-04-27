"use client";
import React, { useEffect, useState } from "react";
import DataTable from "../../DataTable";
import {
  d_ListConfig,
  LessonsList,
  ListGeneralReturnType,
  s_ListConfig,
} from "@/constants/configs/ListPageConfigs";
import { useParams } from "next/navigation";
import Loading from "@/components/common/Loading";
import { PageType } from "@/types/General";
import { getSelectUnitById } from "@/lib/actions";

type Props = {
  data: Awaited<ReturnType<typeof getSelectUnitById>>;
};

export const SelectUnitLessonsTable = ({ data }: Props) => {
  const params = useParams();
  const [configs, setConfigs] = useState<ListGeneralReturnType | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  if (!params?.id) return null;

  useEffect(() => {
    LessonsList({ searchParams: {}, selectUnitLessonData: data })
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
  return isLoading ? (
    <Loading />
  ) : configs ? (
    <div className="mt-5">
      <DataTable {...configs} canAdd={false} addUrl={addUrl} editable={false} />
    </div>
  ) : null;
};
