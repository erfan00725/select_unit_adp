import { LessonGrade } from "@/generated/prisma";
import {
  getFields,
  getLessonById,
  getLessons,
  getTeachers,
} from "@/lib/actions";
import { FormPageProps } from "@/types/Props";

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
  lessonData?: Awaited<ReturnType<typeof getLessonById>>
): Promise<FormPageProps> => {
  const lesson = lessonData?.lesson;

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
      },
      {
        title: "Notif Code",
        name: "NotifCode",
        type: "number",
        placeholder: "Enter notif code",
        defaultValue: (lesson?.NotifCode || "").toString(),
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
        placeholder: "Enter price per unit",
        defaultValue: (lesson?.PricePerUnit || "").toString(),
      },
    ],
  };
};
