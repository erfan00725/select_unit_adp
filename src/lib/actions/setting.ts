"use server";

import { GeneralDataType } from "@/types/Tables";
import { prisma } from "../prisma";
import { revalidatePath } from "next/cache";
import { Settings } from "@/types/General";

// Get all general settings
export async function getGeneralSettings() {
  try {
    const settings = await prisma.general.findMany();
    return { settings };
  } catch (error) {
    console.error("Failed to fetch general settings:", error);
    return { error: "خطا در دریافت تنظیمات عمومی" };
  }
}

// Get a single setting by key
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

// Create a new setting
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

// Update a setting
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

// Delete a setting
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

// Upsert a setting (create if not exists, update if exists)
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

// Get fee-related settings
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
      fixedFee: feeSettings.fixedFee,
      certificateFee: feeSettings.certificateFee,
      booksFee: feeSettings.booksFee,
      pricePerUnit: feeSettings.pricePerUnit,
      extraClassFee: feeSettings.extraClassFee,
    };
  } catch (error) {
    console.error("Failed to fetch fee settings:", error);
    return { error: "خطا در دریافت تنظیمات هزینه‌ها" };
  }
}
