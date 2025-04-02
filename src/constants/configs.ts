import { getLessonById } from "@/lib/actions";
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

export const lessonFormConfigGenerator = (
  lessonData?: Awaited<ReturnType<typeof getLessonById>>
): FormPageProps => {
  const lesson = lessonData?.lesson;

  return {
    title: "Add New Course",
    description: "Please fill in the course details below",
    useDefaultValues: true,
    addText: "Edit Lesson",

    inputs: [
      {
        title: "Lesson Name",
        name: "lessonName",
        type: "text",
        placeholder: "Enter lesson name",
        required: true,
        defaultValue: lesson?.LessonName,
      },
      {
        title: "Lesson Unit",
        name: "lessonUnit",
        type: "number",
        placeholder: "Enter lesson unit",
        defaultValue: lesson?.Unit.toString(),
        required: true,
      },
      {
        title: "Lesson Grade",
        name: "lessonGrade",
        type: "text",
        placeholder: "Enter lesson grade",
        defaultValue: (lesson?.Grade || "").toString(),
      },
      {
        title: "Lesson Field",
        name: "lessonField",
        type: "text",
        placeholder: "Enter lesson field",
        defaultValue: (lesson?.fieldId || "").toString(),
      },
      {
        title: "Teacher Name",
        name: "teacherName",
        type: "text",
        placeholder: "Enter teacher name",
        defaultValue: `${lesson?.teacher?.FirstName} ${lesson?.teacher?.LastName}`,
      },
      {
        title: "Lesson Pass Condition",
        name: "lessonPassCondition",
        type: "text",
        placeholder: "Enter lesson pass condition",
        defaultValue: (lesson?.PassCondition || "").toString(),
      },
      {
        title: "Lesson Theori Hours",
        name: "lessonTheoriHours",
        type: "text",
        placeholder: "Enter lesson theori hours",
        defaultValue: (lesson?.TheoriHours || "").toString(),
      },
      {
        title: "Lesson Practical Hours",
        name: "lessonPracticalHours",
        type: "text",
        placeholder: "Enter lesson practical hours",
        defaultValue: (lesson?.PracticalHours || "").toString(),
      },
      {
        title: "Required Lesson",
        name: "requiredLesson",
        type: "text",
        placeholder: "Enter required lesson",
        defaultValue: (lesson?.requiresLesson?.id || "").toString(),
      },
      {
        title: "Required Unit",
        name: "requiredUnit",
        type: "text",
        placeholder: "Enter required unit",
        defaultValue: (lesson?.RequireUnit || "").toString(),
      },
      {
        title: "Notif Code",
        name: "notifCode",
        type: "text",
        placeholder: "Enter notif code",
        defaultValue: (lesson?.NotifCode || "").toString(),
      },
      {
        title: "Valid From",
        name: "validFrom",
        type: "date",
        placeholder: "Enter valid from",
        defaultValue: lesson?.ValidFrom?.toISOString().split("T")[0],
      },
      {
        title: "Valid Until",
        name: "validUntil",
        type: "date",
        placeholder: "Enter valid until",
        defaultValue: lesson?.ValidFrom?.toISOString().split("T")[0],
      },
      {
        title: "Price Per Unit",
        name: "pricePerUnit",
        type: "text",
        placeholder: "Enter price per unit",
        defaultValue: (lesson?.PricePerUnit || "").toString(),
      },
    ],
  };
};
