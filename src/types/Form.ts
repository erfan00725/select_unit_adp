export type UpdateFunction<T> = (
  id: bigint,
  data: T
) => Promise<{ error?: string; [key: string]: any }>;
export type AddFunction<T> = (
  data: T
) => Promise<{ error?: string; [key: string]: any }>;

export type SubmitFunction<T> = UpdateFunction<T> | AddFunction<T>;

export type ValidationResult<T> = {
  success: boolean;
  data?: T;
  error?: unknown;
};

export type ValidateFunction<T> = (
  data: Record<string, any>
) => ValidationResult<T>;
