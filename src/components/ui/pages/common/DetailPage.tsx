import React from "react";
import DetailInfoCard from "../../ProductInfoCard";
import { getLessonById, getStudentById } from "@/lib/actions";
import { errorCheck } from "@/lib/errorCheck";
import { PageType } from "@/types/General";
import {
  DetailPageConfigtReturnType,
  LessonsDetailConfig,
  StudentsDetailConfig,
} from "@/constants/configs/DetailPageConfigs";
import { notFound } from "next/navigation";
import NotFound from "@/app/not-found";

type Props = {
  type: PageType;
  id: string;
};

export const DetailPage = async ({ type, id }: Props) => {
  let data;
  let detailConfig: DetailPageConfigtReturnType | undefined;

  console.log(type);

  switch (type) {
    case PageType.Lesson: {
      data = await getLessonById(BigInt(id));
      detailConfig = LessonsDetailConfig(data);
      break;
    }
    case PageType.Student: {
      data = await getStudentById(BigInt(id));
      detailConfig = StudentsDetailConfig(data);
      break;
    }
    default:
      return notFound();
  }

  if (!detailConfig || !data) {
    return notFound();
  }

  if (detailConfig.error || !detailConfig.config || data.error) {
    errorCheck(detailConfig?.error);
    return <NotFound />;
  }

  return <DetailInfoCard {...detailConfig.config} />;
};
