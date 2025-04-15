import { z } from "zod";
import errorMassages from "@/constants/massages";
import { returnNullIfEmpty } from "../utils/validationUtilds";

/**
 * Zod validation schema for the Teacher model
 * This schema validates data before it's sent to the database
 */
export const teacherSchema = z.object({
  // Required fields
  FirstName: z
    .string()
    .min(1, { message: errorMassages.requiredField("First name") })
    .max(255, { message: errorMassages.maxLength("First name", 255) }),

  LastName: z
    .string()
    .min(1, { message: errorMassages.requiredField("Last name") })
    .max(255, { message: errorMassages.maxLength("Last name", 255) }),

  NationalCode: z
    .string()
    .length(10, { message: errorMassages.lengthError("National Code", 10) }),

  PhoneNumber: z
    .string()
    .min(1, { message: errorMassages.requiredField("Phone number") })
    .max(255, { message: errorMassages.maxLength("Phone number", 255) }),

  // Optional fields with validation
  fieldId: z
    .bigint()
    .or(
      z
        .string()
        .transform((val) => (returnNullIfEmpty(val) ? BigInt(val) : undefined))
    )
    .optional(),

  Birth: z
    .date()
    .or(z.string().transform((val) => new Date(val) || undefined))
    .optional(),

  Gender: z
    .boolean()
    .or(z.string().transform((val) => val === "true"))
    .default(true),
});

/**
 * Validates teacher data against the schema
 * @param data - The teacher data to validate
 * @returns The validated data or throws an error
 */
export const validateTeacher = (data: unknown) => {
  return teacherSchema.parse(data);
};

/**
 * Safely validates teacher data against the schema
 * @param data - The teacher data to validate
 * @returns An object containing the validated data or validation errors
 */
export const safeValidateTeacher = (data: unknown) => {
  return teacherSchema.safeParse(data);
};
