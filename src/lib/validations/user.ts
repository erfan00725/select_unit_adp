import { z } from "zod";
import { UserType } from "@prisma/client";
import errorMassages from "@/constants/massages";

/**
 * Zod validation schema for the User model
 * This schema validates user data before it's sent to the database
 */
export const userSchema = z
  .object({
    UserName: z
      .string()
      .min(1, { message: errorMassages.requiredField("نام کاربری") })
      .max(255, { message: errorMassages.maxLength("نام کاربری", 255) }),
    Password: z
      .string()
      .min(1, { message: errorMassages.requiredField("رمز عبور") })
      .max(255, { message: errorMassages.maxLength("رمز عبور", 255) }),
    ConfirmPassword: z
      .string()
      .min(1, { message: errorMassages.requiredField("تکرار رمز عبور") })
      .max(255, { message: errorMassages.maxLength("تکرار رمز عبور", 255) }),
    Type: z
      .nativeEnum(UserType, {
        message: errorMassages.requiredField("نوع کاربر"),
      })
      .optional()
      .nullable(),
  })
  .refine((data) => data.Password === data.ConfirmPassword, {
    message: "رمز عبور و تایید رمز عبور مطابقت ندارند",
    path: ["ConfirmPassword"],
  });

/**
 * Validates user data against the schema
 * @param data - The user data to validate
 * @returns The validated data or throws an error
 */
export const validateUser = (data: unknown) => {
  return userSchema.parse(data);
};

/**
 * Safely validates user data against the schema
 * @param data - The user data to validate
 * @returns An object containing the validated data or validation errors
 */
export const validateUserSafe = (data: unknown) => {
  return userSchema.safeParse(data);
};
