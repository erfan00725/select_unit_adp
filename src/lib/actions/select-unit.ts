"use server";

import { Period, Prisma } from "@prisma/client";
import { prisma } from "../prisma";
import { revalidatePath } from "next/cache";
import { BaseListFilterParams, SelectUnitDataType } from "@/types/Tables";
import { DeleteFunctionReturnType } from "@/types/General";
import getTotalFee from "../utils/getTotalFee";
import { getSettings } from "./general";

type SelectUnitLessonTyoe = {
  id: bigint;
  learned?: boolean;
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
          lesson: {
            include?: {
              teacher?: true;
            };
          };
        };
      };
    };
  }> | null,
  defaultPricePerUnitFirst?: number | string,
  defaultPricePerUnitSecond?: number | string,
  defaultLearendFirst?: number | string,
  defaultLearendSecond?: number | string,
) {
  // Handle null input
  if (!selectUnit) {
    return null;
  }

  let lessons = selectUnit.selectedLessons;

  const studentGrade = selectUnit.student?.Grade;
  const isFirstTier =
    studentGrade &&
    ["GRADE_7", "GRADE_8", "GRADE_9"].includes(studentGrade);


  const initialDefaultPrice = isFirstTier
    ? defaultPricePerUnitFirst
    : defaultPricePerUnitSecond;
  let defaultPricePerUnit = initialDefaultPrice;


    
    if (defaultPricePerUnit !== undefined || defaultPricePerUnit !== null) {
      lessons = selectUnit.selectedLessons.map((selectedLesson) => {
      if (selectedLesson.Learned) {
        defaultPricePerUnit = isFirstTier
          ? defaultLearendFirst
          : defaultLearendSecond;
      }else{
        defaultPricePerUnit = initialDefaultPrice;
      }
      return {
        ...selectedLesson,
        lesson: {
          ...selectedLesson.lesson,
          PricePerUnit:
            selectedLesson.lesson?.PricePerUnit === undefined ||
            selectedLesson.lesson?.PricePerUnit === null
              ? BigInt(Number(defaultPricePerUnit))
              : selectedLesson.lesson?.PricePerUnit,
        },
      };
    });
  }

  return {
    ...selectUnit,
    totalUnits: selectUnit.selectedLessons
      ? selectUnit.selectedLessons.reduce((acc, lesson) => {
          return (
            acc + (lesson.lesson?.TheoriUnit + lesson.lesson?.PracticalUnit)
          );
        }, 0)
      : 0,
    selectedLessons: lessons,
    totalFee: getTotalFee(
      selectUnit,
      Number(defaultPricePerUnitFirst),
      Number(defaultPricePerUnitSecond),
      Number(defaultLearendFirst),
      Number(defaultLearendSecond)
    ),
  };
}

// Get all select units
export async function getSelectUnits(
  params?: BaseListFilterParams & {
    year?: number;
    period?: Period;
    paid?: number;
  }
) {
  try {
    const {
      query,
      order = "asc",
      limit = 10,
      page = 1,
      from,
      to,
      year,
      period,
      paid,
    } = params || {};

    // Calculate skip for pagination
    const skip = (page - 1) * limit;

    // Build where condition for search
    const where: any = query
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

    if (year) {
      const GyYear = year + 621;
      where.Year = {
        in: [GyYear, GyYear + 1],
      };
    }

    if (period) {
      where.Period = period;
    }

    if (typeof paid === "number") {
      where.Paid = !!paid;
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

    const { settings } = await getSettings();
    const pricePerUnitFirst = settings["pricePerUnitFirst"];
    const pricePerUnitSecond = settings["pricePerUnitSecond"];
    const learnedFeeFirst = settings["learnedFeeFirst"];
    const learnedFeeSecond = settings["learnedFeeSecond"];

    // Apply customReturn to each select unit to calculate totalUnits and totalFee
    const selectUnitsWithTotal = selectUnits.map((unit) =>
      customReturn(
        unit,
        pricePerUnitFirst,
        pricePerUnitSecond,
        learnedFeeFirst,
        learnedFeeSecond
      )
    );

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
    return { error: "دریافت اطلاعات انتخاب واحد با خطا مواجه شد" };
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
    const { settings } = await getSettings();
    const pricePerUnitFirst = settings["pricePerUnitFirst"];
    const pricePerUnitSecond = settings["pricePerUnitSecond"];
    const learnedFeeFirst = settings["learnedFeeFirst"];
    const learnedFeeSecond = settings["learnedFeeSecond"];

    // Apply customReturn to each select unit to calculate totalUnits and totalFee
    const selectUnitsWithTotal = selectUnits.map((unit) =>
      customReturn(
        unit,
        pricePerUnitFirst,
        pricePerUnitSecond,
        learnedFeeFirst,
        learnedFeeSecond
      )
    );

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
    return { error: "دریافت اطلاعات انتخاب واحد دانش‌آموز با خطا مواجه شد" };
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
    const { settings } = await getSettings();
    const pricePerUnitFirst = settings["pricePerUnitFirst"];
    const pricePerUnitSecond = settings["pricePerUnitSecond"];
    const learnedFeeFirst = settings["learnedFeeFirst"];
    const learnedFeeSecond = settings["learnedFeeSecond"];

    // Apply customReturn to each select unit to calculate totalUnits and totalFee
    const selectUnitsWithTotal = selectUnits.map((unit) =>
      customReturn(
        unit,
        pricePerUnitFirst,
        pricePerUnitSecond,
        learnedFeeFirst,
        learnedFeeSecond
      )
    );

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
    return { error: "دریافت اطلاعات انتخاب واحد درس با خطا مواجه شد" };
  }
}

// Get a single select unit by ID
/**
 * Retrieves a single select unit by its unique ID.
 * @param selectUnitId - The ID of the select unit to retrieve (string, will be converted to BigInt).
 * @returns A promise that resolves to an object containing the select unit or an error.
 */
export async function getSelectUnitById(selectUnitId: string) {
  try {
    const unitId = BigInt(selectUnitId);
    const selectUnit = await prisma.selectUnit.findUnique({
      where: { id: unitId },
      include: {
        student: true,
        selectedLessons: {
          include: {
            lesson: {
              include: {
                teacher: true,
                field: true,
              },
            },
          },
        },
      },
    });

    if (!selectUnit) {
      return { error: "انتخاب واحد یافت نشد" };
    }

    const { settings } = await getSettings();
    const pricePerUnitFirst = settings["pricePerUnitFirst"];
    const pricePerUnitSecond = settings["pricePerUnitSecond"];
    const learnedFeeFirst = settings["learnedFeeFirst"];
    const learnedFeeSecond = settings["learnedFeeSecond"];

    // Apply customReturn to calculate totalUnits and totalFee
    return {
      selectUnit: customReturn(
        selectUnit,
        pricePerUnitFirst,
        pricePerUnitSecond,
        learnedFeeFirst,
        learnedFeeSecond
      ),
    };
  } catch (error) {
    console.error("Failed to fetch select unit:", error);
    return { error: "دریافت اطلاعات انتخاب واحد با خطا مواجه شد" };
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
      return { error: "انتخاب واحد یافت نشد" };
    }

    const { settings } = await getSettings();
    const pricePerUnitFirst = settings["pricePerUnitFirst"];
    const pricePerUnitSecond = settings["pricePerUnitSecond"];
    const learnedFeeFirst = settings["learnedFeeFirst"];
    const learnedFeeSecond = settings["learnedFeeSecond"];

    // Apply customReturn to calculate totalUnits and totalFee
    return {
      selectUnit: customReturn(
        selectUnit,
        pricePerUnitFirst,
        pricePerUnitSecond,
        learnedFeeFirst,
        learnedFeeSecond
      ),
    };
  } catch (error) {
    console.error("Failed to fetch specific select unit:", error);
    return { error: "دریافت اطلاعات انتخاب واحد مشخص با خطا مواجه شد" };
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

    const { settings } = await getSettings();
    const pricePerUnitFirst = settings["pricePerUnitFirst"];
    const pricePerUnitSecond = settings["pricePerUnitSecond"];
    const learnedFeeFirst = settings["learnedFeeFirst"];
    const learnedFeeSecond = settings["learnedFeeSecond"];

    // Apply customReturn to each select unit to calculate totalUnits and totalFee
    const selectUnitsWithTotal = selectUnits.map((unit) =>
      customReturn(
        unit,
        pricePerUnitFirst,
        pricePerUnitSecond,
        learnedFeeFirst,
        learnedFeeSecond
      )
    );

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
    return {
      error: "دریافت اطلاعات انتخاب واحد بر اساس سال و نیمسال با خطا مواجه شد",
    };
  }
}

// Get select units by studentId, year, and period with all selected lessons
/**
 * Retrieves select unit lessons for a specific student, year, and period.
 * @param studentId - The ID of the student (string, will be converted to BigInt).
 * @param year - The academic year.
 * @param period - The academic period.
 * @returns A promise that resolves to an object containing the select unit with lessons or an error.
 */
export async function getSelectUnitLessons(
  studentId: string,
  year: number,
  period: Period
) {
  try {
    const sId = BigInt(studentId);
    const selectUnit = await prisma.selectUnit.findUnique({
      where: {
        StudentId_Year_Period: {
          StudentId: sId,
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
      return { error: "انتخاب واحد یافت نشد" };
    }
    const { settings } = await getSettings();
    const pricePerUnitFirst = settings["pricePerUnitFirst"];
    const pricePerUnitSecond = settings["pricePerUnitSecond"];
    const learnedFeeFirst = settings["learnedFeeFirst"];
    const learnedFeeSecond = settings["learnedFeeSecond"];

    // Apply customReturn to calculate totalUnits and totalFee
    return {
      selectUnit: customReturn(
        selectUnit,
        pricePerUnitFirst,
        pricePerUnitSecond,
        learnedFeeFirst,
        learnedFeeSecond
      ),
    };
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
/**
 * Creates a new select unit or adds a lesson to an existing one.
 * @param data - The data for the select unit.
 * @param lessonId - Optional ID of the lesson to add (string, will be converted to BigInt).
 * @returns A promise that resolves to an object containing the select unit or an error.
 */
export async function createSelectUnit(
  data: SelectUnitDataType,
  lessonId?: string
) {
  try {
    // Check if the student exists
    const student = await prisma.student.findUnique({
      where: { id: data.StudentId },
    });

    if (!student) {
      return { error: "دانش‌آموز یافت نشد" };
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
        const lessonIdBigInt = BigInt(lessonId);
        // Check if the lesson exists
        const lesson = await prisma.lesson.findUnique({
          where: { id: lessonIdBigInt },
        });

        if (!lesson) {
          return { error: "درس یافت نشد" };
        }

        // Check if this lesson is already selected for this unit
        const existingSelectedLesson = await prisma.selectedLesson.findUnique({
          where: {
            selectUnitId_lessonId: {
              selectUnitId: existingSelectUnit.id,
              lessonId: BigInt(lessonId), // Ensure BigInt conversion here too
            },
          },
        });

        if (existingSelectedLesson) {
          return { error: "این درس قبلاً برای این واحد انتخاب شده است" };
        }

        // Add the lesson to the existing select unit
        const selectedLesson = await prisma.selectedLesson.create({
          data: {
            selectUnitId: existingSelectUnit.id,
            lessonId: BigInt(lessonId), // Ensure BigInt conversion here too
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
          "انتخاب واحد برای این دانش‌آموز در این سال و نیمسال قبلاً ثبت شده است",
      };
    }

    // Create a new select unit
    const selectUnit = await prisma.selectUnit.create({
      data: {
        StudentId: data.StudentId,
        Year: data.Year,
        Period: data.Period,
        OtherFee: data.OtherFee,
        FixedFee: data.FixedFee,
        CertificateFee: data.CertificateFee,
        SkillRegistrationFee: data.SkillRegistrationFee,
        ExtraClassFee: data.ExtraClassFee,
        BooksFee: data.BooksFee,
        InsuranceFee: data.InsuranceFee,
        Discount: data.Discount,
        Paid: data.Paid,
        PaymentMethod: data.PaymentMethod,
        PaymentDescription: data.PaymentDescription,
        PaymentDate: data.PaymentDate,
      },
      include: {
        student: true,
      },
    });

    // If a lesson ID is provided, create a selected lesson entry
    if (lessonId) {
      const lessonIdBigInt = BigInt(lessonId);
      // Check if the lesson exists
      const lesson = await prisma.lesson.findUnique({
        where: { id: lessonIdBigInt },
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
          lessonId: BigInt(lessonId), // Ensure BigInt conversion here too
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

    const { settings } = await getSettings();
    const pricePerUnitFirst = settings["pricePerUnitFirst"];
    const pricePerUnitSecond = settings["pricePerUnitSecond"];
    const learnedFeeFirst = settings["learnedFeeFirst"];
    const learnedFeeSecond = settings["learnedFeeSecond"];

    revalidatePath("/dashboard/select-unit");
    revalidatePath(`/dashboard/students/${data.StudentId}`);
    // Apply customReturn to calculate totalUnits and totalFee
    return {
      selectUnit: customReturn(
        completeSelectUnit,
        pricePerUnitFirst,
        pricePerUnitSecond,
        learnedFeeFirst,
        learnedFeeSecond
      ),
    };
  } catch (error: any) {
    if (error.code === "P2002") {
      return { error: "این دانش‌آموز در این سال و نیمسال قبلاً انتخاب واحد دارد" };
    }
    console.error("Failed to create select unit:", error);
    return { error: "ایجاد انتخاب واحد با خطا مواجه شد" };
  }
}

// Update a select unit
export async function updateSelectUnit(
  id: string,
  data: Partial<SelectUnitDataType>
) {
  try {
    const selectUnitId = BigInt(id);
    // Check if select unit exists
    const existingSelectUnit = await prisma.selectUnit.findUnique({
      where: { id: selectUnitId },
    });
    if (!existingSelectUnit) {
      return { error: "انتخاب واحد مورد نظر یافت نشد" };
    }
    const editedData: Partial<SelectUnitDataType> = {
      ...data,
      id: undefined,
    };
    const selectUnit = await prisma.selectUnit.update({
      where: { id: selectUnitId },
      data: editedData,
    });
    revalidatePath("/dashboard/select-units");
    revalidatePath(`/dashboard/select-units/${id}`);
    return { selectUnit };
  } catch (error) {
    console.error("Failed to update select unit:", error);
    return { error: "خطا در به‌روزرسانی انتخاب واحد" };
  }
}

// Delete a select unit
/**
 * Deletes a select unit by its string ID. Converts the string ID to BigInt internally.
 * @param id - The select unit ID as a string
 * @returns A promise that resolves to an object indicating success or an error.
 */
export async function deleteSelectUnit(id: string): DeleteFunctionReturnType {
  try {
    const selectUnitId = BigInt(id);
    // Get the student ID before deleting for revalidation
    const selectUnit = await prisma.selectUnit.findUnique({
      where: { id: selectUnitId },
      include: {
        student: true,
        Payments: true,
      },
    });

    if (!selectUnit) {
      return { error: "انتخاب واحد یافت نشد" };
    }
    if (selectUnit.Payments.length) {
      return { error: "امکان حذف انتخاب واحد با پرداخت وجود ندارد" };
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
    return { error: "حذف انتخاب واحد با خطا مواجه شد" };
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
      return { error: "انتخاب واحد یافت نشد" };
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
    return { error: "حذف درس انتخاب شده با خطا مواجه شد" };
  }
}

// Bulk create select units for a student
export async function bulkCreateSelectUnits(
  baseData: SelectUnitDataType,
  lessonIds: SelectUnitLessonTyoe[]
) {
  try {
    if (lessonIds.length === 0) {
      return { error: "هیچ درسی انتخاب نشده است" };
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
        ({ id }) => !existingLessonIds.includes(id)
      );

      if (newLessonIds.length === 0) {
        return { error: "تمام دروس انتخاب شده قبلاً ثبت شده‌اند" };
      }

      // Add each new lesson
      for (const lessonId of newLessonIds) {
        try {
          // Check if the lesson exists
          const lesson = await prisma.lesson.findUnique({
            where: { id: lessonId.id },
          });

          if (!lesson) {
            return { error: `درس با شناسه ${lessonId} یافت نشد` };
          }

          // Create the selected lesson
          const selectedLesson = await prisma.selectedLesson.create({
            data: {
              selectUnitId: existingSelectUnit.id,
              lessonId: lessonId.id,
              Learned: lessonId.learned,
            },
            include: {
              lesson: true,
            },
          });

          createdLessons.push(selectedLesson);
        } catch (error) {
          console.error(`Failed to add lesson ${lessonId}:`, error);
          return { error: `افزودن درس ${lessonId} با خطا مواجه شد` };
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
        OtherFee: baseData.OtherFee || 0,
        FixedFee: baseData.FixedFee || 0,
        InsuranceFee: baseData.InsuranceFee || 0,
        SkillRegistrationFee: baseData.SkillRegistrationFee || 0,
        CertificateFee: baseData.CertificateFee || 0,
        ExtraClassFee: baseData.ExtraClassFee || 0,
        BooksFee: baseData.BooksFee || 0,
        Discount: baseData.Discount || 0,
        Paid: !!baseData.Paid,
        PaymentMethod: baseData.PaymentMethod,
        PaymentDescription: baseData.PaymentDescription,
        PaymentDate: baseData.PaymentDate,
      },
    });

    // Add each lesson to the select unit
    for (const lessonId of lessonIds) {
      try {
        // Check if the lesson exists
        const lesson = await prisma.lesson.findUnique({
          where: { id: lessonId.id },
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
            lessonId: lessonId.id,
            Learned: lessonId.learned,
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

    const { settings } = await getSettings();
    const pricePerUnitFirst = settings["pricePerUnitFirst"];
    const pricePerUnitSecond = settings["pricePerUnitSecond"];
    const learnedFeeFirst = settings["learnedFeeFirst"];
    const learnedFeeSecond = settings["learnedFeeSecond"];

    revalidatePath("/dashboard/select-unit");
    revalidatePath(`/dashboard/students/${baseData.StudentId}`);
    // Apply customReturn to calculate totalUnits and totalFee
    return {
      selectUnit: customReturn(
        completeSelectUnit,
        pricePerUnitFirst,
        pricePerUnitSecond,
        learnedFeeFirst,
        learnedFeeSecond
      ),
    };
  } catch (error) {
    console.error("Failed to bulk create select units:", error);
    return { error: "ایجاد گروهی انتخاب واحد با خطا مواجه شد" };
  }
}

// Bulk edit selected lessons for an existing select unit
export async function bulkEditSelectUnits(
  selectUnitId: bigint,
  baseData: Partial<SelectUnitDataType>,
  lessonIds: SelectUnitLessonTyoe[]
) {
  try {
    if (lessonIds.length === 0) {
      return { error: "هیچ درسی انتخاب نشده است" };
    }

    // Check if the select unit exists
    const existingSelectUnit = await prisma.selectUnit.findUnique({
      where: {
        id: selectUnitId,
      },
      include: {
        selectedLessons: true,
        student: {
          select: {
            id: true,
          },
        },
      },
    });

    if (!existingSelectUnit) {
      return { error: "انتخاب واحد یافت نشد" };
    }

    // Get current lesson IDs
    const currentLessonIds = existingSelectUnit.selectedLessons.map(
      (sl) => sl.lessonId
    );

    // Determine which lessons to add, remove, and update
    const lessonsToAdd = lessonIds.filter(
      ({ id }) => !currentLessonIds.includes(id)
    );
    const lessonsToRemove = currentLessonIds.filter(
      (id) => !lessonIds.some(({ id: lessonId }) => lessonId === id)
    );

    // Determine lessons to update (existing lessons with changed learned status)
    const lessonsToUpdate = lessonIds.filter(({ id, learned }) => {
      const existingLesson = existingSelectUnit.selectedLessons.find(
        (sl) => sl.lessonId === id
      );
      return existingLesson && existingLesson.Learned !== learned;
    });

    // If no changes are needed, return early
    if (
      lessonsToAdd.length === 0 &&
      lessonsToRemove.length === 0 &&
      !baseData
    ) {
      return { message: "تغییری نیاز نیست" };
    }

    // Process additions and removals in a transaction
    const result = await prisma.$transaction(
      async (tx) => {
        // Remove lessons that are no longer needed
        if (lessonsToRemove.length > 0) {
          await tx.selectedLesson.deleteMany({
            where: {
              selectUnitId,
              lessonId: {
                in: lessonsToRemove,
              },
            },
          });
        }

        // Add new lessons
        const addedLessons = [];
        for (const lessonId of lessonsToAdd) {
          // Check if the lesson exists
          const lesson = await tx.lesson.findUnique({
            where: { id: lessonId.id },
          });

          if (!lesson) {
            throw new Error(`درس با شناسه ${lessonId} یافت نشد`);
          }

          // Create the selected lesson
          const selectedLesson = await tx.selectedLesson.create({
            data: {
              selectUnitId,
              lessonId: lessonId.id,
              Learned: lessonId.learned,
            },
            include: {
              lesson: true,
            },
          });

          addedLessons.push(selectedLesson);
        }

        // Update learned status for existing lessons if changed
        for (const lessonToUpdate of lessonsToUpdate) {
          await tx.selectedLesson.updateMany({
            where: {
              selectUnitId,
              lessonId: lessonToUpdate.id,
            },
            data: {
              Learned: lessonToUpdate.learned,
            },
          });
        }

        // Update SelectUnit fields from baseData
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { StudentId, id, ...updateDataFromBase } = baseData;

        if (Object.keys(updateDataFromBase).length > 0) {
          await tx.selectUnit.update({
            where: { id: selectUnitId },
            data: {
              ...updateDataFromBase,
            },
          });
        }

        // Get the updated select unit with all lessons
        const updatedSelectUnit = await tx.selectUnit.findUnique({
          where: { id: selectUnitId },
          include: {
            student: true,
            selectedLessons: {
              include: {
                lesson: true,
              },
            },
          },
        });

        return {
          selectUnit: updatedSelectUnit,
          addedLessons,
          removedLessonIds: lessonsToRemove,
        };
      },
      {
        timeout: 10000, // 10 seconds
      }
    );

    // Revalidate paths
    revalidatePath("/dashboard/select-unit");
    if (existingSelectUnit.student) {
      revalidatePath(`/dashboard/students/${existingSelectUnit.student.id}`);
    }

    const { settings } = await getSettings();
    const pricePerUnitFirst = settings["pricePerUnitFirst"];
    const pricePerUnitSecond = settings["pricePerUnitSecond"];
    const learnedFeeFirst = settings["learnedFeeFirst"];
    const learnedFeeSecond = settings["learnedFeeSecond"];

    // Apply customReturn to calculate totalUnits and totalFee
    return {
      ...result,
      selectUnit: customReturn(
        result.selectUnit,
        pricePerUnitFirst,
        pricePerUnitSecond,
        learnedFeeFirst,
        learnedFeeSecond
      ),
    };
  } catch (error) {
    console.error("Failed to bulk edit select units:", error);
    return { error: "ویرایش گروهی انتخاب واحد با خطا مواجه شد" };
  }
}
