"use server";

import { prisma } from "../prisma";
import { revalidatePath } from "next/cache";
import { General } from "@prisma/client";

// Define the data type for General, excluding Prisma-managed timestamps
export type GeneralDataType = Omit<General, "Created_at" | "Updated_at">;

import { DeleteFunctionReturnType, Settings } from "@/types/General";

/**
 * Retrieves a paginated and optionally filtered list of general entries.
 * @param params - Optional parameters for pagination (page, limit) and filtering (query).
 * @returns A promise that resolves to an object containing the list of general entries, total count, and any error.
 */
export async function getGenerals(params?: {
  page?: number;
  limit?: number;
  query?: string;
}) {
  const { page = 1, limit = 10, query } = params || {};
  const skip = (page - 1) * limit;

  try {
    // Build the where condition for filtering based on the query
    const whereCondition: any = query
      ? {
          OR: [{ Key: { contains: query } }, { Value: { contains: query } }],
        }
      : {};

    // Fetch general entries from the database
    const generals = await prisma.general.findMany({
      skip,
      take: limit,
      where: whereCondition,
      orderBy: {
        Created_at: "desc", // Order by creation date in descending order
      },
    });
    // Get the total count of general entries matching the filter
    const totalGenerals = await prisma.general.count({ where: whereCondition });
    return { generals, total: totalGenerals, error: null };
  } catch (error) {
    console.error("Error fetching general entries:", error);
    return { error: "Error fetching general entries", generals: [], total: 0 };
  }
}

/**
 * Retrieves a single general entry by its unique Key.
 * @param Key - The unique key of the general entry.
 * @returns A promise that resolves to an object containing the general entry or an error if not found.
 */
export async function getGeneralByKey(id: string) {
  const Key = id;
  try {
    // Fetch the general entry by its primary key
    const general = await prisma.general.findUnique({
      where: { Key },
    });

    if (!general) {
      return { error: "General entry not found", general: null };
    }

    return { general, error: null };
  } catch (error) {
    console.error("Error fetching general entry:", error);
    return { error: "Error fetching general entry", general: null };
  }
}

/**
 * Creates a new general entry.
 * @param data - The data for the new general entry.
 * @returns A promise that resolves to an object containing the created general entry or an error.
 */
export async function createGeneral(data: GeneralDataType) {
  try {
    // Check if an entry with the same key already exists
    const existingGeneral = await prisma.general.findUnique({
      where: { Key: data.Key },
    });

    if (existingGeneral) {
      return { error: "An entry with this key already exists", general: null };
    }

    // Create the new general entry
    const general = await prisma.general.create({
      data: {
        ...data,
      },
    });

    revalidatePath("/dashboard/generals"); // Revalidate the cache for the generals list page
    return { general, error: null };
  } catch (error) {
    console.error("Error creating general entry:", error);
    return { error: "Error creating general entry", general: null };
  }
}

/**
 * Updates an existing general entry.
 * @param Key - The unique key of the general entry to update.
 * @param data - The partial data to update the general entry with.
 * @returns A promise that resolves to an object containing the updated general entry or an error.
 */
export async function updateGeneral(
  id: string,
  data: Partial<GeneralDataType>
) {
  try {
    // Update the general entry
    const general = await prisma.general.update({
      where: { Key: id },
      data,
    });

    revalidatePath("/dashboard/generals"); // Revalidate the cache for the generals list page
    revalidatePath(`/dashboard/generals/${id}`); // Revalidate the cache for the specific general entry page
    return { general };
  } catch (error) {
    console.error("Error updating general entry:", error);
    return { error: "Error updating general entry", general: null };
  }
}

/**
 * Deletes a general entry by its unique Key.
 * @param Key - The unique key of the general entry to delete.
 * @returns A promise that resolves to an object indicating success or an error.
 */
export async function deleteGeneral(Key: string): DeleteFunctionReturnType {
  try {
    // Delete the general entry
    await prisma.general.delete({
      where: { Key },
    });

    revalidatePath("/dashboard/generals"); // Revalidate the cache for the generals list page
    return { success: true };
  } catch (error) {
    console.error("Error deleting general entry:", error);
    return { error: "Error deleting general entry" };
  }
}

/**
 * Retrieves all general settings.
 * @returns A promise that resolves to an object containing all settings or an error.
 */
export async function getGeneralSettings() {
  try {
    const settings = await prisma.general.findMany();
    return { settings };
  } catch (error) {
    console.error("Failed to fetch general settings:", error);
    return { error: "خطا در دریافت تنظیمات عمومی" };
  }
}

/**
 * Retrieves a single setting by key.
 * @param key - The key of the setting to retrieve.
 * @returns A promise that resolves to an object containing the setting or an error.
 */
export async function getSettingByKey(key: string) {
  try {
    const setting = await prisma.general.findUnique({
      where: { Key: key },
    });

    if (!setting) {
      return { error: "تنظیمات مورد نظر یافت نشد" };
    }

    return { setting };
  } catch (error) {
    console.error("Failed to fetch setting:", error);
    return { error: "خطا در دریافت تنظیمات" };
  }
}

/**
 * Creates a new setting.
 * @param data - The data for the new setting (excluding id).
 * @returns A promise that resolves to an object containing the created setting or an error.
 */
export async function createSetting(data: Omit<GeneralDataType, "id">) {
  try {
    const existingSetting = await prisma.general.findUnique({
      where: { Key: data.Key },
    });

    if (existingSetting) {
      return { error: "تنظیماتی با این کلید قبلاً ثبت شده است" };
    }

    const setting = await prisma.general.create({
      data,
    });

    revalidatePath("/dashboard/settings");
    return { setting };
  } catch (error) {
    console.error("Failed to create setting:", error);
    return { error: "خطا در ایجاد تنظیمات" };
  }
}

/**
 * Updates a setting by key.
 * @param key - The key of the setting to update.
 * @param value - The new value for the setting.
 * @returns A promise that resolves to an object containing the updated setting or an error.
 */
export async function updateSetting(key: string, value: string) {
  try {
    const setting = await prisma.general.update({
      where: { Key: key },
      data: { Value: value },
    });

    revalidatePath("/dashboard/settings");
    return { setting };
  } catch (error) {
    console.error("Failed to update setting:", error);
    return { error: "خطا در به‌روزرسانی تنظیمات" };
  }
}

/**
 * Deletes a setting by key.
 * @param key - The key of the setting to delete.
 * @returns A promise that resolves to an object indicating success or an error.
 */
export async function deleteSetting(key: string) {
  try {
    await prisma.general.delete({
      where: { Key: key },
    });

    revalidatePath("/dashboard/settings");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete setting:", error);
    return { error: "خطا در حذف تنظیمات" };
  }
}

/**
 * Upserts a setting (create if not exists, update if exists).
 * @param data - The data for the setting.
 * @returns A promise that resolves to an object containing the upserted setting or an error.
 */
export async function upsertSetting(data: GeneralDataType) {
  try {
    const setting = await prisma.general.upsert({
      where: { Key: data.Key },
      update: { Value: data.Value },
      create: data,
    });

    revalidatePath("/dashboard/settings");
    return { setting };
  } catch (error) {
    console.error("Failed to upsert setting:", error);
    return { error: "خطا در ثبت یا به‌روزرسانی تنظیمات" };
  }
}

/**
 * Retrieves fee-related settings as key-value pairs.
 * @returns A promise that resolves to an object containing fee settings or an error.
 */
export async function getFeeSettings() {
  try {
    const feeKeys = [...Object.keys(Settings)];

    const settings = await prisma.general.findMany({
      where: {
        Key: { in: feeKeys },
      },
    });

    // Convert array of settings to an object with key-value pairs
    const feeSettings = settings.reduce(
      (acc: { [key: string]: string }, setting) => {
        acc[setting.Key] = setting.Value;
        return acc;
      },
      {}
    );

    return {
      settings: {
        [Settings.FixedFee]: feeSettings.fixedFee,
        [Settings.CertificateFee]: feeSettings.certificateFee,
        [Settings.BooksFee]: feeSettings.booksFee,
        [Settings.PricePerUnit]: feeSettings.pricePerUnit,
        [Settings.ExtraClassFee]: feeSettings.extraClassFee,
      } as Record<Settings, string>,
    };
  } catch (error) {
    console.error("Failed to fetch fee settings:", error);
    return {
      error: "خطا در دریافت تنظیمات هزینه‌ها",
      settings: {} as Record<Settings, string>,
    };
  }
}

export const clearGeneralData = async () => {
  try {
    await prisma.general.deleteMany();
  } catch (error) {
    console.error("Error clearing general data:", error);
  }
};
