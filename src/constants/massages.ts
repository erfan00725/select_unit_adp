const errorMassages = {
  invalidType: (fieldName: string, expectedType: string) =>
    `نوع نامعتبر برای ${fieldName}. نوع مورد انتظار ${expectedType}.`,
  invalidValue: (fieldName: string, expectedValue: string) =>
    `مقدار نامعتبر برای ${fieldName}. مقدار مورد انتظار ${expectedValue}.`,
  invalidLength: (fieldName: string, expectedLength: number) =>
    `طول نامعتبر برای ${fieldName}. طول مورد انتظار ${expectedLength}.`,
  invalidDate: (fieldName: string, error?: string) =>
    `تاریخ نامعتبر برای ${fieldName}: ${error}`,
  invalidEmail: (fieldName: string) => `ایمیل نامعتبر برای ${fieldName}.`,
  invalidPhone: (fieldName: string) => `شماره تلفن نامعتبر برای ${fieldName}.`,
  requiredField: (fieldName: string) => `${fieldName} الزامی است.`,
  positiveNumber: (fieldName: string) =>
    `${fieldName} باید یک عدد مثبت باشد.`,
  integerNumber: (fieldName: string) => `${fieldName} باید یک عدد صحیح باشد.`,
  nonNegativeNumber: (fieldName: string) =>
    `${fieldName} باید یک عدد غیر منفی باشد.`,
  maxLength: (fieldName: string, maxLength: number) =>
    `${fieldName} باید کمتر از ${maxLength} کاراکتر باشد.`,
  minLength: (fieldName: string, minLength: number) =>
    `${fieldName} باید حداقل ${minLength} کاراکتر باشد.`,
  baseErrorMassage: (error: string) => `خطایی رخ داد: ${error}`,
  lengthError: (fieldName: string, length: number) =>
    `${fieldName} باید دقیقاً ${length} کاراکتر باشد.`,
};

export const successMassages = {
  addSuccess: (objectName: string) => `${objectName} با موفقیت اضافه شد.`,
  updateSuccess: (objectName: string) => `${objectName} با موفقیت بروزرسانی شد.`,
};

export default errorMassages;
