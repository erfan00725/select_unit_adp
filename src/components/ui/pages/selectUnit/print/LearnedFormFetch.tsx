import { getLessons, getStudentById } from "@/lib/actions";
import React from "react";
import LearnedForm from "./LearnedForm";

type Props = {
  id: string;
};

async function LearnedFormFetch({ id }: Props) {
  const data = await getStudentById(id);
  const lessonsData = await getLessons({ limit: 500 });

  if (!data.student || data.error) {
    return <span className="text-center w-full block">دانشجو یافت نشد!</span>;
  }

  return <LearnedForm data={data} lessonsData={lessonsData} />;
}

export default LearnedFormFetch;
