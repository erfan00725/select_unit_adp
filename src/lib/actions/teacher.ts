"use server";

import { TeacherDataType } from "@/types/Tables";
import { prisma } from "../prisma";
import { revalidatePath } from "next/cache";

// Get all teachers
export async function getTeachers() {
  try {
    const teachers = await prisma.teacher.findMany({
      include: {
        field: true,
        lessons: true,
      },
    });
    return { teachers };
  } catch (error) {
    console.error("Failed to fetch teachers:", error);
    return { error: "Failed to fetch teachers" };
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
      return { error: "Teacher not found" };
    }

    return { teacher };
  } catch (error) {
    console.error("Failed to fetch teacher:", error);
    return { error: "Failed to fetch teacher" };
  }
}

// Create a new teacher
export async function createTeacher(data: TeacherDataType) {
  try {
    const existingTeacher = await prisma.teacher.findUnique({
      where: { NationalCode: data.NationalCode },
    });

    if (existingTeacher) {
      return { error: "A teacher with this national code already exists" };
    }

    const teacher = await prisma.teacher.create({
      data,
    });

    revalidatePath("/dashboard/teachers");
    return { teacher };
  } catch (error) {
    console.error("Failed to create teacher:", error);
    return { error: "Failed to create teacher" };
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
        return { error: "A teacher with this national code already exists" };
      }
    }

    const teacher = await prisma.teacher.update({
      where: { id },
      data,
    });

    revalidatePath("/dashboard/teachers");
    revalidatePath(`/dashboard/teachers/${id}`);
    return { teacher };
  } catch (error) {
    console.error("Failed to update teacher:", error);
    return { error: "Failed to update teacher" };
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
      return { error: "Cannot delete teacher with assigned lessons" };
    }

    await prisma.teacher.delete({
      where: { id },
    });

    revalidatePath("/dashboard/teachers");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete teacher:", error);
    return { error: "Failed to delete teacher" };
  }
}
