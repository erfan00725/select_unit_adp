import { Prisma } from "@prisma/client";
import { getSettings } from "../actions";

type selectUnitType = Partial<
  Prisma.SelectUnitGetPayload<{
    include: {
      selectedLessons: {
        include: {
          lesson: true;
        };
      };
    };
  }>
>;

export default function getTotalFee(
  selectUnit: selectUnitType,
  defaultPricePerUnit: number = 0
) {
  // Calculate lesson-based fees
  const lessonFees = selectUnit.selectedLessons
    ? selectUnit.selectedLessons.reduce(
        // @ts-ignore
        (acc, lesson) => {
          let lessonPrice;
          if (
            lesson.lesson?.PricePerUnit == null ||
            lesson.lesson?.PricePerUnit == undefined
          ) {
            lessonPrice = defaultPricePerUnit;
          } else {
            lessonPrice = lesson.lesson?.PricePerUnit;
          }
          return (
            acc +
            Number(lessonPrice) *
              ((lesson.lesson?.TheoriUnit || 0) +
                (lesson.lesson?.PracticalUnit || 0))
          );
        },
        0
      )
    : 0;

  // Calculate additional fees
  const additionalFees =
    Number(selectUnit.OtherFee || 0) +
    Number(selectUnit.FixedFee || 0) +
    Number(selectUnit.CertificateFee || 0) +
    Number(selectUnit.ExtraClassFee || 0) +
    Number(selectUnit.BooksFee || 0) +
    Number(selectUnit.SkillRegistrationFee || 0) +
    Number(selectUnit.InsuranceFee || 0) -
    Number(selectUnit.Discount || 0);

  return lessonFees + additionalFees;
}
