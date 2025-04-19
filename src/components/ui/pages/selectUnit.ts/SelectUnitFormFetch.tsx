import { getGeneralSettings, getLessons, getLessonsByIds } from "@/lib/actions";
import { SelectUnitForm } from "./SelectUnitForm";
import { ActionReturnType } from "@/types/General";

type Props = {
  studnetId: string;
};

export const SelectUnitFormFetch = async ({ studnetId }: Props) => {
  const settings = (await getGeneralSettings()).settings;
  const defaultPrice =
    settings?.filter((setting) => setting.Key === "PricePerUnit")[0]?.Value ||
    10;
  const defaultFixedFee = settings?.filter(
    (setting) => setting.Key === "FixedFee"
  )[0]?.Value;

  // TODO: Get only related lessons
  const lessons = await getLessons();

  return (
    <SelectUnitForm
      studnetId={studnetId}
      lessons={lessons}
      defaultPrice={defaultPrice}
      defaultFixedFee={defaultFixedFee}
    />
  );
};
