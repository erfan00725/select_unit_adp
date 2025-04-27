import { PageType } from "@/types/General";

export const homeUrl = "/dashboard";

export const urls = {
  login: "/login",
  dashboard: homeUrl,
  selectUnitEditBase: homeUrl + "/selectUnit",
  [PageType.Student]: homeUrl + `/${PageType.Student}`,
  [PageType.Lesson]: homeUrl + `/${PageType.Lesson}`,
  [PageType.Field]: homeUrl + `/${PageType.Field}`,
  [PageType.Teacher]: homeUrl + `/${PageType.Teacher}`,
  [PageType.SelectUnit]: homeUrl + `/${PageType.SelectUnit}`,
};
