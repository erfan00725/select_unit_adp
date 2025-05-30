import { z } from "zod";
import errorMassages from "@/constants/massages";
import { Period, PaymentMethods } from "@prisma/client";

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

  StudentId: z
    .bigint()
    .or(z.string().transform((val) => BigInt(val)))
    .describe("شناسه دانش‌آموز در صورت وجود"),

  // Optional fields
  Lessons: z
    .array(z.bigint().or(z.string().transform((val) => BigInt(val))))
    .min(1, { message: "حداقل یک درس باید انتخاب شود" })
    .describe("آرایه‌ای از شناسه‌های دروس انتخاب شده"),

  OtherFee: z
    .bigint()
    .or(z.string().transform((val) => BigInt(val)))
    .optional()
    .nullable()
    .default(BigInt(0))
    .describe("هزینه‌های اضافی"),

  FixedFee: z
    .bigint()
    .or(z.string().transform((val) => BigInt(val)))
    .optional(),

  // Add new fee fields to the schema
  CertificateFee: z
    .bigint()
    .or(z.string().transform((val) => BigInt(val)))
    .optional()
    .nullable()
    .default(BigInt(0))
    .describe("هزینه گواهی"),

  ExtraClassFee: z
    .bigint()
    .or(z.string().transform((val) => BigInt(val)))
    .optional()
    .nullable()
    .default(BigInt(0))
    .describe("هزینه کلاس اضافی"),

  BooksFee: z
    .bigint()
    .or(z.string().transform((val) => BigInt(val)))
    .optional()
    .nullable()
    .default(BigInt(0))
    .describe("هزینه کتاب"),

  InsuranceFee: z
    .bigint()
    .or(z.string().transform((val) => BigInt(val)))
    .optional()
    .nullable()
    .default(BigInt(0))
    .describe("هزینه بیمه"),

  Discount: z
    .bigint()
    .or(z.string().transform((val) => BigInt(val)))
    .optional()
    .nullable()
    .default(BigInt(0))
    .describe("تخفیف"),

  Paid: z
    .boolean()
    .default(false)
    .nullable()
    .optional()
    .describe("وضعیت پرداخت"),

  PaymentMethod: z
    .nativeEnum(PaymentMethods)
    .or(z.string().transform((val) => val as PaymentMethods))
    .optional()
    .nullable()
    .describe("روش پرداخت"),

  PaymentDescription: z
    .string()
    .optional()
    .nullable()
    .describe("توضیحات پرداخت"),

  PaymentDate: z
    .date()
    .or(z.string().transform((val) => new Date(val)))
    .optional()
    .nullable()
    .describe("تاریخ پرداخت"),
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
