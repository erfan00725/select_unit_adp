import { z } from "zod";
import { LessonGrade } from "@/generated/prisma";
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
    .min(1, { message: errorMassages.requiredField("Lesson name") })
    .max(255, { message: errorMassages.maxLength("Lesson name", 255) }),

  Unit: z
    .number()
    .or(z.string().transform((val) => Number(val)))
    .pipe(
      z
        .number()
        .int({ message: errorMassages.integerNumber("Unit") })
        .positive({ message: errorMassages.positiveNumber("Unit") })
    ),

  TeacherId: z
    .bigint()
    .or(
      z
        .string()
        .transform((val) => (returnNullIfEmpty(val) ? BigInt(val) : undefined))
    )
    .optional(),

  // Optional fields with validation
  Grade: z
    .nativeEnum(LessonGrade)
    .optional()
    .or(z.string().transform(returnNullIfEmpty))
    .pipe(z.nativeEnum(LessonGrade).optional()),

  fieldId: z
    .bigint()
    .or(
      z
        .string()
        .transform((val) => (returnNullIfEmpty(val) ? BigInt(val) : undefined))
    )
    .optional(),

  PassCondition: z
    .number()
    .or(z.string().transform((val) => Number(val)))
    .pipe(
      z
        .number()
        .int({ message: errorMassages.integerNumber("Pass condition") })
        .min(0, { message: errorMassages.nonNegativeNumber("Pass condition") })
    )
    .optional(),

  TheoriHours: z
    .number()
    .or(z.string().transform((val) => Number(val)))
    .pipe(
      z
        .number()
        .int({ message: errorMassages.integerNumber("Theory hours") })
        .min(0, { message: errorMassages.nonNegativeNumber("Theory hours") })
    )
    .optional(),

  PracticalHours: z
    .number()
    .or(z.string().transform((val) => Number(val)))
    .pipe(
      z
        .number()
        .int({ message: errorMassages.integerNumber("Practical hours") })
        .min(0, { message: errorMassages.nonNegativeNumber("Practical hours") })
    )
    .optional(),

  RequireLesson: z
    .number({ message: errorMassages.integerNumber("Required lesson") })
    .or(
      z
        .string()
        .transform((val) => (returnNullIfEmpty(val) ? Number(val) : undefined))
    )
    .optional(),

  RequireUnit: z
    .bigint()
    .or(z.string().transform((val) => BigInt(val)))
    .optional(),

  NotifCode: z
    .bigint()
    .or(z.string().transform((val) => BigInt(val)))
    .optional(),

  ValidFrom: z
    .date()
    .or(z.string().transform((val) => new Date(val) || new Date()))
    .optional(),

  ValidTill: z
    .date()
    .or(z.string().transform((val) => new Date(val) || undefined))
    .optional(),

  PricePerUnit: z
    .bigint()
    .or(z.string().transform((val) => BigInt(val)))
    .optional(),
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
