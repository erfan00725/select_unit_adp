import { Lesson } from "./../generated/prisma/index.d";
import { PageType } from "@/types/General";

export const homeUrl = "/dashboard";

export const urls = {
  login: "/login",
  dashboard: homeUrl,
  [PageType.Student]: homeUrl + `/${PageType.Student}`,
  [PageType.Lesson]: homeUrl + `/${PageType.Lesson}`,
};
