import { PageType } from "@/types/General";

export const homeUrl = "/dashboard";

export const urls = {
  login: "/login",
  dashboard: homeUrl,
  printBase: homeUrl + "/print",
  selectUnitEditBase: homeUrl + "/selectUnit",
  [PageType.Student]: homeUrl + `/${PageType.Student}`,
  [PageType.Lesson]: homeUrl + `/${PageType.Lesson}`,
  [PageType.Field]: homeUrl + `/${PageType.Field}`,
  [PageType.Teacher]: homeUrl + `/${PageType.Teacher}`,
  [PageType.SelectUnit]: homeUrl + `/${PageType.SelectUnit}`,
  [PageType.General]: homeUrl + `/${PageType.General}`,
  [PageType.User]: homeUrl + `/${PageType.User}`,
  selectUnitPrint: homeUrl + "/print/selectUnits",
  selectUnitPrintAlt: homeUrl + "/print/selectUnitsAlt",
};
