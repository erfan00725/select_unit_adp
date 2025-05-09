"use server";

import { BaseListFilterParams, FieldDataType } from "@/types/Tables";
import { prisma } from "../prisma";
import { revalidatePath } from "next/cache";

// Get all fields
export async function getFields(params?: BaseListFilterParams) {
  try {
    // Default values for pagination
    const limit = params?.limit || 10;
    const page = params?.page || 1;
    const skip = (page - 1) * limit;
    const query = params?.query || "";
    const order = params?.order || "asc";
    const from = params?.from;
    const to = params?.to;

    // Build where condition for search
    const where: any = query
      ? {
          OR: [{ Name: { contains: query } }],
        }
      : {};

    // Add date range filter if provided
    if (from || to) {
      where.Created_at = {};
      if (from) where.Created_at.gte = from;
      if (to) where.Created_at.lte = to;
    }

    // Get total count for pagination
    const totalCount = await prisma.field.count({ where });

    // Get fields with filtering, sorting and pagination
    const fields = await prisma.field.findMany({
      where,
      include: {
        students: true,
        lessons: true,
        teachers: true,
      },
      orderBy: {
        Name: order === "asc" ? "asc" : "desc",
      },
      skip,
      take: limit,
    });

    return {
      fields,
      pagination: {
        total: totalCount,
        totalPages: Math.ceil(totalCount / limit),
        currentPage: page,
        limit,
      },
    };
  } catch (error) {
    console.error("Failed to fetch fields:", error);
    return { error: "خطا در دریافت رشته‌ها" };
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
      return { error: "رشته مورد نظر یافت نشد" };
    }

    return { field };
  } catch (error) {
    console.error("Failed to fetch field:", error);
    return { error: "خطا در دریافت رشته" };
  }
}

// Create a new field
export async function createField(data: FieldDataType) {
  try {
    const existingField = await prisma.field.findFirst({
      where: { Name: data.Name },
    });

    if (existingField) {
      return { error: "رشته‌ای با این نام قبلاً ثبت شده است" };
    }

    const editedData = {
      ...data,
      id: undefined,
    };

    const field = await prisma.field.create({
      data: editedData,
    });

    revalidatePath("/dashboard/fields");
    return { field };
  } catch (error) {
    console.error("Failed to create field:", error);
    return { error: "خطا در ایجاد رشته" };
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
        return { error: "رشته‌ای با این نام قبلاً ثبت شده است" };
      }
    }

    const editedData = {
      ...data,
      id: undefined,
    };

    const field = await prisma.field.update({
      where: { id },
      data: editedData,
    });

    revalidatePath("/dashboard/fields");
    revalidatePath(`/dashboard/fields/${id}`);
    return { field };
  } catch (error) {
    console.error("Failed to update field:", error);
    return { error: "خطا در به‌روزرسانی رشته" };
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
      return { error: "امکان حذف رشته‌ای که دارای دانش‌آموز است وجود ندارد" };
    }

    if (fieldWithRelations?.lessons.length) {
      return { error: "امکان حذف رشته‌ای که دارای درس است وجود ندارد" };
    }

    if (fieldWithRelations?.teachers.length) {
      return { error: "امکان حذف رشته‌ای که دارای استاد است وجود ندارد" };
    }

    await prisma.field.delete({
      where: { id },
    });

    revalidatePath("/dashboard/fields");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete field:", error);
    return { error: "خطا در حذف رشته" };
  }
}
