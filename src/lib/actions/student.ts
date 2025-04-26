"use server";

import { prisma } from "../prisma";
import { revalidatePath } from "next/cache";
import { BaseListFilterParams, StudentDataType } from "@/types/Tables";

// Get all students
export async function getStudents(params?: BaseListFilterParams) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));

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
    return { error: "Failed to fetch students" };
  }
}

// Get a single student by ID
export async function getStudentById(id: bigint) {
  try {
    const student = await prisma.student.findUnique({
      where: { id },
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
      return { error: "Student not found", code: 404 };
    }

    return { student };
  } catch (error) {
    console.error("Failed to fetch student:", error);
    return { error: "Failed to fetch student" };
  }
}

// Create a new student
export async function createStudent(data: StudentDataType) {
  try {
    const existingStudent = await prisma.student.findUnique({
      where: { NationalCode: data.NationalCode },
    });

    if (existingStudent) {
      return { error: "A student with this national code already exists" };
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
    return { error: "Failed to create student" };
  }
}

// Update a student
export async function updateStudent(
  id: bigint,
  data: Partial<StudentDataType>
) {
  try {
    // Check if national code is being updated and if it's already in use
    if (data.NationalCode) {
      const existingStudent = await prisma.student.findFirst({
        where: {
          NationalCode: data.NationalCode,
          id: { not: id },
        },
      });

      if (existingStudent) {
        return { error: "A student with this national code already exists" };
      }
    }
    const editedData = {
      ...data,
      id: undefined,
    };

    const student = await prisma.student.update({
      where: { id },
      data: editedData,
    });

    revalidatePath("/dashboard/students");
    revalidatePath(`/dashboard/students/${id}`);
    return { student };
  } catch (error) {
    console.error("Failed to update student:", error);
    return { error: "Failed to update student" };
  }
}

// Delete a student
export async function deleteStudent(id: bigint) {
  try {
    // Check if student has any select units before deleting
    const studentWithSelectUnits = await prisma.student.findUnique({
      where: { id },
      include: {
        selectUnits: true,
      },
    });

    if (studentWithSelectUnits?.selectUnits.length) {
      return { error: "Cannot delete student with existing course selections" };
    }

    await prisma.student.delete({
      where: { id },
    });

    revalidatePath("/dashboard/students");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete student:", error);
    return { error: "Failed to delete student" };
  }
}
