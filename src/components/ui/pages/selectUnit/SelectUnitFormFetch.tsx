import {
  getSettings,
  getLessons,
  getSelectUnitById,
  getStudentById,
} from "@/lib/actions";
import { SelectUnitForm } from "./SelectUnitForm";
import { Grade } from "@prisma/client";

type Props = {
  studnetId: string;
  selectUnitId?: string; // Optional ID for edit mode
};

export const SelectUnitFormFetch = async ({
  studnetId,
  selectUnitId,
}: Props) => {
  // TODO: Get only related lessons
  const lessons = await getLessons({ limit: 500 });
  const settings = await getSettings();
  const student = await getStudentById(studnetId);

  // If selectUnitId is provided, fetch the select unit data for editing
  let selectUnitData = undefined;
  if (selectUnitId) {
    selectUnitData = await getSelectUnitById(selectUnitId);
  }

  return (
    <SelectUnitForm
      studnetId={studnetId}
      lessons={lessons}
      selectUnitData={selectUnitData} // Pass the select unit data for editing
      isEditMode={!!selectUnitId} // Flag to indicate edit mode
      defaultPriceFirst={Number(settings.settings.pricePerUnitFirst)}
      defaultPriceSecond={Number(settings.settings.pricePerUnitSecond)}
      studentGrade={student.student?.Grade as Grade}
    />
  );
};
