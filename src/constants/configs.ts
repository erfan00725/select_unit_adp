import { Grade, LessonGrade } from "@/generated/prisma";
import {
  getFields,
  getLessonById,
  getLessons,
  getStudentById,
  getTeachers,
} from "@/lib/actions";
import { FormPageProps, InputDataType } from "@/types/Props";

export const NavBarConfigs = [
  {
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    label: "Course Selection",
    href: "/dashboard/select-unit",
  },
  {
    label: "Student Management",
    href: "/dashboard/students",
  },
  {
    label: "Lessons Management",
    href: "/dashboard/lessons",
  },
];

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
    title: "Add New Course",
    description: "Please fill in the course details below",
    useDefaultValues: true,
    addText: "Edit Lesson",

    inputs: [
      {
        title: "Lesson Name",
        name: "LessonName",
        type: "text",
        placeholder: "Enter lesson name",
        required: true,
        defaultValue: lesson?.LessonName,
      },
      {
        title: "Lesson Unit",
        name: "Unit",
        type: "number",
        placeholder: "Enter lesson unit",
        defaultValue: lesson?.Unit.toString(),
        required: true,
      },
      {
        title: "Lesson Grade",
        name: "Grade",
        type: "select",
        placeholder: "Enter lesson grade",
        defaultValue: (lesson?.Grade || "").toString(),
        SelectButtonProps: {
          items: gradeOptions || [],
          singleSelect: true,
          initialSelectedItemId: lesson?.Grade?.toString(),
          title: "Select Grade",
        },
      },
      {
        title: "Lesson Field",
        name: "fieldId",
        type: "select",
        placeholder: "Enter lesson field",
        defaultValue: lesson?.fieldId?.toString(),
        dataType: InputDataType.bigint,
        SelectButtonProps: {
          items: fieldOptions || [],
          singleSelect: true,
          initialSelectedItemId: currentTachersId?.toString(),
          title: "Select Field",
        },
      },
      {
        title: "Teacher",
        name: "TeacherId",
        type: "select",
        placeholder: "Enter teacher name",
        dataType: InputDataType.bigint,
        defaultValue: lesson?.TeacherId?.toString(),
        SelectButtonProps: {
          items: teacherOptions || [],
          singleSelect: true,
          initialSelectedItemId: lesson?.TeacherId?.toString(),
          title: "Select Field",
        },
      },
      {
        title: "Lesson Pass Condition",
        name: "PassCondition",
        type: "number",
        placeholder: "Enter lesson pass condition",
        defaultValue: (lesson?.PassCondition || "").toString(),
      },
      {
        title: "Lesson Theori Hours",
        name: "TheoriHours",
        type: "number",
        placeholder: "Enter lesson theori hours",
        defaultValue: (lesson?.TheoriHours || "").toString(),
      },
      {
        title: "Lesson Practical Hours",
        name: "PracticalHours",
        type: "number",
        placeholder: "Enter lesson practical hours",
        defaultValue: (lesson?.PracticalHours || "").toString(),
      },
      {
        title: "Required Lesson",
        name: "RequireLesson",
        type: "select",
        placeholder: "Enter required lesson",
        defaultValue: (lesson?.requiresLesson?.id || "").toString(),
        SelectButtonProps: {
          items: lessonOptions || [],
          singleSelect: true,
          initialSelectedItemId: currentRequireLessonsId?.toString(),
          title: "Select Lesson",
        },
      },
      {
        title: "Required Unit",
        name: "RequireUnit",
        type: "number",
        placeholder: "Enter required unit",
        defaultValue: (lesson?.RequireUnit || "").toString(),
        dataType: InputDataType.bigint,
      },
      {
        title: "Notif Code",
        name: "NotifCode",
        type: "number",
        placeholder: "Enter notif code",
        defaultValue: (lesson?.NotifCode || "").toString(),
        dataType: InputDataType.bigint,
      },
      {
        title: "Valid From",
        name: "ValidFrom",
        type: "date",
        placeholder: "Enter valid from",
        defaultValue: lesson?.ValidFrom?.toISOString(),
      },
      {
        title: "Valid Until",
        name: "ValidTill",
        type: "date",
        placeholder: "Enter valid until",
        defaultValue: lesson?.ValidTill?.toISOString(),
      },
      {
        title: "Price Per Unit",
        name: "PricePerUnit",
        type: "number",
        dataType: InputDataType.bigint,
        placeholder: "Enter price per unit",
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
    title: "Add New Student",
    description: "Please fill in the student details below",
    useDefaultValues: true,
    addText: student ? "Update Student" : "Add Student",
    inputs: [
      {
        title: "First Name",
        name: "FirstName",
        type: "text",
        placeholder: "Enter first name",
        required: true,
        defaultValue: student?.FirstName,
      },
      {
        title: "Last Name",
        name: "LastName",
        type: "text",
        placeholder: "Enter last name",
        required: true,
        defaultValue: student?.LastName,
      },
      {
        title: "National Code",
        name: "NationalCode",
        type: "text",
        placeholder: "Enter national code",
        required: true,
        defaultValue: student?.NationalCode,
      },
      {
        title: "Father's Name",
        name: "Father",
        type: "text",
        placeholder: "Enter father's name",
        defaultValue: student?.Father || "",
      },
      {
        title: "Birth Date",
        name: "Birth",
        type: "date",
        placeholder: "Enter birth date",
        defaultValue: student?.Birth?.toISOString(),
      },
      {
        title: "Address",
        name: "Address",
        type: "text",
        placeholder: "Enter address",
        defaultValue: student?.Address || "",
      },
      {
        title: "Home Number",
        name: "HomeNumber",
        type: "text",
        placeholder: "Enter home number",
        defaultValue: student?.HomeNumber || "",
      },
      {
        title: "Phone Number",
        name: "PhoneNumber",
        type: "text",
        placeholder: "Enter phone number",
        defaultValue: student?.PhoneNumber || "",
      },
      {
        title: "Field",
        name: "fieldId",
        type: "select",
        dataType: InputDataType.bigint,
        placeholder: "Select field",
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
        placeholder: "Select grade",
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
        placeholder: "Select gender",
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
