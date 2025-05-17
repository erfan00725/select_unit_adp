import { z } from "zod";

// Schema for validating General data when creating a new entry
export const GeneralSchema = z.object({
  Key: z
    .string()
    .min(1, { message: "Key is required" })
    .max(255, { message: "Key must be 255 characters or less" }),
  Value: z
    .string()
    .min(1, { message: "Value is required" })
    .max(255, { message: "Value must be 255 characters or less" }),
});

/**
 * Safely validates data for creating a General entry.
 * @param data - The data to validate.
 * @returns The validated data or an error object.
 */
export function validateGeneralSafe(data: unknown) {
  return GeneralSchema.safeParse(data);
}

// Schema for validating General data when updating an existing entry (all fields optional)
export const PartialGeneralSchema = GeneralSchema.partial();

/**
 * Safely validates data for updating a General entry.
 * @param data - The data to validate.
 * @returns The validated data or an error object.
 */
export function validatePartialGeneralSafe(data: unknown) {
  return GeneralSchema.parse(data);
}
