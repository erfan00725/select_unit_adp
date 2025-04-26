export const formTitle = (name: string, isEdit?: boolean) =>
  isEdit ? `ویرایش ${name}` : `افزودن ${name} جدید`;

export const formDescription = (name: string, isEdit?: boolean) =>
  isEdit ? `ویرایش جزئیات ${name}` : `افزودن ${name} جدید`;

export const formButton = (name: string, isEdit?: boolean) =>
  isEdit ? `بروزرسانی ${name}` : `افزودن ${name}`;

export const inputDefaultPlaceholder = (name: string) => `${name} را وارد کنید`;
