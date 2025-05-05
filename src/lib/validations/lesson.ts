import { z } from "zod";
import { LessonGrade } from "@prisma/client";
import errorMassages from "@/constants/massages";
import { returnNullIfEmpty } from "../utils/validationUtilds";

/**
 * Zod validation schema for the Lesson model
 * This schema validates data before it's sent to the database
 */
export const lessonSchema = z.object({
  // Required fields
  LessonName: z
    .string()
    .min(1, { message: errorMassages.requiredField("نام درس") })
    .max(255, { message: errorMassages.maxLength("نام درس", 255) }),

  TheoriUnit: z
    .number()
    .or(z.string().transform((val) => Number(val)))
    .pipe(
      z
        .number()
        .int({ message: errorMassages.integerNumber("واحد نظری") })
        .nonnegative({ message: errorMassages.positiveNumber("واحد نظری") })
    ),
  PracticalUnit: z
    .number()
    .or(z.string().transform((val) => Number(val)))
    .pipe(
      z
        .number()
        .int({ message: errorMassages.integerNumber("واحد عملی") })
        .nonnegative({ message: errorMassages.positiveNumber("واحد عملی") })
    ),

  TeacherId: z
    .bigint()
    .or(
      z
        .string()
        .transform((val) => (returnNullIfEmpty(val) ? BigInt(val) : undefined))
    )
    .optional()
    .nullable(),

  // Optional fields with validation
  Grade: z
    .nativeEnum(LessonGrade)
    .optional()
    .nullable()
    .or(z.string().transform(returnNullIfEmpty))
    .pipe(z.nativeEnum(LessonGrade).optional().nullable()),

  fieldId: z
    .bigint()
    .or(
      z
        .string()
        .transform((val) => (returnNullIfEmpty(val) ? BigInt(val) : undefined))
    )
    .optional()
    .nullable(),

  PassCondition: z
    .number()
    .or(z.string().transform((val) => Number(val)))
    .pipe(
      z
        .number()
        .int({ message: errorMassages.integerNumber("شرط قبولی") })
        .min(0, { message: errorMassages.nonNegativeNumber("شرط قبولی") })
    )
    .optional()
    .nullable(),

  TheoriHours: z
    .number()
    .or(z.string().transform((val) => Number(val)))
    .pipe(
      z
        .number()
        .int({ message: errorMassages.integerNumber("ساعات نظری") })
        .min(0, { message: errorMassages.nonNegativeNumber("ساعات نظری") })
    )
    .optional()
    .nullable(),

  PracticalHours: z
    .number()
    .or(z.string().transform((val) => Number(val)))
    .pipe(
      z
        .number()
        .int({ message: errorMassages.integerNumber("ساعات عملی") })
        .min(0, { message: errorMassages.nonNegativeNumber("ساعات عملی") })
    )
    .optional()
    .nullable(),

  RequireLesson: z
    .number({ message: errorMassages.integerNumber("درس پیشنیاز") })
    .or(
      z
        .string()
        .transform((val) => (returnNullIfEmpty(val) ? Number(val) : undefined))
        .optional()
        .nullable()
    )
    .optional()
    .nullable(),

  RequireUnit: z.bigint().optional().nullable(),

  NotifCode: z
    .bigint()
    .or(z.string().transform((val) => BigInt(val)))
    .nullable()
    .optional(), // Keeping existing order as nullable().optional()

  ValidFrom: z
    .date()
    .or(z.string().transform((val) => new Date(val) || new Date()))
    .optional()
    .nullable(),

  ValidTill: z
    .date()
    .or(z.string().transform((val) => new Date(val) || undefined))
    .optional()
    .nullable(),

  PricePerUnit: z
    .bigint()
    .or(z.string().transform((val) => BigInt(val)))
    .optional()
    .nullable(),
});

/**
 * Partial schema for updating lessons
 * All fields are optional for updates
 */
export const lessonUpdateSchema = lessonSchema.partial();

/**
 * Type definitions derived from the Zod schemas
 */
export type LessonInput = z.infer<typeof lessonSchema>;
export type LessonUpdateInput = z.infer<typeof lessonUpdateSchema>;

/**
 * Validates lesson data against the schema
 * @param data - The lesson data to validate
 * @returns The validated and transformed data
 */
export function validateLesson(data: unknown) {
  return lessonSchema.parse(data);
}

/**
 * Validates lesson update data against the partial schema
 * @param data - The lesson update data to validate
 * @returns The validated and transformed data
 */
export function validateLessonUpdate(data: unknown) {
  return lessonUpdateSchema.parse(data);
}

/**
 * Safe validation that returns a result object instead of throwing
 * @param data - The lesson data to validate
 * @returns An object with success status and either data or error
 */
export function validateLessonSafe(data: unknown) {
  try {
    const validData = lessonSchema.parse(data);
    return { success: true, data: validData };
  } catch (error) {
    return { success: false, error };
  }
}

/**
 * Safe validation for updates that returns a result object instead of throwing
 * @param data - The lesson update data to validate
 * @returns An object with success status and either data or error
 */
export function validateLessonUpdateSafe(data: unknown) {
  try {
    const validData = lessonUpdateSchema.parse(data);
    return { success: true, data: validData };
  } catch (error) {
    return { success: false, error };
  }
}
