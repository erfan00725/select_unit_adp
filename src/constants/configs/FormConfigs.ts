import { Grade, LessonGrade } from "@/generated/prisma";
import {
  getFields,
  getLessonById,
  getLessons,
  getStudentById,
  getTeacherById,
  getTeachers,
} from "@/lib/actions";
import { FormInputProps, FormPageProps, InputDataType } from "@/types/Props";
import {
  formTitle,
  formDescription,
  formButton,
  inputDefaultPlaceholder,
} from "@/constants/commonTexts";

export const lessonFormConfigGenerator = async (
  data?: Awaited<ReturnType<typeof getLessonById>>
): Promise<FormPageProps> => {
  const lesson = data?.lesson;

  const currentTachersId = lesson?.teacher?.id;
  const currentRequireLessonsId = lesson?.requiresLesson?.id;

  const teachers = await getTeachers();
  const lessons = await getLessons();
  const fields = await getFields();

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
    name: value,
  }));

  return {
    title: formTitle("درس", !!lesson),
    description: formDescription("درس", !!lesson),
    useDefaultValues: true,
    addText: formButton("درس", !!lesson),

    inputs: [
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
        title: "استاد",
        name: "TeacherId",
        type: "select",
        placeholder: inputDefaultPlaceholder("نام استاد"),
        dataType: InputDataType.bigint,
        defaultValue: lesson?.TeacherId?.toString(),
        SelectButtonProps: {
          items: teacherOptions || [],
          singleSelect: true,
          initialSelectedItemId: lesson?.TeacherId?.toString(),
          title: "انتخاب استاد",
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
        title: "کد اطلاع‌رسانی",
        name: "NotifCode",
        type: "number",
        placeholder: inputDefaultPlaceholder("کد اطلاع‌رسانی"),
        defaultValue: (lesson?.NotifCode || "").toString(),
        dataType: InputDataType.bigint,
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
        type: "number",
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

  const fields = await getFields();

  const fieldOptions = fields?.fields?.map((field) => ({
    id: field.id.toString(),
    name: field.Name,
  }));

  const gradeOptions = Object.entries(Grade).map(([key, value]) => ({
    id: key,
    name: value,
  }));

  return {
    title: formTitle("Student", !!student),
    description: formDescription("Student", !!student),
    useDefaultValues: true,
    addText: formButton("Student", !!student),
    inputs: [
      {
        title: "First Name",
        name: "FirstName",
        type: "text",
        placeholder: inputDefaultPlaceholder("first name"),
        required: true,
        defaultValue: student?.FirstName,
      },
      {
        title: "Last Name",
        name: "LastName",
        type: "text",
        placeholder: inputDefaultPlaceholder("last name"),
        required: true,
        defaultValue: student?.LastName,
      },
      {
        title: "National Code",
        name: "NationalCode",
        type: "text",
        placeholder: inputDefaultPlaceholder("national code"),
        required: true,
        defaultValue: student?.NationalCode,
      },
      {
        title: "Father's Name",
        name: "Father",
        type: "text",
        placeholder: inputDefaultPlaceholder("father's name"),
        defaultValue: student?.Father || "",
      },
      {
        title: "Birth Date",
        name: "Birth",
        type: "date",
        placeholder: inputDefaultPlaceholder("birth date"),
        defaultValue: student?.Birth?.toISOString(),
      },
      {
        title: "Address",
        name: "Address",
        type: "text",
        placeholder: inputDefaultPlaceholder("address"),
        defaultValue: student?.Address || "",
      },
      {
        title: "Home Number",
        name: "HomeNumber",
        type: "text",
        placeholder: inputDefaultPlaceholder("home number"),
        defaultValue: student?.HomeNumber || "",
      },
      {
        title: "Phone Number",
        name: "PhoneNumber",
        type: "text",
        placeholder: inputDefaultPlaceholder("phone number"),
        defaultValue: student?.PhoneNumber || "",
      },
      {
        title: "Field",
        name: "fieldId",
        type: "select",
        dataType: InputDataType.bigint,
        placeholder: inputDefaultPlaceholder("field"),
        required: true,
        defaultValue: student?.fieldId?.toString(),
        SelectButtonProps: {
          items: fieldOptions || [],
          singleSelect: true,
          initialSelectedItemId: student?.fieldId?.toString(),
          title: "Select Field",
          required: true,
        },
      },
      {
        title: "Grade",
        name: "Grade",
        type: "select",
        placeholder: inputDefaultPlaceholder("grade"),
        required: true,
        defaultValue: student?.Grade?.toString(),
        SelectButtonProps: {
          items: gradeOptions || [],
          singleSelect: true,
          initialSelectedItemId: student?.Grade?.toString(),
          title: "Select Grade",
          required: true,
        },
      },
      {
        title: "Gender",
        name: "Gender",
        type: "select",
        placeholder: inputDefaultPlaceholder("gender"),
        required: true,
        defaultValue:
          student?.Gender !== undefined ? student.Gender.toString() : "true",
        SelectButtonProps: {
          items: [
            { id: "true", name: "Male" },
            { id: "false", name: "Female" },
          ],
          singleSelect: true,
          initialSelectedItemId:
            student?.Gender !== undefined ? student.Gender.toString() : "true",
          title: "Select Gender",
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
    title: formTitle("Field", !!field),
    description: formDescription("Field", !!field),
    useDefaultValues: true,
    addText: formButton("Field", !!field),
    inputs: [
      {
        title: "Field Name",
        name: "Name",
        type: "text",
        placeholder: inputDefaultPlaceholder("field name"),
        required: true,
        defaultValue: field?.Name || "",
      },
      {
        title: "Fixed Fee",
        name: "FixedFee",
        type: "number",
        dataType: InputDataType.bigint,
        placeholder: inputDefaultPlaceholder("fixed fee"),
        defaultValue:
          field?.FixedFee !== undefined && field?.FixedFee !== null
            ? field.FixedFee.toString()
            : "0",
      },
    ],
  };
};

export const teacherFormConfigGenerator = async (
  data?: Awaited<ReturnType<typeof getTeacherById>>
): Promise<FormPageProps> => {
  const teacher = data?.teacher;

  const fields = await getFields();

  const fieldOptions = fields?.fields?.map((field) => ({
    id: field.id.toString(),
    name: field.Name,
  }));

  return {
    title: formTitle("Teacher", !!teacher),
    description: formDescription("Teacher", !!teacher),
    useDefaultValues: true,
    addText: formButton("Teacher", !!teacher),
    inputs: [
      {
        title: "First Name",
        name: "FirstName",
        type: "text",
        placeholder: inputDefaultPlaceholder("first name"),
        required: true,
        defaultValue: teacher?.FirstName,
      },
      {
        title: "Last Name",
        name: "LastName",
        type: "text",
        placeholder: inputDefaultPlaceholder("last name"),
        required: true,
        defaultValue: teacher?.LastName,
      },
      {
        title: "National Code",
        name: "NationalCode",
        type: "text",
        placeholder: inputDefaultPlaceholder("national code"),
        required: true,
        defaultValue: teacher?.NationalCode,
      },
      {
        title: "Phone Number",
        name: "PhoneNumber",
        type: "text",
        placeholder: inputDefaultPlaceholder("phone number"),
        required: true,
        defaultValue: teacher?.PhoneNumber || "",
      },
      {
        title: "Field",
        name: "fieldId",
        type: "select",
        dataType: InputDataType.bigint,
        placeholder: inputDefaultPlaceholder("field"),
        defaultValue: teacher?.fieldId?.toString(),
        SelectButtonProps: {
          items: fieldOptions || [],
          singleSelect: true,
          initialSelectedItemId: teacher?.fieldId?.toString(),
          title: "Select Field",
        },
      },
      {
        title: "Birth Date",
        name: "Birth",
        type: "date",
        placeholder: inputDefaultPlaceholder("birth date"),
        defaultValue: teacher?.Birth?.toISOString(),
      },
      {
        title: "Gender",
        name: "Gender",
        type: "select",
        placeholder: inputDefaultPlaceholder("gender"),
        required: true,
        defaultValue:
          teacher?.Gender !== undefined ? teacher.Gender.toString() : "true",
        SelectButtonProps: {
          items: [
            { id: "true", name: "Male" },
            { id: "false", name: "Female" },
          ],
          singleSelect: true,
          initialSelectedItemId:
            teacher?.Gender !== undefined ? teacher.Gender.toString() : "true",
          title: "Select Gender",
          required: true,
        },
      },
    ],
  };
};

export const unitSelectFormConfigGenerator = (): FormPageProps => {
  const inputs: FormInputProps[] = [
    {
      title: "Unit",
      name: "Unit",
      type: "number",
      placeholder: inputDefaultPlaceholder("unit"),
      required: true,
    },
  ];

  return {
    title: formTitle("Unit Select"),
    inputs,
  };
};
