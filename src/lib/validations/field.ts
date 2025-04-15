import { z } from "zod";
import errorMassages from "@/constants/massages";
import { returnNullIfEmpty } from "../utils/validationUtilds";

/**
 * Zod validation schema for the Field model
 * This schema validates data before it's sent to the database
 */
export const fieldSchema = z.object({
  // Required fields
  Name: z
    .string()
    .min(1, { message: errorMassages.requiredField("Field name") })
    .max(255, { message: errorMassages.maxLength("Field name", 255) }),

  // Optional fields with validation
  FixedFee: z
    .bigint()
    .or(
      z
        .string()
        .transform((val) => (returnNullIfEmpty(val) ? BigInt(val) : undefined))
    )
    .optional()
    .or(z.literal(null)),
});

/**
 * Validates field data against the schema
 * @param data - The field data to validate
 * @returns The validated data or throws an error
 */
export const validateField = (data: unknown) => {
  return fieldSchema.parse(data);
};

/**
 * Safely validates field data against the schema
 * @param data - The field data to validate
 * @returns An object containing the validated data or validation errors
 */
export const safeValidateField = (data: unknown) => {
  return fieldSchema.safeParse(data);
};
