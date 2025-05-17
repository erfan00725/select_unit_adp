"use server";

import { prisma } from "../prisma";
import { revalidatePath } from "next/cache";
import { BaseListFilterParams, StudentDataType } from "@/types/Tables";
import { DeleteFunctionReturnType } from "@/types/General";

// Get all students
export async function getStudents(params?: BaseListFilterParams) {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 2000));

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
    const where: any = query
      ? {
          OR: [
            { FirstName: { contains: query } },
            { LastName: { contains: query } },
            { NationalCode: { contains: query } },
            { PhoneNumber: { contains: query } },
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

    // Get total count for pagination
    const totalCount = await prisma.student.count({ where });

    // Get paginated and filtered data
    const students = await prisma.student.findMany({
      where,
      include: {
        field: true,
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
      students,
      pagination: {
        total: totalCount,
        totalPages,
        currentPage: page,
        limit,
      },
    };
  } catch (error) {
    console.error("Failed to fetch students:", error);
    return { error: "خطا در دریافت لیست دانش‌آموزان" };
  }
}

// Get a single student by ID
/**
 * Retrieves a single student by their unique ID.
 * @param id - The ID of the student to retrieve (string, will be converted to BigInt).
 * @returns A promise that resolves to an object containing the student or an error.
 */
export async function getStudentById(id: string) {
  try {
    const studentId = BigInt(id);
    const student = await prisma.student.findUnique({
      where: { id: studentId },
      include: {
        field: true,
        selectUnits: {
          include: {
            Lesson: true,
          },
        },
      },
    });

    if (!student) {
      return { error: "دانش‌آموز یافت نشد", code: 404 };
    }

    return { student };
  } catch (error) {
    console.error("Failed to fetch student:", error);
    return { error: "خطا در دریافت اطلاعات دانش‌آموز" };
  }
}

// Create a new student
export async function createStudent(data: StudentDataType) {
  try {
    const existingStudent = await prisma.student.findUnique({
      where: { NationalCode: data.NationalCode },
    });

    if (existingStudent) {
      return { error: "دانش‌آموزی با این کد ملی قبلاً ثبت شده است" };
    }

    const editedData = {
      ...data,
      id: undefined,
    };

    const student = await prisma.student.create({
      data: editedData,
    });

    revalidatePath("/dashboard/students");
    return { student };
  } catch (error) {
    console.error("Failed to create student:", error);
    return { error: "خطا در ایجاد دانش‌آموز جدید" };
  }
}

// Update a student
export async function updateStudent(
  id: string,
  data: Partial<StudentDataType>
) {
  try {
    const studentId = BigInt(id);
    // Check if national code is being updated and if it's already in use
    if (data.NationalCode) {
      const existingStudent = await prisma.student.findFirst({
        where: {
          NationalCode: data.NationalCode,
          id: { not: studentId },
        },
      });

      if (existingStudent) {
        return { error: "دانش‌آموزی با این کد ملی قبلاً ثبت شده است" };
      }
    }

    const editedData = {
      ...data,
      id: undefined,
    };

    const student = await prisma.student.update({
      where: { id: studentId },
      data: editedData,
    });

    revalidatePath("/dashboard/students");
    revalidatePath(`/dashboard/students/${id}`);
    return { student };
  } catch (error) {
    console.error("Failed to update student:", error);
    return { error: "خطا در به‌روزرسانی اطلاعات دانش‌آموز" };
  }
}

// Delete a student
/**
 * Deletes a student by its string ID. Converts the string ID to BigInt internally.
 * @param id - The student ID as a string
 * @returns A promise that resolves to an object indicating success or an error.
 */
export async function deleteStudent(id: string): DeleteFunctionReturnType {
  try {
    const studentId = BigInt(id);
    // Check if student has any select units before deleting
    const studentWithSelectUnits = await prisma.student.findUnique({
      where: { id: studentId },
      include: {
        selectUnits: true,
      },
    });

    if (studentWithSelectUnits?.selectUnits.length) {
      return { error: "امکان حذف دانش‌آموز دارای انتخاب واحد وجود ندارد" };
    }

    await prisma.student.delete({
      where: { id: studentId },
    });

    revalidatePath("/dashboard/students");
    revalidatePath(`/dashboard/students/${id}`);
    return { success: true };
  } catch (error) {
    console.error("Failed to delete student:", error);
    return { error: "خطا در حذف دانش‌آموز" };
  }
}
