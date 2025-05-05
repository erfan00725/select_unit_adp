import { z } from "zod";
import { Grade } from "@prisma/client";
import errorMassages from "@/constants/massages";
import { returnNullIfEmpty } from "../utils/validationUtilds";

/**
 * Zod validation schema for the Student model
 * This schema validates data before it's sent to the database
 */
export const studentSchema = z.object({
  // Required fields
  FirstName: z
    .string()
    .min(1, { message: errorMassages.requiredField("نام") })
    .max(255, { message: errorMassages.maxLength("نام", 255) }),

  LastName: z
    .string()
    .min(1, { message: errorMassages.requiredField("نام خانوادگی") })
    .max(255, { message: errorMassages.maxLength("نام خانوادگی", 255) }),

  NationalCode: z
    .string()
    .length(10, { message: errorMassages.lengthError("کد ملی", 10) }),

  fieldId: z
    .bigint({ message: errorMassages.requiredField("شناسه رشته") })
    .nonnegative({ message: errorMassages.nonNegativeNumber("شناسه رشته") }),

  // Optional fields with validation
  Father: z
    .string()
    .max(255, { message: errorMassages.maxLength("نام پدر", 255) })
    .optional()
    .nullable()
    .or(z.string().transform(returnNullIfEmpty)),

  Birth: z
    .date()
    .or(z.string().transform((val) => new Date(val) || undefined))
    .optional()
    .nullable(),

  Address: z
    .string()
    .max(255, { message: errorMassages.maxLength("آدرس", 255) })
    .optional()
    .nullable()
    .or(z.string().transform(returnNullIfEmpty)),

  HomeNumber: z
    .string()
    .max(255, { message: errorMassages.maxLength("تلفن منزل", 255) })
    .optional()
    .nullable()
    .or(z.string().transform(returnNullIfEmpty)),

  PhoneNumber: z
    .string()
    .max(255, { message: errorMassages.maxLength("شماره موبایل", 255) })
    .optional()
    .nullable()
    .or(z.string().transform(returnNullIfEmpty)),

  Grade: z
    .nativeEnum(Grade)
    .optional()
    .nullable()
    .or(z.string().transform(returnNullIfEmpty))
    .pipe(z.nativeEnum(Grade).optional().nullable()),

  Gender: z
    .boolean()
    .optional()
    .nullable()
    .or(
      z.string().transform((val) => {
        if (val === "") return undefined;
        return val === "true" || val === "1";
      })
    ),
});

/**
 * Partial schema for updating students
 * All fields are optional for updates
 */
export const studentUpdateSchema = studentSchema.partial();

/**
 * Type definitions derived from the Zod schemas
 */
export type StudentInput = z.infer<typeof studentSchema>;
export type StudentUpdateInput = z.infer<typeof studentUpdateSchema>;

/**
 * Validates student data against the schema
 * @param data - The student data to validate
 * @returns The validated and transformed data
 */
export function validateStudent(data: unknown) {
  return studentSchema.parse(data);
}

/**
 * Validates student update data against the partial schema
 * @param data - The student update data to validate
 * @returns The validated and transformed data
 */
export function validateStudentUpdate(data: unknown) {
  return studentUpdateSchema.parse(data);
}

/**
 * Safe validation that returns a result object instead of throwing
 * @param data - The student data to validate
 * @returns An object with success status and either data or error
 */
export function validateStudentSafe(data: unknown) {
  console.log("validat ", data);
  try {
    const validData = studentSchema.parse(data);
    return { success: true, data: validData };
  } catch (error) {
    return { success: false, error };
  }
}

/**
 * Safe validation for updates that returns a result object instead of throwing
 * @param data - The student update data to validate
 * @returns An object with success status and either data or error
 */
export function validateStudentUpdateSafe(data: unknown) {
  try {
    const validData = studentUpdateSchema.parse(data);
    return { success: true, data: validData };
  } catch (error) {
    return { success: false, error };
  }
}
