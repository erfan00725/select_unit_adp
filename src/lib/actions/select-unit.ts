"use server";

import { Period } from "@/generated/prisma";
import { prisma } from "../prisma";
import { revalidatePath } from "next/cache";
import { SelectUnitDataType } from "@/types/Tables";

// Get all select units
export async function getSelectUnits() {
  try {
    const selectUnits = await prisma.selectUnit.findMany({
      include: {
        student: true,
        lesson: true,
      },
    });
    return { selectUnits };
  } catch (error) {
    console.error("Failed to fetch select units:", error);
    return { error: "Failed to fetch select units" };
  }
}

// Get select units by student ID
export async function getSelectUnitsByStudent(studentId: bigint) {
  try {
    const selectUnits = await prisma.selectUnit.findMany({
      where: { StudentId: studentId },
      include: {
        lesson: {
          include: {
            teacher: true,
          },
        },
      },
    });

    return { selectUnits };
  } catch (error) {
    console.error("Failed to fetch student select units:", error);
    return { error: "Failed to fetch student select units" };
  }
}

// Get select units by lesson ID
export async function getSelectUnitsByLesson(lessonId: bigint) {
  try {
    const selectUnits = await prisma.selectUnit.findMany({
      where: { LessonId: lessonId },
      include: {
        student: true,
      },
    });

    return { selectUnits };
  } catch (error) {
    console.error("Failed to fetch lesson select units:", error);
    return { error: "Failed to fetch lesson select units" };
  }
}

// Get select units by year and period
export async function getSelectUnitsByYearPeriod(year: number, period: Period) {
  try {
    const selectUnits = await prisma.selectUnit.findMany({
      where: {
        Year: year,
        Period: period,
      },
      include: {
        student: true,
        lesson: {
          include: {
            teacher: true,
          },
        },
      },
    });

    return { selectUnits };
  } catch (error) {
    console.error("Failed to fetch select units by year and period:", error);
    return { error: "Failed to fetch select units by year and period" };
  }
}

// Create a new select unit
export async function createSelectUnit(data: SelectUnitDataType) {
  try {
    // Check if the student exists
    const student = await prisma.student.findUnique({
      where: { id: data.StudentId },
    });

    if (!student) {
      return { error: "Student not found" };
    }

    // Check if the lesson exists
    const lesson = await prisma.lesson.findUnique({
      where: { id: data.LessonId },
    });

    if (!lesson) {
      return { error: "Lesson not found" };
    }

    // Check if the select unit already exists
    const existingSelectUnit = await prisma.selectUnit.findUnique({
      where: {
        StudentId_LessonId_Year_Period: {
          StudentId: data.StudentId,
          LessonId: data.LessonId,
          Year: data.Year,
          Period: data.Period,
        },
      },
    });

    if (existingSelectUnit) {
      return { error: "This course selection already exists" };
    }

    const selectUnit = await prisma.selectUnit.create({
      data,
      include: {
        student: true,
        lesson: true,
      },
    });

    revalidatePath("/dashboard/select-unit");
    revalidatePath(`/dashboard/students/${data.StudentId}`);
    return { selectUnit };
  } catch (error) {
    console.error("Failed to create select unit:", error);
    return { error: "Failed to create select unit" };
  }
}

// Update a select unit
export async function updateSelectUnit(
  studentId: bigint,
  lessonId: bigint,
  year: number,
  period: Period,
  data: { ExtraFee: bigint }
) {
  try {
    const selectUnit = await prisma.selectUnit.update({
      where: {
        StudentId_LessonId_Year_Period: {
          StudentId: studentId,
          LessonId: lessonId,
          Year: year,
          Period: period,
        },
      },
      data,
      include: {
        student: true,
        lesson: true,
      },
    });

    revalidatePath("/dashboard/select-unit");
    revalidatePath(`/dashboard/students/${studentId}`);
    return { selectUnit };
  } catch (error) {
    console.error("Failed to update select unit:", error);
    return { error: "Failed to update select unit" };
  }
}

// Delete a select unit
export async function deleteSelectUnit(
  studentId: bigint,
  lessonId: bigint,
  year: number,
  period: Period
) {
  try {
    await prisma.selectUnit.delete({
      where: {
        StudentId_LessonId_Year_Period: {
          StudentId: studentId,
          LessonId: lessonId,
          Year: year,
          Period: period,
        },
      },
    });

    revalidatePath("/dashboard/select-unit");
    revalidatePath(`/dashboard/students/${studentId}`);
    return { success: true };
  } catch (error) {
    console.error("Failed to delete select unit:", error);
    return { error: "Failed to delete select unit" };
  }
}

// Bulk create select units for a student
export async function bulkCreateSelectUnits(data: SelectUnitDataType[]) {
  try {
    const createdUnits = [];
    const errors = [];

    for (const unit of data) {
      try {
        const result = await createSelectUnit(unit);
        if (result.error) {
          errors.push({ unit, error: result.error });
        } else {
          createdUnits.push(result.selectUnit);
        }
      } catch (error) {
        errors.push({ unit, error: "Failed to create select unit" });
      }
    }

    if (data.length > 0) {
      revalidatePath("/dashboard/select-unit");
      revalidatePath(`/dashboard/students/${data[0].StudentId}`);
    }

    return { createdUnits, errors };
  } catch (error) {
    console.error("Failed to bulk create select units:", error);
    return { error: "Failed to bulk create select units" };
  }
}
