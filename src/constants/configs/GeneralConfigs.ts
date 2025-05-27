import getAcademicYearJ from "@/lib/utils/getAcademicYearJ";
import { urls } from "../urls";
import { PaymentMethods, Period } from "@prisma/client";
import { SelectUnitFormConfig } from "@/types/Props";
import { Settings } from "@/types/General";

export const NavBarConfigs = [
  {
    label: "داشبورد",
    href: "/dashboard",
  },
  {
    label: "مدیریت دانش‌آموزان",
    href: urls.students,
  },
  {
    label: "مدیریت دروس",
    href: urls.lessons,
  },
  {
    label: "مدیریت دبیران",
    href: urls.teachers,
  },
  {
    label: "مدیریت رشته‌ها",
    href: urls.fields,
  },
  {
    label: "مدیریت انتخاب واحد‌ها",
    href: urls.selectUnit,
  },
  {
    label: "تنظیمات عمومی",
    href: urls.generals,
  },
];

export const selectUnitFormConfigs = (): SelectUnitFormConfig[] => {
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
      type: "price" as const,
      name: "discount",
      canBeDisabled: true,
    },
    {
      id: "SU_ExtraFee",
      label: "هزینه اضافی",
      type: "price" as const,
      name: "extraFee",
      canBeDisabled: true,
    },
    {
      id: "SU_FixedFee",
      label: "هزینه ثابت",
      type: "price" as const,
      name: Settings.FixedFee,
      canBeDisabled: true,
    },
    // Add new form configurations
    {
      id: "SU_CertificateFee",
      label: "هزینه مدرک",
      type: "price" as const,
      name: Settings.CertificateFee,
      canBeDisabled: true,
    },
    {
      id: "SU_ExtraClassFee",
      label: "هزینه کلاس اضافی",
      type: "price" as const,
      name: Settings.ExtraClassFee,
      canBeDisabled: true,
    },
    {
      id: "SU_BooksFee",
      label: "هزینه کتاب",
      type: "price" as const,
      name: Settings.BooksFee,
      canBeDisabled: true,
    },
    {
      id: "SU_Payed",
      label: "پرداخت شده؟",
      type: "checkbox" as const,
      name: "paid",
    },
    {
      id: "SU_PaymentMethod",
      label: "روش پرداخت",
      type: "select" as const,
      name: "paymentMethod",
      options: [
        { value: PaymentMethods.cash, label: "نقدی" },
        { value: PaymentMethods.card, label: "کارت" },
        { value: PaymentMethods.check, label: "چک" },
        { value: PaymentMethods.deposit, label: "انتقال" },
      ],
      canBeDisabled: true,
    },
    {
      id: "SU_PaymentDescription",
      label: "توضیحات پرداخت",
      type: "textarea" as const,
      name: "paymentDescription",
      canBeDisabled: true,
    },
    {
      id: "SU_PaymentDate",
      label: "تاریخ پرداخت",
      type: "date" as const,
      name: "paymentDate",
      canBeDisabled: true,
    },
  ];
};
