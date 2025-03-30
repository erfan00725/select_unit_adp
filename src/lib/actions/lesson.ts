"use server";

import { prisma } from "../prisma";
import { revalidatePath } from "next/cache";
import { LessonDataType } from "@/types/Tables";

// Get all lessons
export async function getLessons() {
  try {
    const lessons = await prisma.lesson.findMany({
      include: {
        field: true,
        teacher: true,
      },
    });
    return { lessons };
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
        requiredForUnit: true,
        requiresUnit: true,
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
  try {
    // Check if teacher exists
    const teacher = await prisma.teacher.findUnique({
      where: { id: data.TeacherId },
    });

    if (!teacher) {
      return { error: "Teacher not found" };
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
    if (data.RequireUnit) {
      const requiredLesson = await prisma.lesson.findUnique({
        where: { id: data.RequireUnit },
      });

      if (!requiredLesson) {
        return { error: "Required lesson not found" };
      }
    }

    const lesson = await prisma.lesson.create({
      data,
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
  try {
    // Check if lesson exists
    const existingLesson = await prisma.lesson.findUnique({
      where: { id },
    });

    if (!existingLesson) {
      return { error: "Lesson not found" };
    }

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
    if (data.RequireUnit) {
      const requiredLesson = await prisma.lesson.findUnique({
        where: { id: data.RequireUnit },
      });

      if (!requiredLesson) {
        return { error: "Required lesson not found" };
      }
    }

    const lesson = await prisma.lesson.update({
      where: { id },
      data,
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
        requiredForUnit: true,
      },
    });

    if (lessonWithSelectUnits?.selectUnits.length) {
      return { error: "Cannot delete lesson with existing course selections" };
    }

    if (lessonWithSelectUnits?.requiredForUnit.length) {
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
