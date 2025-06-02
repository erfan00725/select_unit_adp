"use client";
import React, { useEffect, useState } from "react";
import SelectUnitTable from "../../selectUnit/SelectUnitTable";
import { LessonSelect } from "../../selectUnit/LessonSelect";
import Link from "next/link";
import { urls } from "@/constants/urls";
import { SelectItem } from "../../Form/SelectItems";
import { ActionReturnType, Settings } from "@/types/General";
import {
  bulkCreateSelectUnits,
  bulkEditSelectUnits,
  getFeeSettings,
  getLessons,
  getLessonsByIds,
  getSelectUnitById,
} from "@/lib/actions";
import { FormInputs } from "../../Form/FomInputs";
import Loading from "@/components/common/Loading";
import { toast } from "react-toastify";
import { validateSelectUnitSafe } from "@/lib/validations/selectUnit";
import { ZodError } from "zod";
import { priceFormatter } from "@/lib/utils/priceFormatter";
import { useRouter } from "next/navigation";
import { selectUnitFormConfigs } from "@/constants/configs/GeneralConfigs";
import { InputValueType } from "@/types/Props";
import { Lesson, PaymentMethods } from "@prisma/client";
import calcTotalUnit from "@/lib/utils/calcTotalUnit";
import { castBigInt, returnActiveValue } from "@/lib/utils/castBigInt";

type Props = {
  studnetId: string;
  lessons: ActionReturnType<typeof getLessons>;
  defaultPrice: number;
  selectUnitData?: ActionReturnType<typeof getSelectUnitById>; // Data for edit mode
  isEditMode?: boolean; // Flag to indicate edit mode
};

export const SelectUnitForm = ({
  studnetId,
  lessons,
  selectUnitData,
  isEditMode = false,
  defaultPrice,
}: Props) => {
  const router = useRouter();
  // Initialize input values with data from selectUnitData if in edit mode
  const [inputValues, setInputValues] = useState<InputValueType>({});
  const [initialSettings, setInitialSettings] = useState<InputValueType>({});
  const [isLoadingSettings, setIsLoadingSettings] = useState(true);

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
      setInitialSettings({
        year: { value: selectUnit.Year, active: !!selectUnit.Year },
        period: { value: selectUnit.Period, active: !!selectUnit.Period },
        fixedFee: {
          value: Number(selectUnit.FixedFee) || 0,
          active: !!selectUnit.FixedFee,
        },
        // Add initialization for new fees
        [Settings.CertificateFee]: {
          value: Number(selectUnit.CertificateFee) || 0,
          active: !!selectUnit.CertificateFee,
        },
        [Settings.ExtraClassFee]: {
          value: Number(selectUnit.ExtraClassFee) || 0,
          active: !!selectUnit.ExtraClassFee,
        },
        [Settings.BooksFee]: {
          value: Number(selectUnit.BooksFee) || 0,
          active: !!selectUnit.BooksFee,
        },
        discount: {
          value: Number(selectUnit.Discount) || 0,
          active: !!selectUnit.Discount,
        },
        paid: {
          value: selectUnit.Paid ? 1 : 0,
          active: true,
        },
        paymentMethod: {
          value: selectUnit.PaymentMethod || "",
          active: !!selectUnit.PaymentMethod,
        },
        paymentDescription: {
          value: selectUnit.PaymentDescription || "",
          active: !!selectUnit.PaymentDescription,
        },
        paymentDate: {
          value: selectUnit.PaymentDate?.toString() || "",
          active: !!selectUnit.PaymentDate,
        },
        [Settings.OtherFee]: {
          value: Number(selectUnit.OtherFee) || 0,
          active: !!selectUnit.OtherFee,
        },
        [Settings.InsuranceFee]: {
          value: Number(selectUnit.InsuranceFee) || 0,
          active: !!selectUnit.InsuranceFee,
        },
        [Settings.SkillRegistrationFee]: {
          value: Number(selectUnit.SkillRegistrationFee) || 0,
          active: !!selectUnit.SkillRegistrationFee,
        },
      });
      setIsLoadingSettings(false);
    } else {
      getFeeSettings()
        .then((res) => {
          Object.entries(res.settings).forEach(([key, value]) => {
            setInitialSettings((prev) => ({
              ...prev,
              [key]: {
                value: value,
                active: true,
              },
            }));
          });
        })
        .finally(() => setIsLoadingSettings(false));
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
        const price = Number(lesson?.PricePerUnit) || defaultPrice;
        const a = Number(lesson?.TheoriUnit) + Number(lesson?.PracticalUnit);
        return (
          total + price * (a || 1) // if a is 0, use 1
        );
      }, 0) || 0; // Ensure lessonsPrice is a number, defaulting to 0

    const additionalFees =
      getFee(inputValues.extraFee) +
      getFee(inputValues.fixedFee) +
      getFee(inputValues.certificateFee) +
      getFee(inputValues.extraClassFee) +
      getFee(inputValues.booksFee) -
      getFee(inputValues.discount);

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
      toast.error("لطفاً درس‌ها را انتخاب کنید یا فرم را تکمیل نمایید");
      return;
    }
    setIsSubmitting(true);

    const lessons = seLectedLessonsIds.map((id) => castBigInt(id));
    const bigintZero = BigInt(0);
    const dataToValidate = {
      StudentId: castBigInt(studnetId),
      Period: inputValues.period?.value,
      Year: inputValues.year?.value,
      Lessons: lessons,
      OtherFee: returnActiveValue(inputValues.otherFee, "bigint") || bigintZero,
      FixedFee: returnActiveValue(inputValues.fixedFee, "bigint") || bigintZero,
      CertificateFee:
        returnActiveValue(inputValues.certificateFee, "bigint") || bigintZero,
      ExtraClassFee:
        returnActiveValue(inputValues.extraClassFee, "bigint") || bigintZero,
      BooksFee: returnActiveValue(inputValues.booksFee, "bigint") || bigintZero,
      Discount: returnActiveValue(inputValues.discount, "bigint") || bigintZero,
      InsuranceFee:
        returnActiveValue(inputValues.insuranceFee, "bigint") || bigintZero,
      SkillRegistrationFee:
        returnActiveValue(inputValues.skillRegistrationFee, "bigint") ||
        bigintZero,
      Paid: !!inputValues.paid?.value,
      PaymentMethod: returnActiveValue(inputValues.paymentMethod),
      PaymentDescription:
        returnActiveValue(inputValues.paymentDescription) || "",
      PaymentDate: returnActiveValue(inputValues.paymentDate),
      // Conditionally add Lesson if lessons exist, as schema requires it but it might be empty before validation catch
      ...(lessons.length > 0 ? { Lesson: lessons[0] } : {}),
    };

    const {
      success,
      data: validateData,
      error,
    } = validateSelectUnitSafe(dataToValidate);

    if (!success || error || !validateData) {
      toast.error((error as ZodError).errors[0].message);
      setIsSubmitting(false); // Set submitting to false on validation error
      return;
    }

    const action = isEditMode ? "ویرایش" : "انتخاب";

    if (isEditMode && selectUnitData?.selectUnit) {
      const { Lessons: selectedLessonsIds, ...rest } = validateData;
      // Use bulkEditSelectUnits for edit mode
      bulkEditSelectUnits(
        selectUnitData.selectUnit.id,
        {
          ...rest,
          OtherFee: validateData.OtherFee || bigintZero,
          CertificateFee: validateData.CertificateFee || bigintZero,
          ExtraClassFee: validateData.ExtraClassFee || bigintZero,
          BooksFee: validateData.BooksFee || bigintZero,
          InsuranceFee: validateData.InsuranceFee || bigintZero,
          SkillRegistrationFee: validateData.SkillRegistrationFee || bigintZero,
          Discount: validateData.Discount || bigintZero,
          Paid: !!validateData.Paid,
          PaymentMethod:
            (validateData.PaymentMethod as PaymentMethods) || undefined,
          PaymentDescription: validateData.PaymentDescription || "",
          PaymentDate: validateData.PaymentDate
            ? new Date(validateData.PaymentDate)
            : undefined,
        },
        validateData.Lessons
      )
        .then((res) => {
          if (res.error) {
            toast.error((res.error as string) || "مشکلی پیش آمده است");
            return;
          }
          toast.success(`درس‌ها با موفقیت ${action} شدند`);
          router.back();
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
          OtherFee: validateData.OtherFee || undefined,
          FixedFee: validateData.FixedFee,
          CertificateFee: validateData.CertificateFee || undefined,
          ExtraClassFee: validateData.ExtraClassFee || undefined,
          BooksFee: validateData.BooksFee || undefined,
          InsuranceFee: validateData.InsuranceFee || undefined,
          SkillRegistrationFee: validateData.SkillRegistrationFee || undefined,
          Discount: validateData.Discount || undefined,
          Paid: !!validateData.Paid,
          PaymentMethod:
            (validateData.PaymentMethod as PaymentMethods) || undefined,
          PaymentDescription: validateData.PaymentDescription || undefined,
          PaymentDate: validateData.PaymentDate
            ? new Date(validateData.PaymentDate)
            : undefined,
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
        defaultPrice={defaultPrice}
      />
    ) : (
      <h3 className="w-full text-center text-gray-500">درسی انتخاب نشده است</h3>
    );
  };

  // State to track which inputs are active

  const buttonText = isEditMode ? "ویرایش انتخاب واحد" : "تایید انتخاب";

  return (
    <form>
      {/* Course Selection Table */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        {isLoadingSettings ? (
          <Loading />
        ) : (
          <FormInputs
            configs={selectUnitFormConfigs()}
            initialValues={initialSettings}
            onInputsChange={(inputs) => {
              setInputValues((prev) => ({ ...prev, ...inputs }));
            }}
          />
        )}
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
          {/* total unit */}
          <p className="text-lg font-bold">
            {calcTotalUnit((selectedLessons?.lessons || []) as Lesson[])} :جمع
            واحد‌ها
          </p>
          {/* Total Price */}
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
