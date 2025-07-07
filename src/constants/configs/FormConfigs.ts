import { Grade, LessonGrade } from "@prisma/client";
import {
  getFields,
  getLessonById,
  getLessons,
  getStudentById,
  getTeacherById,
  getTeachers,
  getGeneralByKey,
  getUserById, // Added for General entity
} from "@/lib/actions";
import { FormInputProps, FormPageProps, InputDataType } from "@/types/Props";
import {
  formTitle,
  formDescription,
  formButton,
  inputDefaultPlaceholder,
} from "@/constants/commonTexts";
import { gradeRender } from "@/lib/utils/dataRenderer";
import translateGeneralSettings from "@/lib/utils/translateGeneralSettings";
import { Settings } from "@/types/General";

export const lessonFormConfigGenerator = async (
  data?: Awaited<ReturnType<typeof getLessonById>>
): Promise<FormPageProps> => {
  const lesson = data?.lesson;

  const currentTachersId = lesson?.teacher?.id;
  const currentRequireLessonsId = lesson?.requiresLesson?.id;

  const teachers = await getTeachers({ limit: 500 });
  const lessons = await getLessons();
  const fields = await getFields({ limit: 500 });

  const teacherOptions = teachers?.teachers?.map((teacher) => ({
    id: teacher.id.toString(),
    name: `${teacher.FirstName} ${teacher.LastName}`,
  }));

  const lessonOptions = lessons?.lessons
    ?.filter((l) => l?.id !== lesson?.id)
    .map((lesson) => ({
      id: lesson.id.toString(),
      name: lesson.LessonName,
    }));

  const fieldOptions = fields?.fields?.map((field) => ({
    id: field.id.toString(),
    name: field.Name,
  }));

  const gradeOptions = Object.entries(LessonGrade).map(([key, value]) => ({
    id: key,
    name: gradeRender(value) || "_",
  }));

  return {
    title: formTitle("درس", !!lesson),
    description: formDescription("درس", !!lesson),
    useDefaultValues: true,
    addText: formButton("درس", !!lesson),

    inputs: [
      {
        title: "شماره درس",
        name: "LessonNumber",
        type: "number",
        placeholder: inputDefaultPlaceholder("شماره درس"),
        defaultValue: lesson?.LessonNumber?.toString(),
      },
      {
        title: "نام درس",
        name: "LessonName",
        type: "text",
        placeholder: inputDefaultPlaceholder("نام درس"),
        required: true,
        defaultValue: lesson?.LessonName,
      },
      {
        title: "تعداد واحد نظری",
        name: "TheoriUnit",
        type: "number",
        placeholder: inputDefaultPlaceholder("تعداد واحد نظری"),
        defaultValue: lesson?.TheoriUnit?.toString(),
        required: true,
      },
      {
        title: "تعداد واحد عملی",
        name: "PracticalUnit",
        type: "number",
        placeholder: inputDefaultPlaceholder("تعداد واحد عملی"),
        defaultValue: lesson?.PracticalUnit?.toString(),
        required: true,
      },
      {
        title: "مقطع درس",
        name: "Grade",
        type: "select",
        placeholder: inputDefaultPlaceholder("مقطع درس"),
        defaultValue: (lesson?.Grade || "").toString(),
        SelectButtonProps: {
          items: gradeOptions || [],
          singleSelect: true,
          initialSelectedItemId: lesson?.Grade?.toString(),
          title: "انتخاب مقطع",
        },
      },
      {
        title: "رشته درس",
        name: "fieldId",
        type: "select",
        placeholder: inputDefaultPlaceholder("رشته درس"),
        defaultValue: lesson?.fieldId?.toString(),
        dataType: InputDataType.bigint,
        SelectButtonProps: {
          items: fieldOptions || [],
          singleSelect: true,
          initialSelectedItemId: currentTachersId?.toString(),
          title: "انتخاب رشته",
        },
      },
      {
        title: "دبیر",
        name: "TeacherId",
        type: "select",
        placeholder: inputDefaultPlaceholder("نام دبیر"),
        dataType: InputDataType.bigint,
        defaultValue: lesson?.TeacherId?.toString(),
        SelectButtonProps: {
          items: teacherOptions || [],
          singleSelect: true,
          initialSelectedItemId: lesson?.TeacherId?.toString(),
          title: "انتخاب دبیر",
        },
      },
      {
        title: "شرط قبولی درس",
        name: "PassCondition",
        type: "number",
        placeholder: inputDefaultPlaceholder("شرط قبولی درس"),
        defaultValue: (lesson?.PassCondition || "").toString(),
      },
      {
        title: "ساعات نظری درس",
        name: "TheoriHours",
        type: "number",
        placeholder: inputDefaultPlaceholder("ساعات نظری درس"),
        defaultValue: (lesson?.TheoriHours || "").toString(),
      },
      {
        title: "ساعات عملی درس",
        name: "PracticalHours",
        type: "number",
        placeholder: inputDefaultPlaceholder("ساعات عملی درس"),
        defaultValue: (lesson?.PracticalHours || "").toString(),
      },
      {
        title: "درس پیش‌نیاز",
        name: "RequireLesson",
        type: "select",
        placeholder: inputDefaultPlaceholder("درس پیش‌نیاز"),
        defaultValue: (lesson?.requiresLesson?.id || "").toString(),
        SelectButtonProps: {
          items: lessonOptions || [],
          singleSelect: true,
          initialSelectedItemId: currentRequireLessonsId?.toString(),
          title: "انتخاب درس",
        },
      },
      {
        title: "واحد پیش‌نیاز",
        name: "RequireUnit",
        type: "number",
        placeholder: inputDefaultPlaceholder("واحد پیش‌نیاز"),
        defaultValue: (lesson?.RequireUnit || "").toString(),
        dataType: InputDataType.bigint,
      },
      {
        title: "معرف",
        name: "Introducer",
        type: "text",
        placeholder: inputDefaultPlaceholder("معرف"),
        defaultValue: (lesson?.Introducer || "").toString(),
        dataType: InputDataType.string,
      },
      {
        title: "تاریخ شروع اعتبار",
        name: "ValidFrom",
        type: "date",
        placeholder: inputDefaultPlaceholder("تاریخ شروع اعتبار"),
        defaultValue: lesson?.ValidFrom?.toISOString(),
      },
      {
        title: "تاریخ پایان اعتبار",
        name: "ValidTill",
        type: "date",
        placeholder: inputDefaultPlaceholder("تاریخ پایان اعتبار"),
        defaultValue: lesson?.ValidTill?.toISOString(),
      },
      {
        title: "قیمت هر واحد",
        name: "PricePerUnit",
        type: "price",
        dataType: InputDataType.bigint,
        placeholder: inputDefaultPlaceholder("قیمت هر واحد"),
        defaultValue: (lesson?.PricePerUnit || "").toString(),
      },
    ],
  };
};

export const studentFormConfigGenerator = async (
  data?: Awaited<ReturnType<typeof getStudentById>>
): Promise<FormPageProps> => {
  const student = data?.student;

  const fields = await getFields({ limit: 500 });

  const fieldOptions = fields?.fields?.map((field) => ({
    id: field.id.toString(),
    name: field.Name,
  }));

  const gradeOptions = Object.entries(Grade).map(([key, value]) => ({
    id: key,
    name: gradeRender(value) || "_",
  }));

  return {
    title: formTitle("دانش‌آموز", !!student),
    description: formDescription("دانش‌آموز", !!student),
    useDefaultValues: true,
    addText: formButton("دانش‌آموز", !!student),
    inputs: [
      {
        title: "نام",
        name: "FirstName",
        type: "text",
        placeholder: inputDefaultPlaceholder("نام"),
        required: true,
        defaultValue: student?.FirstName,
      },
      {
        title: "نام خانوادگی",
        name: "LastName",
        type: "text",
        placeholder: inputDefaultPlaceholder("نام خانوادگی"),
        required: true,
        defaultValue: student?.LastName,
      },
      {
        title: "کد ملی",
        name: "NationalCode",
        type: "text",
        placeholder: inputDefaultPlaceholder("کد ملی"),
        required: true,
        defaultValue: student?.NationalCode,
      },
      {
        title: "نام پدر",
        name: "Father",
        type: "text",
        placeholder: inputDefaultPlaceholder("نام پدر"),
        defaultValue: student?.Father || "",
      },
      {
        title: "تاریخ تولد",
        name: "Birth",
        type: "date",
        placeholder: inputDefaultPlaceholder("تاریخ تولد"),
        defaultValue: student?.Birth?.toISOString(),
      },
      {
        title: "آدرس",
        name: "Address",
        type: "text",
        placeholder: inputDefaultPlaceholder("آدرس"),
        defaultValue: student?.Address || "",
      },
      {
        title: "شماره منزل",
        name: "HomeNumber",
        type: "text",
        placeholder: inputDefaultPlaceholder("شماره منزل"),
        defaultValue: student?.HomeNumber || "",
      },
      {
        title: "شماره تلفن",
        name: "PhoneNumber",
        type: "text",
        placeholder: inputDefaultPlaceholder("شماره تلفن"),
        defaultValue: student?.PhoneNumber || "",
      },
      {
        title: "رشته",
        name: "fieldId",
        type: "select",
        dataType: InputDataType.bigint,
        placeholder: inputDefaultPlaceholder("رشته"),
        required: true,
        defaultValue: student?.fieldId?.toString(),
        SelectButtonProps: {
          items: fieldOptions || [],
          singleSelect: true,
          initialSelectedItemId: student?.fieldId?.toString(),
          title: "انتخاب رشته",
          required: true,
        },
      },
      {
        title: "مقطع",
        name: "Grade",
        type: "select",
        placeholder: inputDefaultPlaceholder("مقطع"),
        required: true,
        defaultValue: student?.Grade?.toString(),
        SelectButtonProps: {
          items: gradeOptions || [],
          singleSelect: true,
          initialSelectedItemId: student?.Grade?.toString(),
          title: "انتخاب مقطع",
          required: true,
        },
      },
      {
        title: "جنسیت",
        name: "Gender",
        type: "select",
        placeholder: inputDefaultPlaceholder("جنسیت"),
        required: true,
        defaultValue:
          student?.Gender !== undefined ? student.Gender.toString() : "true",
        SelectButtonProps: {
          items: [
            { id: "true", name: "مرد" },
            { id: "false", name: "زن" },
          ],
          singleSelect: true,
          initialSelectedItemId:
            student?.Gender !== undefined ? student.Gender.toString() : "true",
          title: "انتخاب جنسیت",
          required: true,
        },
      },
    ],
  };
};

export const fieldFormConfigGenerator = async (data?: {
  field?: { id?: bigint; Name?: string; FixedFee?: bigint | null };
}): Promise<FormPageProps> => {
  const field = data?.field;
  return {
    title: formTitle("رشته", !!field),
    description: formDescription("رشته", !!field),
    useDefaultValues: true,
    addText: formButton("رشته", !!field),
    inputs: [
      {
        title: "نام رشته",
        name: "Name",
        type: "text",
        placeholder: inputDefaultPlaceholder("نام رشته"),
        required: true,
        defaultValue: field?.Name || "",
      },
      // {
      //   title: "هزینه ثابت",
      //   name: "FixedFee",
      //   type: "number",
      //   dataType: InputDataType.bigint,
      //   placeholder: inputDefaultPlaceholder("هزینه ثابت"),
      //   defaultValue:
      //     field?.FixedFee !== undefined && field?.FixedFee !== null
      //       ? field.FixedFee.toString()
      //       : "0",
      // },
    ],
  };
};

export const teacherFormConfigGenerator = async (
  data?: Awaited<ReturnType<typeof getTeacherById>>
): Promise<FormPageProps> => {
  const teacher = data?.teacher;

  const fields = await getFields({ limit: 500 });

  const fieldOptions = fields?.fields?.map((field) => ({
    id: field.id.toString(),
    name: field.Name,
  }));

  return {
    title: formTitle("دبیر", !!teacher),
    description: formDescription("دبیر", !!teacher),
    useDefaultValues: true,
    addText: formButton("دبیر", !!teacher),
    inputs: [
      {
        title: "نام",
        name: "FirstName",
        type: "text",
        placeholder: inputDefaultPlaceholder("نام"),
        required: true,
        defaultValue: teacher?.FirstName,
      },
      {
        title: "نام خانوادگی",
        name: "LastName",
        type: "text",
        placeholder: inputDefaultPlaceholder("نام خانوادگی"),
        required: true,
        defaultValue: teacher?.LastName,
      },
      {
        title: "کد ملی",
        name: "NationalCode",
        type: "text",
        placeholder: inputDefaultPlaceholder("کد ملی"),
        required: true,
        defaultValue: teacher?.NationalCode,
      },
      {
        title: "شماره تلفن",
        name: "PhoneNumber",
        type: "text",
        placeholder: inputDefaultPlaceholder("شماره تلفن"),
        required: true,
        defaultValue: teacher?.PhoneNumber || "",
      },
      {
        title: "رشته",
        name: "fieldId",
        type: "select",
        dataType: InputDataType.bigint,
        placeholder: inputDefaultPlaceholder("رشته"),
        defaultValue: teacher?.fieldId?.toString(),
        SelectButtonProps: {
          items: fieldOptions || [],
          singleSelect: true,
          initialSelectedItemId: teacher?.fieldId?.toString(),
          title: "انتخاب رشته",
        },
      },
      {
        title: "تاریخ تولد",
        name: "Birth",
        type: "date",
        placeholder: inputDefaultPlaceholder("تاریخ تولد"),
        defaultValue: teacher?.Birth?.toISOString(),
      },
      {
        title: "جنسیت",
        name: "Gender",
        type: "select",
        placeholder: inputDefaultPlaceholder("جنسیت"),
        required: true,
        defaultValue:
          teacher?.Gender !== undefined ? teacher.Gender.toString() : "true",
        SelectButtonProps: {
          items: [
            { id: "true", name: "مرد" },
            { id: "false", name: "زن" },
          ],
          singleSelect: true,
          initialSelectedItemId:
            teacher?.Gender !== undefined ? teacher.Gender.toString() : "true",
          title: "انتخاب جنسیت",
          required: true,
        },
      },
    ],
  };
};

// Form config generator for General entity
export const generalFormConfigGenerator = async (
  data?: Awaited<ReturnType<typeof getGeneralByKey>>
): Promise<FormPageProps> => {
  const general = data?.general;

  return {
    title: formTitle(
      !!general
        ? translateGeneralSettings(general.Key as Settings)
        : "تنظیم عمومی",
      !!general
    ),
    description: formDescription("تنظیم عمومی", !!general),
    useDefaultValues: true,

    addText: formButton(
      !!general
        ? translateGeneralSettings(general.Key as Settings)
        : "تنظیم عمومی",
      !!general
    ),
    inputs: [
      {
        title: "کلید",
        name: "Key",
        type: "text",
        placeholder: inputDefaultPlaceholder("کلید"),
        required: true,
        defaultValue: general?.Key,
        // Disable Key field when editing, as it's the primary key
        disabled: !!general,
      },
      {
        title: "عنوان",
        name: "Title",
        type: "text",
        placeholder: inputDefaultPlaceholder("عنوان"),
        defaultValue: general?.Title || "",
      },
      {
        title: "مقدار",
        name: "Value",
        type: "price",
        placeholder: inputDefaultPlaceholder("مقدار"),
        required: true,
        defaultValue: general?.Value,
      },
      {
        title: "توضیحات",
        name: "Description",
        type: "text",
        placeholder: inputDefaultPlaceholder("توضیحات"),
        defaultValue: general?.Description || "",
      },
    ],
  };
};

export const userFormConfigGenerator = async (
  data?: Awaited<ReturnType<typeof getUserById>>
): Promise<FormPageProps> => {
  const user = data?.user;

  return {
    title: formTitle("کاربر", !!user),
    description: formDescription("کاربر", !!user),
    useDefaultValues: true,
    addText: formButton("کاربر", !!user),
    inputs: [
      {
        title: "نام کاربری",
        name: "UserName",
        type: "text",
        placeholder: inputDefaultPlaceholder("نام کاربری"),
        required: true,
        defaultValue: user?.UserName,
        disabled: !!user,
      },
      {
        title: "رمز عبور",
        name: "Password",
        type: "password",
        placeholder: inputDefaultPlaceholder("رمز عبور"),
        required: true,
        defaultValue: "", // Password should not be pre-filled
      },
      {
        title: "تایید رمز عبور",
        name: "ConfirmPassword",
        type: "password",
        placeholder: inputDefaultPlaceholder("تایید رمز عبور"),
        required: true,
        defaultValue: "", // Confirm Password should not be pre-filled
      },
      // {
      //   title: "نوع کاربر",
      //   name: "Type",
      //   type: "select",
      //   placeholder: inputDefaultPlaceholder("نوع کاربر"),
      //   defaultValue: user?.Type?.toString(),
      //   SelectButtonProps: {
      //     items: [
      //       { id: "admin", name: "مدیر" },
      //       { id: "user", name: "کاربر" },
      //     ],
      //     singleSelect: true,
      //     initialSelectedItemId: user?.Type?.toString(),
      //     title: "انتخاب نوع کاربر",
      //   },
      // },
    ],
  };
};
