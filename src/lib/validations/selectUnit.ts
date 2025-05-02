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
      errorMap: () => ({ message: errorMassages.requiredField("نیمسال") }),
    })
    .describe("نیمسال تحصیلی (نیمسال اول، نیمسال دوم یا تابستان)"),

  Year: z
    .number()
    .or(z.string().transform((val) => Number(val)))
    .pipe(
      z
        .number()
        .int({ message: errorMassages.integerNumber("سال تحصیلی") })
        .min(1000, { message: "سال باید یک عدد ۴ رقمی باشد" })
        .max(9999, { message: "سال باید یک عدد ۴ رقمی باشد" })
    )
    .describe("سال تحصیلی"),

  Lesson: z
    .bigint()
    .or(z.string().transform((val) => BigInt(val)))
    .describe("شناسه درس"),

  StudentId: z
    .bigint()
    .or(z.string().transform((val) => BigInt(val)))
    .describe("شناسه دانشجو در صورت وجود"),

  // Optional fields
  Lessons: z
    .array(z.bigint().or(z.string().transform((val) => BigInt(val))))
    .min(1, { message: "حداقل یک درس باید انتخاب شود" })
    .describe("آرایه‌ای از شناسه‌های دروس انتخاب شده"),

  ExtraFee: z
    .bigint()
    .or(z.string().transform((val) => BigInt(val)))
    .optional()
    .default(BigInt(0))
    .describe("هزینه‌های اضافی"),
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
