"use server";

import { FieldDataType } from "@/types/Tables";
import { prisma } from "../prisma";
import { revalidatePath } from "next/cache";

// Get all fields
export async function getFields() {
  try {
    const fields = await prisma.field.findMany({
      include: {
        students: true,
        lessons: true,
        teachers: true,
      },
    });
    return { fields };
  } catch (error) {
    console.error("Failed to fetch fields:", error);
    return { error: "Failed to fetch fields" };
  }
}

// Get a single field by ID
export async function getFieldById(id: bigint) {
  try {
    const field = await prisma.field.findUnique({
      where: { id },
      include: {
        students: true,
        lessons: true,
        teachers: true,
      },
    });

    if (!field) {
      return { error: "Field not found" };
    }

    return { field };
  } catch (error) {
    console.error("Failed to fetch field:", error);
    return { error: "Failed to fetch field" };
  }
}

// Create a new field
export async function createField(data: FieldDataType) {
  try {
    const existingField = await prisma.field.findFirst({
      where: { Name: data.Name },
    });

    if (existingField) {
      return { error: "A field with this name already exists" };
    }

    const field = await prisma.field.create({
      data,
    });

    revalidatePath("/dashboard/fields");
    return { field };
  } catch (error) {
    console.error("Failed to create field:", error);
    return { error: "Failed to create field" };
  }
}

// Update a field
export async function updateField(id: bigint, data: Partial<FieldDataType>) {
  try {
    // Check if name is being updated and if it's already in use
    if (data.Name) {
      const existingField = await prisma.field.findFirst({
        where: {
          Name: data.Name,
          id: { not: id },
        },
      });

      if (existingField) {
        return { error: "A field with this name already exists" };
      }
    }

    const field = await prisma.field.update({
      where: { id },
      data,
    });

    revalidatePath("/dashboard/fields");
    revalidatePath(`/dashboard/fields/${id}`);
    return { field };
  } catch (error) {
    console.error("Failed to update field:", error);
    return { error: "Failed to update field" };
  }
}

// Delete a field
export async function deleteField(id: bigint) {
  try {
    // Check if field has any related records before deleting
    const fieldWithRelations = await prisma.field.findUnique({
      where: { id },
      include: {
        students: true,
        lessons: true,
        teachers: true,
      },
    });

    if (fieldWithRelations?.students.length) {
      return { error: "Cannot delete field with associated students" };
    }

    if (fieldWithRelations?.lessons.length) {
      return { error: "Cannot delete field with associated lessons" };
    }

    if (fieldWithRelations?.teachers.length) {
      return { error: "Cannot delete field with associated teachers" };
    }

    await prisma.field.delete({
      where: { id },
    });

    revalidatePath("/dashboard/fields");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete field:", error);
    return { error: "Failed to delete field" };
  }
}
