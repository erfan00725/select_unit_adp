import { z } from "zod";
import errorMassages from "@/constants/massages";
import { Period } from "@/generated/prisma";
import { SelectUnitDataType } from "@/types/Tables";

/**
 * Zod validation schema for the SelectUnit form
 * This schema validates data before it's sent to the database
 */
export const selectUnitSchema = z.object({
  // Required fields
  Period: z
    .nativeEnum(Period, {
      errorMap: () => ({ message: errorMassages.requiredField("Period") }),
    })
    .describe("Academic period (first half, second half, or summer)"),

  Year: z
    .number()
    .or(z.string().transform((val) => Number(val)))
    .pipe(
      z
        .number()
        .int({ message: errorMassages.integerNumber("Year") })
        .min(1000, { message: "Year must be a 4-digit number" })
        .max(9999, { message: "Year must be a 4-digit number" })
    )
    .describe("Academic year"),

  Lesson: z
    .bigint()
    .or(z.string().transform((val) => BigInt(val)))
    .describe("Lesson ID"),

  StudentId: z
    .bigint()
    .or(z.string().transform((val) => BigInt(val)))
    .describe("Student ID if applicable"),

  // Optional fields
  Lessons: z
    .array(z.bigint().or(z.string().transform((val) => BigInt(val))))
    .min(1, { message: "At least one lesson must be selected" })
    .describe("Array of selected lesson IDs"),

  ExtraFee: z
    .bigint()
    .or(z.string().transform((val) => BigInt(val)))
    .optional()
    .default(BigInt(0))
    .describe("Any additional fees"),
});

/**
 * Type definition derived from the Zod schema
 */
export type SelectUnitInput = z.infer<typeof selectUnitSchema>;

/**
 * Validates select unit data against the schema
 * @param data - The select unit data to validate
 * @returns The validated and transformed data
 */
export function validateSelectUnit(data: unknown) {
  return selectUnitSchema.parse(data);
}

/**
 * Safe validation that returns a result object instead of throwing
 * @param data - The select unit data to validate
 * @returns An object with success status and either data or error
 */
export function validateSelectUnitSafe(data: unknown) {
  return selectUnitSchema.safeParse(data);
}
