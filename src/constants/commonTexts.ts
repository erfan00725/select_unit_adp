export const formTitle = (name: string, isEdit?: boolean) =>
  isEdit ? `Edit ${name}` : `Add New ${name}`;

export const formDescription = (name: string, isEdit?: boolean) =>
  isEdit ? `Edit ${name} details` : `Add New ${name}`;

export const formButton = (name: string, isEdit?: boolean) =>
  isEdit ? `Update ${name}` : `Add ${name}`;

export const inputDefaultPlaceholder = (name: string) => `Enter ${name}`;
