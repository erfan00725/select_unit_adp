import { PageType } from "@/types/General";

export const NavBarConfigs = [
  {
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    label: "Course Selection",
    href: "/dashboard/select-unit",
  },
  {
    label: "Student Management",
    href: "/dashboard/" + PageType.Student,
  },
  {
    label: "Lessons Management",
    href: "/dashboard/" + PageType.Lesson,
  },
  {
    label: "Teachers Management",
    href: "/dashboard/" + PageType.Teacher,
  },
  {
    label: "Fields Management",
    href: "/dashboard/" + PageType.Field,
  },
];
