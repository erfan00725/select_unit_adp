import { getDateJ } from "./getCurrentDataJ";

export default function getAcademicYearJ(year?: number) {
  if (!year) return null;
  return `${getDateJ(new Date(year, 0), "year")}-${getDateJ(
    new Date(year + 1, 0),
    "year"
  )}`;
}
