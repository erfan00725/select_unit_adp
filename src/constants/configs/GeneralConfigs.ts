import { urls } from "../urls";

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
    href: urls.students,
  },
  {
    label: "Lessons Management",
    href: urls.lessons,
  },
  {
    label: "Teachers Management",
    href: urls.teachers,
  },
  {
    label: "Fields Management",
    href: urls.fields,
  },
];
