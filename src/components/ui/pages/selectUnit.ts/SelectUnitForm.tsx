"use client";
import { Period } from "@/generated/prisma";
import { getDateJ } from "@/lib/utils/getCurrentDataJ";
import React, { useEffect, useRef, useState } from "react";
import SelectUnitTable from "./SelectUnitTable";
import { LessonSelect } from "./LessonSelect";
import Link from "next/link";
import { urls } from "@/constants/urls";
import { SelectItem } from "../../SelectItems";
import { ActionReturnType } from "@/types/General";
import {
  bulkCreateSelectUnits,
  getLessons,
  getLessonsByIds,
} from "@/lib/actions";
import { FormInputs, InputValueType } from "../../FomInputs";
import Loading from "@/components/common/Loading";
import { toast } from "react-toastify";
import { validateSelectUnitSafe } from "@/lib/validations/selectUnit";
import { ZodError } from "zod";
import getAcademicYearJ from "@/lib/utils/getAcademicYearJ";
import { priceFormatter } from "@/lib/utils/priceFormatter";

type Props = {
  studnetId: string;
  lessons: ActionReturnType<typeof getLessons>;
  defaultPrice?: string | number;
  defaultFixedFee?: string | number;
};

export const SelectUnitForm = ({
  studnetId,
  lessons,
  defaultPrice = 10,
  defaultFixedFee,
}: Props) => {
  let inputValues = useRef<InputValueType>({});
  const [seLectedLessonsIds, setSelectedLessonsIds] = useState<string[]>([]);
  const [selectedLessons, setSelectedLessons] = useState<
    ActionReturnType<typeof getLessonsByIds> | undefined
  >(undefined);

  const [isLoading, setIsLoading] = useState(false);

  const lessonsSelectItems: SelectItem[] =
    lessons?.lessons?.map((lesson) => ({
      id: lesson.id.toString(),
      name: `${lesson.LessonName} (${lesson.teacher?.FirstName} ${lesson.teacher?.LastName})`,
    })) || [];

  // Calculate total price
  const totalPrice = selectedLessons?.lessons?.reduce((total, lesson) => {
    const price = Number(lesson?.PricePerUnit) || Number(defaultPrice);
    return total + price * (Number(lesson?.PricePerUnit) || 1);
  }, 0);

  // calcualte Year
  const year = new Date().getFullYear();
  const periodOptions = new Array(10)
    .fill(0)
    .map((_, i) => Number(year) + (i - 3))
    .map((year) => ({
      value: year,
      label: getAcademicYearJ(year),
    }));

  useEffect(() => {
    if (seLectedLessonsIds.length > 0) {
      setIsLoading(true);
      getLessonsByIds(seLectedLessonsIds)
        .then((lessons) => {
          setSelectedLessons(lessons);
        })
        .catch((err) => {
          toast.error(err.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setSelectedLessons(undefined);
    }
  }, [seLectedLessonsIds]);

  // Handle remove lesson
  const handleRemoveLesson = (courseId: string) => {
    setSelectedLessonsIds(seLectedLessonsIds.filter((id) => id !== courseId));
  };

  const handleReset = () => {
    setSelectedLessonsIds([]);
    setSelectedLessons(undefined);
  };

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    if (!selectedLessons || selectedLessons.lessons.length < 0) {
      toast.error("Please select courses or fill the form");
      return;
    }

    const lessons = seLectedLessonsIds.map((id) => BigInt(id));

    console.log("selectedLessons", selectedLessons);
    console.log("inputValues", inputValues.current);

    const {
      success,
      data: validateData,
      error,
    } = validateSelectUnitSafe({
      Lesson: BigInt(seLectedLessonsIds[0]),
      Lessons: lessons,
      StudentId: BigInt(studnetId),
      Period: inputValues.current.period?.value,
      Year: inputValues.current.year?.value,
    });
    if (!success || error || !validateData) {
      console.log("error", (error as ZodError).errors);
      toast.error((error as ZodError).errors[0].message);
      return;
    }

    bulkCreateSelectUnits(
      {
        StudentId: validateData.StudentId,
        Period: validateData.Period,
        Year: validateData.Year,
      },
      validateData.Lessons
    )
      .then((res) => {
        if (res.error) {
          toast.error((res.error as string) || "Something went wrong");
          return;
        }

        toast.success("Courses selected successfully");
        handleReset();
      })
      .catch((err) => toast.error(err.message));
  };

  const showTable = () => {
    return selectedLessons && selectedLessons.lessons.length > 0 ? (
      <SelectUnitTable
        lessons={selectedLessons}
        onRemoveLesson={handleRemoveLesson}
      />
    ) : (
      <h3 className="w-full text-center text-gray-500">No courses selected</h3>
    );
  };

  // State to track which inputs are active

  const formConfigs = [
    {
      id: "SU_Year",
      label: "Year",
      type: "select" as const,
      name: "year",
      options: periodOptions,
      required: true,
    },
    {
      id: "SU_Period",
      label: "Period",
      type: "select" as const,
      name: "period",
      options: [
        { value: Period.first, label: "First Half" },
        { value: Period.second, label: "Second Half" },
        { value: Period.summer, label: "Summer" },
      ],
      required: true,
    },
    {
      id: "SU_Discount",
      label: "Discount",
      type: "number" as const,
      name: "discount",
      canBeDisabled: true,
    },
    {
      id: "SU_ExtraFee",
      label: "Extra Fee",
      type: "number" as const,
      name: "extraFee",
      canBeDisabled: true,
    },
    {
      id: "SU_FixedFee",
      label: "Fixed Fee",
      type: "number" as const,
      name: "fixedFee",
      canBeDisabled: true,
    },
  ];

  return (
    <form>
      {/* Course Selection Table */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <FormInputs
          configs={formConfigs}
          onInputsChange={(inputs) => {
            inputValues.current = { ...inputValues.current, ...inputs };
          }}
        />
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-900">Selected Courses</h2>
          <LessonSelect
            items={lessonsSelectItems}
            selectedLessons={seLectedLessonsIds}
            setSelectedLessons={setSelectedLessonsIds}
          />
        </div>
        {isLoading ? <Loading /> : showTable()}

        <div className="mt-6 w-full flex flex-row justify-between">
          <button type="button" className="button" onClick={handleReset}>
            Reset
          </button>
          {/* TODO: add total unit */}
          <p className="text-lg font-bold">
            {priceFormatter(Number(totalPrice), true)} :جمع کل
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4">
        <Link
          href={`${urls.students}/${studnetId}`}
          className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Cancel
        </Link>
        <button
          type="submit"
          onClick={handleSubmit}
          className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Confirm Selection
        </button>{" "}
      </div>
    </form>
  );
};
