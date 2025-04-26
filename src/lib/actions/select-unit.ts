"use server";

import { Period, Prisma } from "@/generated/prisma";
import { prisma } from "../prisma";
import { revalidatePath } from "next/cache";
import { BaseListFilterParams, SelectUnitDataType } from "@/types/Tables";

type ReturnType = Prisma.SelectUnitGetPayload<{
  include: {
    student: true;
    selectedLessons: {
      include: {
        lesson: true;
      };
    };
  };
}> & {
  totalUnits: number;
  totalFee: number;
};

/**
 * Processes a select unit and calculates total units and fees
 * @param selectUnit - The select unit to process, can be null
 * @returns The select unit with calculated totals or null if input is null
 */
function customReturn(
  selectUnit: Prisma.SelectUnitGetPayload<{
    include: {
      student?: true;
      selectedLessons: {
        include: {
          lesson: true;
        };
      };
    };
  }> | null
) {
  // Handle null input
  if (!selectUnit) {
    return null;
  }

  // Calculate lesson-based fees
  const lessonFees = selectUnit.selectedLessons
    ? selectUnit.selectedLessons.reduce(
        // @ts-ignore
        (acc, lesson) =>
          acc +
          Number(lesson.lesson?.PricePerUnit || 0) *
            ((lesson.lesson?.TheoriUnit || 0) +
              (lesson.lesson?.PracticalUnit || 0)),
        0
      )
    : 0;

  // Calculate additional fees
  const additionalFees =
    Number(selectUnit.ExtraFee || 0) +
    Number(selectUnit.FixedFee || 0) +
    Number(selectUnit.CertificateFee || 0) +
    Number(selectUnit.ExtraClassFee || 0) +
    Number(selectUnit.BooksFee || 0);

  return {
    ...selectUnit,
    totalUnits: selectUnit.selectedLessons
      ? selectUnit.selectedLessons.reduce(
          // @ts-ignore
          (acc, lesson) =>
            acc +
            ((lesson.lesson?.TheoriUnit || 0) +
              (lesson.lesson?.PracticalUnit || 0)),
          0
        )
      : 0,
    totalFee: lessonFees + additionalFees,
  };
}

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
        selectedLessons: {
          include: {
            lesson: true,
          },
        },
      },
      orderBy: {
        Created_at: order === "asc" ? "asc" : "desc",
      },
      skip,
      take: limit,
    });

    // Apply customReturn to each select unit to calculate totalUnits and totalFee
    const selectUnitsWithTotal = selectUnits.map((unit) => customReturn(unit));

    // Calculate pagination metadata
    const totalPages = Math.ceil(totalCount / limit);

    return {
      selectUnits: selectUnitsWithTotal,
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
        student: true,
        selectedLessons: {
          include: {
            lesson: true,
          },
        },
      },
      orderBy: {
        Created_at: order === "asc" ? "asc" : "desc",
      },
      skip,
      take: limit,
    });

    // Apply customReturn to each select unit to calculate totalUnits and totalFee
    const selectUnitsWithTotal = selectUnits.map((unit) => customReturn(unit));

    // Calculate pagination metadata
    const totalPages = Math.ceil(totalCount / limit);

    return {
      selectUnits: selectUnitsWithTotal,
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
        selectedLessons: {
          include: {
            lesson: true,
          },
        },
      },
      orderBy: {
        Created_at: order === "asc" ? "asc" : "desc",
      },
      skip,
      take: limit,
    });

    // Apply customReturn to each select unit to calculate totalUnits and totalFee
    const selectUnitsWithTotal = selectUnits.map((unit) => customReturn(unit));

    // Calculate pagination metadata
    const totalPages = Math.ceil(totalCount / limit);

    return {
      selectUnits: selectUnitsWithTotal,
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

// Get a select unit by ID
export async function getSelectUnitById(selectUnitId: bigint) {
  try {
    const selectUnit = await prisma.selectUnit.findUnique({
      where: {
        id: selectUnitId,
      },
      include: {
        student: true,
        selectedLessons: {
          include: {
            lesson: {
              include: {
                teacher: true,
              },
            },
          },
        },
      },
    });

    if (!selectUnit) {
      return { error: "Select unit not found" };
    }

    // Apply customReturn to calculate totalUnits and totalFee
    const selectUnitsWithTotal = customReturn(selectUnit);

    return { selectUnit: selectUnitsWithTotal };
  } catch (error) {
    console.error("Failed to fetch select unit by ID:", error);
    return { error: "Failed to fetch select unit by ID" };
  }
}

// Get a specific select unit by student, year, and period
export async function getSpecificSelectUnit(
  studentId: bigint,
  year: number,
  period: Period,
  lessonId?: bigint
) {
  try {
    // Find the select unit
    const selectUnit = await prisma.selectUnit.findUnique({
      where: {
        StudentId_Year_Period: {
          StudentId: studentId,
          Year: year,
          Period: period,
        },
      },
      include: {
        student: true,
        selectedLessons: {
          include: {
            lesson: {
              include: {
                teacher: true,
              },
            },
          },
          // If lessonId is provided, filter to only include that lesson
          ...(lessonId ? { where: { lessonId } } : {}),
        },
      },
    });

    if (!selectUnit) {
      return { error: "Select unit not found" };
    }

    // Apply customReturn to calculate totalUnits and totalFee
    return { selectUnit: customReturn(selectUnit) };
  } catch (error) {
    console.error("Failed to fetch specific select unit:", error);
    return { error: "Failed to fetch specific select unit" };
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
          { selectedLessons: { lesson: { LessonName: { contains: query } } } },
          {
            selectedLessons: {
              lesson: { teacher: { FirstName: { contains: query } } },
            },
          },
          {
            selectedLessons: {
              lesson: { teacher: { LastName: { contains: query } } },
            },
          },
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
        selectedLessons: {
          include: {
            lesson: {
              include: {
                teacher: true,
              },
            },
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

    // Apply customReturn to each select unit to calculate totalUnits and totalFee
    const selectUnitsWithTotal = selectUnits.map((unit) => customReturn(unit));

    return {
      selectUnits: selectUnitsWithTotal,
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

// Get select units by studentId, year, and period with all selected lessons
export async function getSelectUnitLessons(
  studentId: bigint,
  year: number,
  period: Period
) {
  try {
    const selectUnit = await prisma.selectUnit.findUnique({
      where: {
        StudentId_Year_Period: {
          StudentId: studentId,
          Year: year,
          Period: period,
        },
      },
      include: {
        student: true,
        selectedLessons: {
          include: {
            lesson: true,
          },
        },
      },
    });

    if (!selectUnit) {
      return { error: "Select unit not found" };
    }

    // Apply customReturn to calculate totalUnits and totalFee
    return { selectUnit: customReturn(selectUnit) };
  } catch (error) {
    console.error(
      "Failed to fetch select unit by student, year, and period:",
      error
    );
    return {
      error: "Failed to fetch select unit by student, year, and period",
    };
  }
}

// Create a new select unit
export async function createSelectUnit(
  data: SelectUnitDataType,
  lessonId?: bigint
) {
  try {
    // Check if the student exists
    const student = await prisma.student.findUnique({
      where: { id: data.StudentId },
    });

    if (!student) {
      return { error: "Student not found" };
    }

    // Check if the select unit already exists for this student, year, and period
    const existingSelectUnit = await prisma.selectUnit.findUnique({
      where: {
        StudentId_Year_Period: {
          StudentId: data.StudentId,
          Year: data.Year,
          Period: data.Period,
        },
      },
    });

    if (existingSelectUnit) {
      // If we're adding a lesson to an existing select unit
      if (lessonId) {
        // Check if the lesson exists
        const lesson = await prisma.lesson.findUnique({
          where: { id: lessonId },
        });

        if (!lesson) {
          return { error: "Lesson not found" };
        }

        // Check if this lesson is already selected for this unit
        const existingSelectedLesson = await prisma.selectedLesson.findUnique({
          where: {
            selectUnitId_lessonId: {
              selectUnitId: existingSelectUnit.id,
              lessonId: lessonId,
            },
          },
        });

        if (existingSelectedLesson) {
          return { error: "This lesson is already selected for this unit" };
        }

        // Add the lesson to the existing select unit
        const selectedLesson = await prisma.selectedLesson.create({
          data: {
            selectUnitId: existingSelectUnit.id,
            lessonId: lessonId,
          },
          include: {
            lesson: true,
            selectUnit: true,
          },
        });

        revalidatePath("/dashboard/select-unit");
        revalidatePath(`/dashboard/students/${data.StudentId}`);
        return {
          selectUnit: existingSelectUnit,
          selectedLesson,
        };
      }

      return {
        error:
          "This course selection already exists for this student, year, and period",
      };
    }

    // Create a new select unit
    const selectUnit = await prisma.selectUnit.create({
      data: {
        StudentId: data.StudentId,
        Year: data.Year,
        Period: data.Period,
        ExtraFee: data.ExtraFee,
        FixedFee: data.FixedFee,
        CertificateFee: data.CertificateFee,
        ExtraClassFee: data.ExtraClassFee,
        BooksFee: data.BooksFee,
      },
      include: {
        student: true,
      },
    });

    // If a lesson ID is provided, create a selected lesson entry
    if (lessonId) {
      // Check if the lesson exists
      const lesson = await prisma.lesson.findUnique({
        where: { id: lessonId },
      });

      if (!lesson) {
        // Delete the created select unit since the lesson doesn't exist
        await prisma.selectUnit.delete({
          where: { id: selectUnit.id },
        });
        return { error: "Lesson not found" };
      }

      // Create the selected lesson entry
      await prisma.selectedLesson.create({
        data: {
          selectUnitId: selectUnit.id,
          lessonId: lessonId,
        },
      });
    }

    // Get the complete select unit with related data
    const completeSelectUnit = await prisma.selectUnit.findUnique({
      where: { id: selectUnit.id },
      include: {
        student: true,
        selectedLessons: {
          include: {
            lesson: true,
          },
        },
      },
    });

    revalidatePath("/dashboard/select-unit");
    revalidatePath(`/dashboard/students/${data.StudentId}`);
    // Apply customReturn to calculate totalUnits and totalFee
    return { selectUnit: customReturn(completeSelectUnit) };
  } catch (error) {
    console.error("Failed to create select unit:", error);
    return { error: "Failed to create select unit" };
  }
}

// Update a select unit
export async function updateSelectUnit(
  selectUnitId: bigint,
  data: Partial<SelectUnitDataType>
) {
  try {
    // Remove id from data if it exists
    const { id, ...updateData } = data;

    const selectUnit = await prisma.selectUnit.update({
      where: {
        id: selectUnitId,
      },
      data: updateData,
      include: {
        student: true,
        selectedLessons: {
          include: {
            lesson: true,
          },
        },
      },
    });

    revalidatePath("/dashboard/select-unit");
    revalidatePath(`/dashboard/students/${selectUnit.StudentId}`);
    // Apply customReturn to calculate totalUnits and totalFee
    return { selectUnit: customReturn(selectUnit) };
  } catch (error) {
    console.error("Failed to update select unit:", error);
    return { error: "Failed to update select unit" };
  }
}

// Delete a select unit
export async function deleteSelectUnit(selectUnitId: bigint) {
  try {
    // Get the student ID before deleting for revalidation
    const selectUnit = await prisma.selectUnit.findUnique({
      where: { id: selectUnitId },
      select: { StudentId: true },
    });

    if (!selectUnit) {
      return { error: "Select unit not found" };
    }

    // Delete the select unit (this will cascade delete all associated selectedLessons)
    await prisma.selectUnit.delete({
      where: { id: selectUnitId },
    });

    revalidatePath("/dashboard/select-unit");
    revalidatePath(`/dashboard/students/${selectUnit.StudentId}`);
    return { success: true };
  } catch (error) {
    console.error("Failed to delete select unit:", error);
    return { error: "Failed to delete select unit" };
  }
}

// Remove a specific lesson from a select unit
export async function removeSelectedLesson(
  selectUnitId: bigint,
  lessonId: bigint
) {
  try {
    // Get the student ID before deleting for revalidation
    const selectUnit = await prisma.selectUnit.findUnique({
      where: { id: selectUnitId },
      select: { StudentId: true },
    });

    if (!selectUnit) {
      return { error: "Select unit not found" };
    }

    // Delete the selected lesson
    await prisma.selectedLesson.delete({
      where: {
        selectUnitId_lessonId: {
          selectUnitId,
          lessonId,
        },
      },
    });

    // Check if there are any lessons left in this select unit
    const remainingLessons = await prisma.selectedLesson.count({
      where: { selectUnitId },
    });

    // If no lessons remain, delete the select unit
    if (remainingLessons === 0) {
      await prisma.selectUnit.delete({
        where: { id: selectUnitId },
      });
    }

    revalidatePath("/dashboard/select-unit");
    revalidatePath(`/dashboard/students/${selectUnit.StudentId}`);
    return { success: true };
  } catch (error) {
    console.error("Failed to remove selected lesson:", error);
    return { error: "Failed to remove selected lesson" };
  }
}

// Bulk create select units for a student
export async function bulkCreateSelectUnits(
  baseData: SelectUnitDataType,
  lessonIds: bigint[]
) {
  try {
    if (lessonIds.length === 0) {
      return { error: "No lessons provided" };
    }

    // Check if the student already has a select unit for this year and period
    const existingSelectUnit = await prisma.selectUnit.findUnique({
      where: {
        StudentId_Year_Period: {
          StudentId: baseData.StudentId,
          Year: baseData.Year,
          Period: baseData.Period,
        },
      },
      include: {
        selectedLessons: true,
      },
    });

    // If a select unit already exists, add the lessons to it
    if (existingSelectUnit) {
      const createdLessons = [];
      const existingLessonIds = existingSelectUnit.selectedLessons.map(
        (sl) => sl.lessonId
      );

      // Filter out lessons that are already selected
      const newLessonIds = lessonIds.filter(
        (id) => !existingLessonIds.includes(id)
      );

      if (newLessonIds.length === 0) {
        return { error: "All provided lessons are already selected" };
      }

      // Add each new lesson
      for (const lessonId of newLessonIds) {
        try {
          // Check if the lesson exists
          const lesson = await prisma.lesson.findUnique({
            where: { id: lessonId },
          });

          if (!lesson) {
            return { error: `Lesson with ID ${lessonId} not found` };
          }

          // Create the selected lesson
          const selectedLesson = await prisma.selectedLesson.create({
            data: {
              selectUnitId: existingSelectUnit.id,
              lessonId,
            },
            include: {
              lesson: true,
            },
          });

          createdLessons.push(selectedLesson);
        } catch (error) {
          console.error(`Failed to add lesson ${lessonId}:`, error);
          return { error: `Failed to add lesson ${lessonId}` };
        }
      }

      // Get the updated select unit with all lessons
      const updatedSelectUnit = await prisma.selectUnit.findUnique({
        where: { id: existingSelectUnit.id },
        include: {
          student: true,
          selectedLessons: {
            include: {
              lesson: true,
            },
          },
        },
      });

      revalidatePath("/dashboard/select-unit");
      revalidatePath(`/dashboard/students/${baseData.StudentId}`);
      return {
        selectUnit: updatedSelectUnit,
        addedLessons: createdLessons,
      };
    }

    // Create a new select unit
    const selectUnit = await prisma.selectUnit.create({
      data: {
        StudentId: baseData.StudentId,
        Year: baseData.Year,
        Period: baseData.Period,
        ExtraFee: baseData.ExtraFee,
        FixedFee: baseData.FixedFee,
        CertificateFee: baseData.CertificateFee,
        ExtraClassFee: baseData.ExtraClassFee,
        BooksFee: baseData.BooksFee,
      },
    });

    // Add each lesson to the select unit
    for (const lessonId of lessonIds) {
      try {
        // Check if the lesson exists
        const lesson = await prisma.lesson.findUnique({
          where: { id: lessonId },
        });

        if (!lesson) {
          // If a lesson doesn't exist, delete the select unit and return an error
          await prisma.selectUnit.delete({
            where: { id: selectUnit.id },
          });
          return { error: `Lesson with ID ${lessonId} not found` };
        }

        // Create the selected lesson
        await prisma.selectedLesson.create({
          data: {
            selectUnitId: selectUnit.id,
            lessonId,
          },
        });
      } catch (error) {
        // If there's an error, delete the select unit and return an error
        await prisma.selectUnit.delete({
          where: { id: selectUnit.id },
        });
        console.error(`Failed to add lesson ${lessonId}:`, error);
        return { error: `Failed to add lesson ${lessonId}` };
      }
    }

    // Get the complete select unit with all lessons
    const completeSelectUnit = await prisma.selectUnit.findUnique({
      where: { id: selectUnit.id },
      include: {
        student: true,
        selectedLessons: {
          include: {
            lesson: true,
          },
        },
      },
    });

    revalidatePath("/dashboard/select-unit");
    revalidatePath(`/dashboard/students/${baseData.StudentId}`);
    // Apply customReturn to calculate totalUnits and totalFee
    return { selectUnit: customReturn(completeSelectUnit) };
  } catch (error) {
    console.error("Failed to bulk create select units:", error);
    return { error: "Failed to bulk create select units" };
  }
}

// Aggregate select units grouped by studentId, year, and period
export async function getSelectUnitsGroupedByStudentYearPeriod() {
  try {
    const grouped = await prisma.selectUnit.groupBy({
      by: ["StudentId", "Year", "Period"],
      _count: true,
      _sum: { ExtraFee: true },
    });

    // Fetch student names and lesson/unit info for each group
    const results = await Promise.all(
      grouped.map(async (group) => {
        const student = await prisma.student.findUnique({
          where: { id: group.StudentId },
          select: { FirstName: true, LastName: true },
        });

        // Get the select unit with all selected lessons
        const selectUnit = await prisma.selectUnit.findUnique({
          where: {
            StudentId_Year_Period: {
              StudentId: group.StudentId,
              Year: group.Year,
              Period: group.Period,
            },
          },
          include: {
            student: true,
            selectedLessons: {
              include: {
                lesson: true,
              },
            },
          },
        });

        // Count the number of lessons
        const numberOfLessons = selectUnit?.selectedLessons.length || 0;

        // Calculate total units from all selected lessons
        const totalUnits =
          selectUnit?.selectedLessons.reduce(
            (sum, sl) =>
              sum +
              ((sl.lesson.TheoriUnit || 0) + (sl.lesson.PracticalUnit || 0)),
            0
          ) || 0;

        // Calculate total price from all selected lessons plus extra fees
        const totalPrice =
          (selectUnit?.selectedLessons.reduce(
            (sum, sl) =>
              sum +
              (Number(sl.lesson.PricePerUnit) || 0) *
                ((sl.lesson.TheoriUnit || 0) + (sl.lesson.PracticalUnit || 0)),
            0
          ) || 0) +
          (selectUnit?.ExtraFee ? Number(selectUnit.ExtraFee) : 0) +
          (selectUnit?.FixedFee ? Number(selectUnit.FixedFee) : 0) +
          (selectUnit?.CertificateFee ? Number(selectUnit.CertificateFee) : 0) +
          (selectUnit?.ExtraClassFee ? Number(selectUnit.ExtraClassFee) : 0) +
          (selectUnit?.BooksFee ? Number(selectUnit.BooksFee) : 0);

        return {
          studentId: group.StudentId,
          studentName: student
            ? `${student.FirstName} ${student.LastName}`
            : "-",
          numberOfLessons,
          totalUnits,
          year: group.Year,
          period: group.Period,
          totalPrice,
          extraFees: {
            extraFee: selectUnit?.ExtraFee ? Number(selectUnit.ExtraFee) : 0,
            fixedFee: selectUnit?.FixedFee ? Number(selectUnit.FixedFee) : 0,
            certificateFee: selectUnit?.CertificateFee
              ? Number(selectUnit.CertificateFee)
              : 0,
            extraClassFee: selectUnit?.ExtraClassFee
              ? Number(selectUnit.ExtraClassFee)
              : 0,
            booksFee: selectUnit?.BooksFee ? Number(selectUnit.BooksFee) : 0,
          },
        };
      })
    );
    return { data: results };
  } catch (error) {
    console.error("Failed to group select units:", error);
    return { error: "Failed to group select units" };
  }
}
