import {
  getGeneralSettings,
  getLessons,
  getLessonsByIds,
  getSelectUnitById,
} from "@/lib/actions";
import { SelectUnitForm } from "./SelectUnitForm";
import { ActionReturnType } from "@/types/General";

type Props = {
  studnetId: string;
  selectUnitId?: string; // Optional ID for edit mode
};

export const SelectUnitFormFetch = async ({
  studnetId,
  selectUnitId,
}: Props) => {
  const settings = (await getGeneralSettings()).settings;
  const defaultPrice =
    settings?.filter((setting) => setting.Key === "PricePerUnit")[0]?.Value ||
    10;
  const defaultFixedFee = settings?.filter(
    (setting) => setting.Key === "FixedFee"
  )[0]?.Value;

  // TODO: Get only related lessons
  const lessons = await getLessons();

  // If selectUnitId is provided, fetch the select unit data for editing
  let selectUnitData = undefined;
  if (selectUnitId) {
    selectUnitData = await getSelectUnitById(BigInt(selectUnitId));
  }

  return (
    <SelectUnitForm
      studnetId={studnetId}
      lessons={lessons}
      defaultPrice={defaultPrice}
      defaultFixedFee={defaultFixedFee}
      selectUnitData={selectUnitData} // Pass the select unit data for editing
      isEditMode={!!selectUnitId} // Flag to indicate edit mode
    />
  );
};
