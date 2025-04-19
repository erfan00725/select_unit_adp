import { PageType } from "@/types/General";

export const homeUrl = "/dashboard";

export const urls = {
  login: "/login",
  dashboard: homeUrl,
  selectUnit: homeUrl + "/select-unit",
  [PageType.Student]: homeUrl + `/${PageType.Student}`,
  [PageType.Lesson]: homeUrl + `/${PageType.Lesson}`,
  [PageType.Field]: homeUrl + `/${PageType.Field}`,
  [PageType.Teacher]: homeUrl + `/${PageType.Teacher}`,
};
