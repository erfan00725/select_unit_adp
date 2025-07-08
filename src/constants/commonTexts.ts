export const formTitle = (name: string, isEdit?: boolean) =>
  isEdit ? `ویرایش ${name}` : `افزودن ${name} جدید`;

export const formDescription = (name: string, isEdit?: boolean) =>
  isEdit ? `ویرایش جزئیات ${name}` : `افزودن ${name} جدید`;

export const formButton = (name: string, isEdit?: boolean) =>
  isEdit ? `بروزرسانی ${name}` : `افزودن ${name}`;

export const inputDefaultPlaceholder = (name: string) => `${name} را وارد کنید`;

export const RightsReserved =
  "© ۲۰۲۴ مدرسه راه دور البرز ناحیه دو اصفهان. کلیه حقوق محفوظ است.";

export const SchoolName = "از راه دور البرز";
