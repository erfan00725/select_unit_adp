"use server";

import { prisma } from "../prisma";
import { revalidatePath } from "next/cache";
import { BaseListFilterParams, LessonDataType } from "@/types/Tables";
import { LessonGrade } from "@/generated/prisma";

type LessonsParams = {
  unit?: string;
  grade?: LessonGrade;
  field?: string;
};

// Get all lessons
export async function getLessons(
  params?: BaseListFilterParams & LessonsParams
) {
  try {
    const {
      query,
      order = "asc",
      limit = 10,
      page = 1,
      from,
      to,
      unit,
      field,
      grade,
    } = params || {};

    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Calculate skip for pagination
    const skip = (page - 1) * limit;

    // Build where condition for search
    let where: any = query
      ? {
          OR: [
            { LessonName: { contains: query } },
            { teacher: { FirstName: { contains: query } } },
            { teacher: { LastName: { contains: query } } },
            { field: { Name: { contains: query } } },
          ],
        }
      : {};

    // Add date range filter if provided
    if (from || to) {
      where.Created_at = {};
      if (from) where.Created_at.gte = from;
      if (to) where.Created_at.lte = to;
    }

    if (unit) {
      where.Unit = Number(unit);
    }

    if (grade) {
      where.Grade = grade || LessonGrade.GENERAL;
    }

    if (field) {
      where.OR = [
        ...where.OR,
        { field: { Name: { contains: field && query } } },
        { fieldId: null },
      ];
    }

    // Get total count for pagination
    const totalCount = await prisma.lesson.count({ where });

    // Get paginated and filtered data
    const lessons = await prisma.lesson.findMany({
      where,
      include: {
        field: true,
        teacher: true,
      },
      orderBy: {
        Created_at: order === "asc" ? "asc" : "desc",
      },
      skip,
      take: limit,
    });

    // Calculate pagination metadata
    const totalPages = Math.ceil(totalCount / limit);

    return {
      lessons,
      pagination: {
        total: totalCount,
        totalPages,
        currentPage: page,
        limit,
      },
    };
  } catch (error) {
    console.error("Failed to fetch lessons:", error);
    return { error: "Failed to fetch lessons" };
  }
}

// Get a single lesson by ID
export async function getLessonById(id: bigint) {
  try {
    const lesson = await prisma.lesson.findUnique({
      where: { id },
      include: {
        field: true,
        teacher: true,
        selectUnits: true,
        requiredForLesson: true,
        requiresLesson: true,
      },
    });

    if (!lesson) {
      return { error: "Lesson not found" };
    }

    return { lesson };
  } catch (error) {
    console.error("Failed to fetch lesson:", error);
    return { error: "Failed to fetch lesson" };
  }
}

// Create a new lesson
export async function createLesson(data: LessonDataType) {
  console.log("data ", data);
  try {
    // Check if teacher exists
    if (data.TeacherId) {
      const teacher = await prisma.teacher.findUnique({
        where: { id: data.TeacherId },
      });

      if (!teacher) {
        return { error: "Teacher not found" };
      }
    }

    // Check if field exists if provided
    if (data.fieldId) {
      const field = await prisma.field.findUnique({
        where: { id: data.fieldId },
      });

      if (!field) {
        return { error: "Field not found" };
      }
    }

    // Check if required lesson exists if provided
    if (data.RequireLesson) {
      const requiredLesson = await prisma.lesson.findUnique({
        where: { id: data.RequireLesson },
      });

      if (!requiredLesson) {
        return { error: "Required lesson not found" };
      }
    }

    const editedData = {
      ...data,
      id: undefined,
    };

    const lesson = await prisma.lesson.create({
      data: {
        ...editedData,
        RequireUnit: editedData.RequireUnit
          ? Number(editedData.RequireUnit)
          : null,
      },
    });

    revalidatePath("/dashboard/lessons");
    return { lesson };
  } catch (error) {
    console.error("Failed to create lesson:", error);
    return { error: "Failed to create lesson" };
  }
}

// Update a lesson
export async function updateLesson(id: bigint, data: Partial<LessonDataType>) {
  console.log("data ", data);
  try {
    // Check if lesson exists
    const existingLesson = await prisma.lesson.findUnique({
      where: { id },
    });
    console.log("existingLesson ", existingLesson); // Add this line to log the value of existingLesson t

    if (!existingLesson) {
      return { error: "Lesson not found" };
    }

    // Object.keys(data).forEach((key) => {
    //   if (
    //     data[key as keyof typeof data] == "" ||
    //     data[key as keyof typeof data] == null ||
    //     data[key as keyof typeof data] == 0
    //   ) {
    //     data[key as keyof typeof data] = undefined;
    //   }
    // });

    // Check if teacher exists if provided
    if (data.TeacherId) {
      const teacher = await prisma.teacher.findUnique({
        where: { id: data.TeacherId },
      });

      if (!teacher) {
        return { error: "Teacher not found" };
      }
    }

    // Check if field exists if provided
    if (data.fieldId) {
      const field = await prisma.field.findUnique({
        where: { id: data.fieldId },
      });

      if (!field) {
        return { error: "Field not found" };
      }
    }

    // Check if required lesson exists if provided
    if (data.RequireLesson) {
      const requiredLesson = await prisma.lesson.findUnique({
        where: { id: data.RequireLesson },
      });

      if (!requiredLesson) {
        return { error: "Required lesson not found" };
      }
    }

    const editedData = {
      ...data,
      id: undefined,
    };

    const lesson = await prisma.lesson.update({
      where: { id },
      data: {
        ...editedData,
        RequireUnit: editedData.RequireUnit
          ? Number(editedData.RequireUnit)
          : null,
      },
    });

    revalidatePath("/dashboard/lessons");
    revalidatePath(`/dashboard/lessons/${id}`);
    return { lesson };
  } catch (error) {
    console.error("Failed to update lesson:", error);
    return { error: "Failed to update lesson" };
  }
}

// Delete a lesson
export async function deleteLesson(id: bigint) {
  try {
    // Check if lesson has any select units before deleting
    const lessonWithSelectUnits = await prisma.lesson.findUnique({
      where: { id },
      include: {
        selectUnits: true,
        requiredForLesson: true,
      },
    });

    if (lessonWithSelectUnits?.selectUnits.length) {
      return { error: "Cannot delete lesson with existing course selections" };
    }

    if (lessonWithSelectUnits?.requiredForLesson.length) {
      return {
        error: "Cannot delete lesson that is required for other lessons",
      };
    }

    await prisma.lesson.delete({
      where: { id },
    });

    revalidatePath("/dashboard/lessons");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete lesson:", error);
    return { error: "Failed to delete lesson" };
  }
}

// Get multiple lessons by their IDs
export async function getLessonsByIds(ids: (bigint | string | number)[]) {
  try {
    if (!ids.length) {
      return { lessons: [], error: null };
    }

    const newIds = ids.map((id) => BigInt(id));

    const lessons = await prisma.lesson.findMany({
      where: {
        id: { in: newIds },
      },
      include: {
        field: true,
        teacher: true,
        selectUnits: true,
        requiredForLesson: true,
        requiresLesson: true,
      },
    });

    return { lessons };
  } catch (error) {
    console.error("Failed to fetch lessons by IDs:", error);
    return { error: "Failed to fetch lessons by IDs", lessons: [] };
  }
}
