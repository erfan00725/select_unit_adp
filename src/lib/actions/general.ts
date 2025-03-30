"use server";

import { GeneralDataType } from "@/types/Tables";
import { prisma } from "../prisma";
import { revalidatePath } from "next/cache";

// Get all general settings
export async function getGeneralSettings() {
  try {
    const settings = await prisma.general.findMany();
    return { settings };
  } catch (error) {
    console.error("Failed to fetch general settings:", error);
    return { error: "Failed to fetch general settings" };
  }
}

// Get a single setting by key
export async function getSettingByKey(key: string) {
  try {
    const setting = await prisma.general.findUnique({
      where: { Key: key },
    });

    if (!setting) {
      return { error: "Setting not found" };
    }

    return { setting };
  } catch (error) {
    console.error("Failed to fetch setting:", error);
    return { error: "Failed to fetch setting" };
  }
}

// Create a new setting
export async function createSetting(data: GeneralDataType) {
  try {
    const existingSetting = await prisma.general.findUnique({
      where: { Key: data.Key },
    });

    if (existingSetting) {
      return { error: "A setting with this key already exists" };
    }

    const setting = await prisma.general.create({
      data,
    });

    revalidatePath("/dashboard/settings");
    return { setting };
  } catch (error) {
    console.error("Failed to create setting:", error);
    return { error: "Failed to create setting" };
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
    return { error: "Failed to update setting" };
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
    return { error: "Failed to delete setting" };
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
    return { error: "Failed to upsert setting" };
  }
}
