"use server";

import { prisma } from "../prisma";
import { revalidatePath } from "next/cache";
import { BaseListFilterParams, LessonDataType } from "@/types/Tables";
import {
  Field,
  Lesson,
  LessonGrade,
  SelectUnit,
  Teacher,
} from "@prisma/client";
import { DeleteFunctionReturnType } from "@/types/General";
import { getSettings } from "./general";

// Define a type that represents a Lesson with potentially included relations
type LessonWithOptionalRelations = Lesson & {
  teacher?: Teacher | null;
  field?: Field | null;
  selectUnits?: SelectUnit[] | null;
  requiredForLesson?: Lesson[] | null;
  requiresLesson?: Lesson | null;
};

const customReturn = async (
  data: LessonWithOptionalRelations,
  P_defaultPrice?: BigInt,
  useDefault: boolean = true
) => {
  let defaultPrice;
  if (
    (data.PricePerUnit == undefined || data.PricePerUnit == null) &&
    useDefault
  ) {
    if (P_defaultPrice == undefined || P_defaultPrice == null) {
      const { settings } = await getSettings();
      defaultPrice = BigInt(settings.pricePerUnit);
    } else {
      defaultPrice = P_defaultPrice;
    }

    return {
      ...data,
      PricePerUnit: defaultPrice,
    };
  } else {
    return data;
  }
};
const customReturnLessons = async (data: LessonWithOptionalRelations[]) => {
  const { settings } = await getSettings();
  const { pricePerUnit: defaultPrice } = settings;

  return await Promise.all(
    data.map(
      async (item) => await customReturn(item, BigInt(defaultPrice), false)
    )
  );
};

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

    // await new Promise((resolve) => setTimeout(resolve, 2000));

    // Calculate skip for pagination
    const skip = (page - 1) * limit;

    // Build where condition for search
    const where: any = query
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

    if (!!unit) {
      where.OR = [
        ...(where.OR ? where.OR : []),
        {
          TheoriUnit: {
            equals: +unit,
          },
        },
        {
          PracticalUnit: {
            equals: +unit,
          },
        },
      ];
    }

    if (grade) {
      where.Grade = {
        equals: grade,
      };
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

    const processedLessons = await customReturnLessons(lessons);

    return {
      lessons: processedLessons,
      pagination: {
        total: totalCount,
        totalPages,
        currentPage: page,
        limit,
      },
    };
  } catch (error) {
    console.error("Failed to fetch lessons:", error);
    return { error: "خطا در دریافت دروس" };
  }
}

// Get a single lesson by ID
/**
 * Retrieves a single lesson by its unique ID.
 * @param id - The ID of the lesson to retrieve (string, will be converted to BigInt).
 * @returns A promise that resolves to an object containing the lesson or an error.
 */
export async function getLessonById(
  id: string,
  UserDefaultPrice: boolean = true
) {
  try {
    const lessonId = BigInt(id);
    const lesson = await prisma.lesson.findUnique({
      where: { id: lessonId },
      include: {
        field: true,
        teacher: true,
        selectUnits: true,
        requiredForLesson: true,
        requiresLesson: true,
      },
    });

    if (!lesson) {
      return { error: "درس مورد نظر یافت نشد" };
    }

    return { lesson: await customReturn(lesson, undefined, UserDefaultPrice) };
  } catch (error) {
    console.error("Failed to fetch lesson:", error);
    return { error: "خطا در دریافت درس" };
  }
}

// Create a new lesson
export async function createLesson(data: LessonDataType) {
  try {
    // Check if teacher exists
    if (data.TeacherId) {
      const teacher = await prisma.teacher.findUnique({
        where: { id: data.TeacherId },
      });

      if (!teacher) {
        return { error: "دبیر مورد نظر یافت نشد" };
      }
    }

    // Check if field exists if provided
    if (data.fieldId) {
      const field = await prisma.field.findUnique({
        where: { id: data.fieldId },
      });

      if (!field) {
        return { error: "رشته مورد نظر یافت نشد" };
      }
    }

    // Check if required lesson exists if provided
    if (data.RequireLesson) {
      const requiredLesson = await prisma.lesson.findUnique({
        where: { id: data.RequireLesson },
      });

      if (!requiredLesson) {
        return { error: "درس پیش‌نیاز یافت نشد" };
      }
    }

    const editedData = {
      ...data,
      id: undefined,
      TeacherId: undefined,
      fieldId: undefined,
      RequireLesson: undefined,
      TheoriHours: data.TheoriHours ? Number(data.TheoriHours) : undefined,
      PracticalHours: data.PracticalHours
        ? Number(data.PracticalHours)
        : undefined,
      RequireUnit: data.RequireUnit ? Number(data.RequireUnit) : undefined,
      ValidFrom: data.ValidFrom ? data.ValidFrom : undefined,
      Grade: data.Grade || undefined,
    };

    const lesson = await prisma.lesson.create({
      data: {
        ...editedData,
        teacher: data.TeacherId
          ? { connect: { id: data.TeacherId } }
          : undefined,
        field: data.fieldId ? { connect: { id: data.fieldId } } : undefined,
        requiresLesson: data.RequireLesson
          ? { connect: { id: data.RequireLesson } }
          : undefined,
      },
    });

    revalidatePath("/dashboard/lessons");
    return { lesson };
  } catch (error) {
    console.error("Failed to create lesson:", error);
    return { error: "خطا در ایجاد درس" };
  }
}

// Update a lesson
export async function updateLesson(id: string, data: Partial<LessonDataType>) {
  try {
    const lessonId = BigInt(id);
    // Check if lesson name is being updated and if it's already in use
    const existingLesson = await prisma.lesson.findFirst({
      where: {
        id: lessonId,
      },
    });
    if (!existingLesson) {
      return { error: "درس مورد نظر یافت نشد" };
    }

    const editedData = {
      ...data,
      id: undefined,
      TeacherId: undefined,
      fieldId: undefined,
      RequireLesson: undefined,
      Grade: data.Grade || LessonGrade.GENERAL,
      TheoriHours: data.TheoriHours ? Number(data.TheoriHours) : 0,
      PracticalHours: data.PracticalHours ? Number(data.PracticalHours) : 0,
      RequireUnit: data.RequireUnit ? Number(data.RequireUnit) : 0,
      ValidFrom: data.ValidFrom ? data.ValidFrom : undefined,
    };

    const lesson = await prisma.lesson.update({
      where: { id: lessonId },
      include: {
        field: true,
        teacher: true,
        selectUnits: true,
        requiredForLesson: true,
        requiresLesson: true,
      },
      data: {
        ...editedData,
        teacher: data.TeacherId
          ? { connect: { id: data.TeacherId } }
          : { disconnect: true },
        field: data.fieldId
          ? { connect: { id: data.fieldId } }
          : { disconnect: true },
        requiresLesson: data.RequireLesson
          ? { connect: { id: data.RequireLesson } }
          : { disconnect: true },
      },
    });
    revalidatePath("/dashboard/lessons");
    revalidatePath(`/dashboard/lessons/${id}`);
    return { lesson };
  } catch (error) {
    console.error("Failed to update lesson:", error);
    return { error: "خطا در به‌روزرسانی درس" };
  }
}

// Delete a lesson
/**
 * Deletes a lesson by its string ID. Converts the string ID to BigInt internally.
 * @param id - The lesson ID as a string
 * @returns A promise that resolves to an object indicating success or an error.
 */
export async function deleteLesson(id: string): DeleteFunctionReturnType {
  try {
    const lessonId = BigInt(id);
    // Check if lesson has any select units before deleting
    const lessonWithSelectUnits = await prisma.lesson.findUnique({
      where: { id: lessonId },
      include: {
        SelectedLesson: true,
        requiredForLesson: true,
      },
    });

    if (lessonWithSelectUnits?.SelectedLesson.length) {
      return { error: "امکان حذف درس با انتخاب واحدهای موجود وجود ندارد" };
    }

    await prisma.lesson.delete({
      where: { id: lessonId },
    });

    revalidatePath("/dashboard/lessons");
    revalidatePath(`/dashboard/lessons/${id}`);
    return { success: true };
  } catch (error) {
    console.error("Failed to delete lesson:", error);
    return { error: "خطا در حذف درس" };
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

    return { lessons: await customReturnLessons(lessons) };
  } catch (error) {
    console.error("Failed to fetch lessons by IDs:", error);
    return { error: "خطا در دریافت دروس با شناسه‌های مورد نظر", lessons: [] };
  }
}
