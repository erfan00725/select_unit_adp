const errorMassages = {
  invalidType: (fieldName: string, expectedType: string) =>
    `Invalid type for ${fieldName}. Expected ${expectedType}.`,
  invalidValue: (fieldName: string, expectedValue: string) =>
    `Invalid value for ${fieldName}. Expected ${expectedValue}.`,
  invalidLength: (fieldName: string, expectedLength: number) =>
    `Invalid length for ${fieldName}. Expected ${expectedLength}.`,
  invalidDate: (fieldName: string, error?: string) =>
    `Invalid date for ${fieldName}: ${error}`,
  invalidEmail: (fieldName: string) => `Invalid email for ${fieldName}.`,
  invalidPhone: (fieldName: string) => `Invalid phone number for ${fieldName}.`,
  requiredField: (fieldName: string) => `${fieldName} is required.`,
  positiveNumber: (fieldName: string) =>
    `${fieldName} must be a positive number.`,
  integerNumber: (fieldName: string) => `${fieldName} must be an integer.`,
  nonNegativeNumber: (fieldName: string) =>
    `${fieldName} must be a non-negative number.`,
  maxLength: (fieldName: string, maxLength: number) =>
    `${fieldName} must be less than ${maxLength} characters.`,
  minLength: (fieldName: string, minLength: number) =>
    `${fieldName} must be at least ${minLength} characters.`,
  baseErrorMassage: (error: string) => `Something went wrong: ${error}`,
};

export const successMassages = {
  addSuccess: (objectName: string) => `${objectName} added successfully.`,
  updateSuccess: (objectName: string) => `${objectName} updated successfully.`,
};

export default errorMassages;
