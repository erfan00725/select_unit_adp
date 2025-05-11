"use client";
import { Period } from "@prisma/client";
import React, { useEffect, useState } from "react";
import SelectUnitTable from "./SelectUnitTable";
import { LessonSelect } from "./LessonSelect";
import Link from "next/link";
import { urls } from "@/constants/urls";
import { SelectItem } from "../../Form/SelectItems";
import { ActionReturnType } from "@/types/General";
import {
  bulkCreateSelectUnits,
  bulkEditSelectUnits,
  getLessons,
  getLessonsByIds,
  getSelectUnitById,
} from "@/lib/actions";
import { FormInputs, InputValueType } from "../../Form/FomInputs";
import Loading from "@/components/common/Loading";
import { toast } from "react-toastify";
import { validateSelectUnitSafe } from "@/lib/validations/selectUnit";
import { ZodError } from "zod";
import getAcademicYearJ from "@/lib/utils/getAcademicYearJ";
import { priceFormatter } from "@/lib/utils/priceFormatter";
import { useRouter } from "next/navigation";

const formConfigs = () => {
  // calcualte Year
  const year = new Date().getFullYear();
  const periodOptions = new Array(10)
    .fill(0)
    .map((_, i) => Number(year) + (i - 3))
    .map((year) => ({
      value: year.toString(),
      label: getAcademicYearJ(year),
    }));

  return [
    {
      id: "SU_Year",
      label: "سال تحصیلی",
      type: "select" as const,
      name: "year",
      options: periodOptions,
      required: true,
    },
    {
      id: "SU_Period",
      label: "نیمسال",
      type: "select" as const,
      name: "period",
      options: [
        { value: Period.first, label: "نیمسال اول" },
        { value: Period.second, label: "نیمسال دوم" },
        { value: Period.summer, label: "تابستان" },
      ],
      required: true,
    },
    {
      id: "SU_Discount",
      label: "تخفیف",
      type: "number" as const,
      name: "discount",
      canBeDisabled: true,
    },
    {
      id: "SU_ExtraFee",
      label: "هزینه اضافی",
      type: "number" as const,
      name: "extraFee",
      canBeDisabled: true,
    },
    {
      id: "SU_FixedFee",
      label: "هزینه ثابت",
      type: "number" as const,
      name: "fixedFee",
      canBeDisabled: true,
    },
    // Add new form configurations
    {
      id: "SU_CertificateFee",
      label: "هزینه مدرک",
      type: "number" as const,
      name: "certificateFee",
      canBeDisabled: true,
    },
    {
      id: "SU_ExtraClassFee",
      label: "هزینه کلاس اضافی",
      type: "number" as const,
      name: "extraClassFee",
      canBeDisabled: true,
    },
    {
      id: "SU_BooksFee",
      label: "هزینه کتاب",
      type: "number" as const,
      name: "booksFee",
      canBeDisabled: true,
    },
  ];
};

type Props = {
  studnetId: string;
  lessons: ActionReturnType<typeof getLessons>;
  defaultPrice?: string | number;
  defaultFixedFee?: string | number;
  selectUnitData?: ActionReturnType<typeof getSelectUnitById>; // Data for edit mode
  isEditMode?: boolean; // Flag to indicate edit mode
};

export const SelectUnitForm = ({
  studnetId,
  lessons,
  defaultPrice = 10,
  defaultFixedFee,
  selectUnitData,
  isEditMode = false,
}: Props) => {
  const router = useRouter();
  // Initialize input values with data from selectUnitData if in edit mode
  const [inputValues, setInputValues] = useState<InputValueType>({});

  // Extract lesson IDs from selectUnitData if in edit mode
  const initialLessonIds =
    isEditMode && selectUnitData?.selectUnit?.selectedLessons
      ? selectUnitData.selectUnit.selectedLessons.map((sl) =>
          sl.lesson.id.toString()
        )
      : [];

  const [seLectedLessonsIds, setSelectedLessonsIds] =
    useState<string[]>(initialLessonIds);
  const [selectedLessons, setSelectedLessons] = useState<
    ActionReturnType<typeof getLessonsByIds> | undefined
  >(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [totalPrice, setTotalPrice] = useState<number>(0); // State for total price

  const lessonsSelectItems: SelectItem[] =
    lessons?.lessons?.map((lesson) => {
      const teacherName = lesson.teacher
        ? `${lesson.teacher?.FirstName} ${lesson.teacher?.LastName}`
        : "بدون معلم";
      return {
        id: lesson.id.toString(),
        name: `${lesson.LessonName} (${teacherName})`,
      };
    }) || [];

  // Initialize form values if in edit mode
  useEffect(() => {
    if (isEditMode && selectUnitData?.selectUnit) {
      const selectUnit = selectUnitData.selectUnit;

      // Set initial form values
      setInputValues({
        year: { value: selectUnit.Year, active: !!selectUnit.Year },
        period: { value: selectUnit.Period, active: !!selectUnit.Period },
        extraFee: {
          value: Number(selectUnit.ExtraFee) || 0,
          active: !!selectUnit.ExtraFee,
        },
        fixedFee: {
          value: Number(selectUnit.FixedFee) || defaultFixedFee || 0,
          active: !!selectUnit.FixedFee || !!defaultFixedFee,
        },
        // Add initialization for new fees
        certificateFee: {
          value: Number(selectUnit.CertificateFee) || 0,
          active: !!selectUnit.CertificateFee,
        },
        extraClassFee: {
          value: Number(selectUnit.ExtraClassFee) || 0,
          active: !!selectUnit.ExtraClassFee,
        },
        booksFee: {
          value: Number(selectUnit.BooksFee) || 0,
          active: !!selectUnit.BooksFee,
        },
      });
    }
  }, []);

  const getFee = (fee: { value: number | string; active: boolean }) => {
    if (!fee) return 0;
    if (fee.active && !!fee.value) {
      return Number(fee.value);
    } else {
      return 0;
    }
  };

  useEffect(() => {
    // Calculate total price
    const lessonsPrice =
      selectedLessons?.lessons?.reduce((total, lesson) => {
        const price = Number(lesson?.PricePerUnit) || Number(defaultPrice) || 0;
        const a = Number(lesson?.TheoriUnit) + Number(lesson?.PracticalUnit);
        return (
          total + price * (a || 1) // if a is 0, use 1
        );
      }, 0) || 0; // Ensure lessonsPrice is a number, defaulting to 0

    console.log(inputValues);

    const additionalFees =
      getFee(inputValues.extraFee) +
      getFee(inputValues.fixedFee) +
      getFee(inputValues.certificateFee) +
      getFee(inputValues.extraClassFee) +
      getFee(inputValues.booksFee) -
      getFee(inputValues.discount);

    console.log("lessonsPrice", lessonsPrice);
    console.log("additionalFees", additionalFees);

    setTotalPrice(lessonsPrice + additionalFees);
  }, [inputValues, selectedLessons]);

  // Fetch selected lessons whenever seLectedLessonsIds changes
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
    if (isSubmitting) return;

    if (!selectedLessons || selectedLessons.lessons.length === 0) {
      // Changed < 0 to === 0
      toast.error("لطفاً درس‌ها را انتخاب کنید یا فرم را تکمیل نمایید");
      return;
    }
    console.log("onSubmit");
    setIsSubmitting(true); // Set submitting to true

    // Remove the unnecessary Promise/setTimeout
    new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });

    const lessons = seLectedLessonsIds.map((id) => BigInt(id));
    const dataToValidate = {
      StudentId: BigInt(studnetId),
      Period: inputValues.period?.value,
      Year: inputValues.year?.value,
      Lessons: lessons,
      ExtraFee: inputValues.extraFee?.value,
      FixedFee: inputValues.fixedFee?.value,
      CertificateFee: inputValues.certificateFee?.value,
      ExtraClassFee: inputValues.extraClassFee?.value,
      BooksFee: inputValues.booksFee?.value,
      // Conditionally add Lesson if lessons exist, as schema requires it but it might be empty before validation catch
      ...(lessons.length > 0 ? { Lesson: lessons[0] } : {}),
    };

    const {
      success,
      data: validateData,
      error,
    } = validateSelectUnitSafe(dataToValidate);

    if (!success || error || !validateData) {
      console.log("error", (error as ZodError).errors);
      toast.error((error as ZodError).errors[0].message);
      setIsSubmitting(false); // Set submitting to false on validation error
      return;
    }

    const action = isEditMode ? "ویرایش" : "انتخاب";

    if (isEditMode && selectUnitData?.selectUnit) {
      // Use bulkEditSelectUnits for edit mode
      bulkEditSelectUnits(
        selectUnitData.selectUnit.id,
        {
          ...validateData,
          ExtraFee: validateData.ExtraFee || undefined,
          CertificateFee: validateData.CertificateFee || undefined,
          ExtraClassFee: validateData.ExtraClassFee || undefined,
          BooksFee: validateData.BooksFee || undefined,
        },
        seLectedLessonsIds.map((id) => BigInt(id))
      )
        .then((res) => {
          if (res.error) {
            toast.error((res.error as string) || "مشکلی پیش آمده است");
            return;
          }
          toast.success(`درس‌ها با موفقیت ${action} شدند`);
          router.push(`${urls.selectUnit}/${selectUnitData.selectUnit?.id}`);
          handleReset();
        })
        .catch((err) => {
          toast.error(err.message || "خطا در هنگام ویرایش");
          console.error("Edit Error:", err);
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    } else {
      // Use bulkCreateSelectUnits for create mode
      bulkCreateSelectUnits(
        {
          StudentId: validateData.StudentId,
          Period: validateData.Period,
          Year: validateData.Year,
          ExtraFee: validateData.ExtraFee || undefined,
          FixedFee: validateData.FixedFee,
          CertificateFee: validateData.CertificateFee || undefined,
          ExtraClassFee: validateData.ExtraClassFee || undefined,
          BooksFee: validateData.BooksFee || undefined,
        },
        validateData.Lessons
      )
        .then((res) => {
          if (res.error) {
            toast.error((res.error as string) || "مشکلی پیش آمده است");
            return;
          }
          toast.success(`درس‌ها با موفقیت ${action} شدند`);
          router.push(`${urls.students}/${studnetId}`);
          handleReset();
        })
        .catch((err) => {
          toast.error(err.message || "خطا در هنگام ایجاد");
          console.error("Create Error:", err);
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  const showTable = () => {
    return selectedLessons && selectedLessons.lessons.length > 0 ? (
      <SelectUnitTable
        lessons={selectedLessons}
        onRemoveLesson={handleRemoveLesson}
      />
    ) : (
      <h3 className="w-full text-center text-gray-500">درسی انتخاب نشده است</h3>
    );
  };

  useEffect(() => {
    console.log("isSubmitting", isSubmitting);
  }, [isSubmitting]);

  // State to track which inputs are active

  const buttonText = isEditMode ? "ویرایش انتخاب واحد" : "تایید انتخاب";

  return (
    <form>
      {/* Course Selection Table */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <FormInputs
          configs={formConfigs()}
          initialValues={
            isEditMode && selectUnitData?.selectUnit ? inputValues : undefined
          }
          onInputsChange={(inputs) => {
            setInputValues((prev) => ({ ...prev, ...inputs }));
          }}
        />
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-900">
            درس‌های انتخاب شده
          </h2>
          <LessonSelect
            items={lessonsSelectItems}
            selectedLessons={seLectedLessonsIds}
            setSelectedLessons={setSelectedLessonsIds}
          />
        </div>
        {isLoading ? <Loading /> : showTable()}
        <div className="mt-6 w-full flex flex-row justify-between">
          <button type="button" className="button" onClick={handleReset}>
            بازنشانی
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
          انصراف
        </Link>
        <button
          type="submit"
          onClick={handleSubmit}
          className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {isSubmitting ? <Loading className="h-5! w-5!" /> : buttonText}
        </button>{" "}
      </div>
    </form>
  );
};
