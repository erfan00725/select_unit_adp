"use server";

import { Period } from "@/generated/prisma";
import { prisma } from "../prisma";
import { revalidatePath } from "next/cache";
import { BaseListFilterParams, SelectUnitDataType } from "@/types/Tables";
import { error } from "console";
import { urls } from "@/constants/urls";

// Get all select units
export async function getSelectUnits(params?: BaseListFilterParams) {
  try {
    const {
      query,
      order = "asc",
      limit = 10,
      page = 1,
      from,
      to,
    } = params || {};

    // Calculate skip for pagination
    const skip = (page - 1) * limit;

    // Build where condition for search
    let where: any = query
      ? {
          OR: [
            { student: { FirstName: { contains: query } } },
            { student: { LastName: { contains: query } } },
            { student: { NationalCode: { contains: query } } },
            { lesson: { LessonName: { contains: query } } },
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
    const totalCount = await prisma.selectUnit.count({ where });

    // Get paginated and filtered data
    const selectUnits = await prisma.selectUnit.findMany({
      where,
      include: {
        student: true,
        lesson: true,
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
      selectUnits,
      pagination: {
        total: totalCount,
        totalPages,
        currentPage: page,
        limit,
      },
    };
  } catch (error) {
    console.error("Failed to fetch select units:", error);
    return { error: "Failed to fetch select units" };
  }
}

// Get select units by student ID
export async function getSelectUnitsByStudent(
  studentId: bigint,
  params?: BaseListFilterParams
) {
  try {
    const { query, order = "asc", limit = 10, page = 1 } = params || {};

    // Calculate skip for pagination
    const skip = (page - 1) * limit;

    // Build where condition for search
    let where: any = { StudentId: studentId };

    if (query) {
      where = {
        ...where,
        OR: [
          { lesson: { LessonName: { contains: query } } },
          { lesson: { teacher: { FirstName: { contains: query } } } },
          { lesson: { teacher: { LastName: { contains: query } } } },
        ],
      };
    }

    // Get total count for pagination
    const totalCount = await prisma.selectUnit.count({ where });

    // Get paginated and filtered data
    const selectUnits = await prisma.selectUnit.findMany({
      where,
      include: {
        lesson: {
          include: {
            teacher: true,
          },
        },
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
      selectUnits,
      pagination: {
        total: totalCount,
        totalPages,
        currentPage: page,
        limit,
      },
    };
  } catch (error) {
    console.error("Failed to fetch student select units:", error);
    return { error: "Failed to fetch student select units" };
  }
}

// Get select units by lesson ID
export async function getSelectUnitsByLesson(
  lessonId: bigint,
  params?: BaseListFilterParams
) {
  try {
    const { query, order = "asc", limit = 10, page = 1 } = params || {};

    // Calculate skip for pagination
    const skip = (page - 1) * limit;

    // Build where condition for search
    let where: any = { LessonId: lessonId };

    if (query) {
      where = {
        ...where,
        OR: [
          { student: { FirstName: { contains: query } } },
          { student: { LastName: { contains: query } } },
          { student: { NationalCode: { contains: query } } },
        ],
      };
    }

    // Get total count for pagination
    const totalCount = await prisma.selectUnit.count({ where });

    // Get paginated and filtered data
    const selectUnits = await prisma.selectUnit.findMany({
      where,
      include: {
        student: true,
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
      selectUnits,
      pagination: {
        total: totalCount,
        totalPages,
        currentPage: page,
        limit,
      },
    };
  } catch (error) {
    console.error("Failed to fetch lesson select units:", error);
    return { error: "Failed to fetch lesson select units" };
  }
}

// Get select units by year and period
export async function getSelectUnitsByYearPeriod(
  year: number,
  period: Period,
  params?: BaseListFilterParams
) {
  try {
    const { query, order = "asc", limit = 10, page = 1 } = params || {};

    // Calculate skip for pagination
    const skip = (page - 1) * limit;

    // Build where condition for search
    let where: any = {
      Year: year,
      Period: period,
    };

    if (query) {
      where = {
        ...where,
        OR: [
          { student: { FirstName: { contains: query } } },
          { student: { LastName: { contains: query } } },
          { student: { NationalCode: { contains: query } } },
          { lesson: { LessonName: { contains: query } } },
          { lesson: { teacher: { FirstName: { contains: query } } } },
          { lesson: { teacher: { LastName: { contains: query } } } },
        ],
      };
    }

    // Get total count for pagination
    const totalCount = await prisma.selectUnit.count({ where });

    // Get paginated and filtered data
    const selectUnits = await prisma.selectUnit.findMany({
      where,
      include: {
        student: true,
        lesson: {
          include: {
            teacher: true,
          },
        },
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
      selectUnits,
      pagination: {
        total: totalCount,
        totalPages,
        currentPage: page,
        limit,
      },
    };
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
export async function bulkCreateSelectUnits(
  baseData: SelectUnitDataType,
  lessonIds: bigint[]
) {
  try {
    const createdUnits = [];

    for (const lessonId of lessonIds) {
      try {
        const unitData = {
          ...baseData,
          LessonId: lessonId,
        };

        const result = await createSelectUnit(unitData);
        if (result.error) {
          return { error: result.error };
        } else {
          createdUnits.push(result.selectUnit);
        }
      } catch (error) {
        return { error: error };
      }
    }

    // revalidatePath(`${urls.selectUnit}/${baseData.StudentId}`);
    // revalidatePath(`${urls.students}/${baseData.StudentId}`);

    return { createdUnits };
  } catch (error) {
    console.error("Failed to bulk create select units:", error);
    return { error: "Failed to bulk create select units" };
  }
}
