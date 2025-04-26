import { urls } from "../urls";

export const NavBarConfigs = [
  {
    label: "داشبورد",
    href: "/dashboard",
  },
  {
    label: "مدیریت دانش‌آموزان",
    href: urls.students,
  },
  {
    label: "مدیریت دروس",
    href: urls.lessons,
  },
  {
    label: "مدیریت اساتید",
    href: urls.teachers,
  },
  {
    label: "مدیریت رشته‌ها",
    href: urls.fields,
  },
];
