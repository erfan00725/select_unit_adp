"use client";
import React, { useEffect, useState } from "react";
import DataTable from "../DataTable";
import {
  LessonPrintList,
  LessonsList,
  ListGeneralReturnType,
  s_ListConfig,
} from "@/constants/configs/ListPageConfigs";
import Loading from "@/components/common/Loading";
import { PageType } from "@/types/General";
import { getSelectUnitById } from "@/lib/actions";

type Props = {
  data: Awaited<ReturnType<typeof getSelectUnitById>>;
  isPrint: boolean;
  id?: string;
};

export const SelectUnitLessonsTable = ({ data, id, isPrint }: Props) => {
  const [configs, setConfigs] = useState<ListGeneralReturnType | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const learnedLessons = data.selectUnit?.selectedLessons
    .map((sl) => (!!sl.Learned ? Number(sl.lesson.id) : undefined))
    .filter((l) => !!l);
  console.log(learnedLessons);

  if (!id) return null;

  useEffect(() => {
    if (isPrint) {
      LessonPrintList({
        searchParams: {},
        selectUnitLessonData: data,
        learned: learnedLessons as number[],
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
    } else {
      LessonsList({
        searchParams: {},
        selectUnitLessonData: data,
        learned: learnedLessons as number[],
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
    }
  }, []);

  const s_selectUnitConfig = s_ListConfig[PageType.SelectUnit];
  const addUrl = s_selectUnitConfig?.addUrl?.replace(":id", id as string);
  return isLoading ? (
    <Loading />
  ) : configs ? (
    <div className="mt-5 print:mt-0">
      <DataTable {...configs} canAdd={false} addUrl={addUrl} editable={false} />
    </div>
  ) : null;
};
