"use server";

import { BaseListFilterParams, TeacherDataType } from "@/types/Tables";
import { prisma } from "../prisma";
import { revalidatePath } from "next/cache";

// Get all teachers
export async function getTeachers(params?: BaseListFilterParams) {
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
    let where: any = query
      ? {
          OR: [
            { FirstName: { contains: query } },
            { LastName: { contains: query } },
            { NationalCode: { contains: query } },
            { PhoneNumber: { contains: query } },
          ],
        }
      : {};

    // Add date range filter if provided
    if (from || to) {
      where.Created_at = {};
      if (from) where.Created_at.gte = from;
      if (to) where.Created_at.lte = to;
    }

    // Get total count for pagination
    const totalCount = await prisma.teacher.count({ where });

    // Get teachers with filtering, sorting and pagination
    const teachers = await prisma.teacher.findMany({
      where,
      include: {
        field: true,
        lessons: true,
      },
      orderBy: {
        LastName: order === "asc" ? "asc" : "desc",
      },
      skip,
      take: limit,
    });

    const modifiedTeahcers = teachers.map((teacher) => ({
      ...teacher,
      FullName: `${teacher.FirstName} ${teacher.LastName}`,
    }));

    return {
      teachers: modifiedTeahcers,
      pagination: {
        total: totalCount,
        totalPages: Math.ceil(totalCount / limit),
        currentPage: page,
        limit,
      },
    };
  } catch (error) {
    console.error("Failed to fetch teachers:", error);
    return { error: "خطا در دریافت لیست اساتید" };
  }
}

// Get a single teacher by ID
export async function getTeacherById(id: bigint) {
  try {
    const teacher = await prisma.teacher.findUnique({
      where: { id },
      include: {
        field: true,
        lessons: true,
      },
    });

    if (!teacher) {
      return { error: "استاد مورد نظر یافت نشد" };
    }

    const modifiedTeahcer = {
      ...teacher,
      FullName: `${teacher.FirstName} ${teacher.LastName}`,
    };

    return { teacher: modifiedTeahcer };
  } catch (error) {
    console.error("Failed to fetch teacher:", error);
    return { error: "خطا در دریافت اطلاعات استاد" };
  }
}

// Create a new teacher
export async function createTeacher(data: TeacherDataType) {
  try {
    const existingTeacher = await prisma.teacher.findUnique({
      where: { NationalCode: data.NationalCode },
    });

    if (existingTeacher) {
      return { error: "استادی با این کد ملی قبلاً ثبت شده است" };
    }

    const editedData = {
      ...data,
      id: undefined,
    };

    const teacher = await prisma.teacher.create({
      data: editedData,
    });

    revalidatePath("/dashboard/teachers");
    return { teacher };
  } catch (error) {
    console.error("Failed to create teacher:", error);
    return { error: "خطا در ایجاد استاد جدید" };
  }
}

// Update a teacher
export async function updateTeacher(
  id: bigint,
  data: Partial<TeacherDataType>
) {
  try {
    // Check if national code is being updated and if it's already in use
    if (data.NationalCode) {
      const existingTeacher = await prisma.teacher.findFirst({
        where: {
          NationalCode: data.NationalCode,
          id: { not: id },
        },
      });

      if (existingTeacher) {
        return { error: "استادی با این کد ملی قبلاً ثبت شده است" };
      }
    }
    const editedData = {
      ...data,
      id: undefined,
    };

    const teacher = await prisma.teacher.update({
      where: { id },
      data: editedData,
    });

    revalidatePath("/dashboard/teachers");
    revalidatePath(`/dashboard/teachers/${id}`);
    return { teacher };
  } catch (error) {
    console.error("Failed to update teacher:", error);
    return { error: "خطا در بروزرسانی اطلاعات استاد" };
  }
}

// Delete a teacher
export async function deleteTeacher(id: bigint) {
  try {
    // Check if teacher has any lessons before deleting
    const teacherWithLessons = await prisma.teacher.findUnique({
      where: { id },
      include: {
        lessons: true,
      },
    });

    if (teacherWithLessons?.lessons.length) {
      return { error: "امکان حذف استادی که دارای درس است وجود ندارد" };
    }

    await prisma.teacher.delete({
      where: { id },
    });

    revalidatePath("/dashboard/teachers");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete teacher:", error);
    return { error: "خطا در حذف استاد" };
  }
}
