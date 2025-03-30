"use server";

import { prisma } from "../prisma";
import { revalidatePath } from "next/cache";
import { StudentDataType } from "@/types/Tables";

// Get all students
export async function getStudents() {
  try {
    const students = await prisma.student.findMany({
      include: {
        field: true,
      },
    });
    return { students };
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
            lesson: true,
          },
        },
      },
    });

    if (!student) {
      return { error: "Student not found" };
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

    const student = await prisma.student.create({
      data,
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

    const student = await prisma.student.update({
      where: { id },
      data,
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
