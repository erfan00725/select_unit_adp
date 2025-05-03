import { Grade, LessonGrade, Period } from "@prisma/client";

export function gradeRender(grade?: Grade | LessonGrade | null) {
  switch (grade) {
    case "GENERAL":
      return "عمومی";
    case "GRADE_7":
      return "هفتم";
    case "GRADE_8":
      return "هشتم";
    case "GRADE_9":
      return "نهم";
    case "GRADE_10":
      return "دهم";
    case "GRADE_11":
      return "یازدهم";
    case "GRADE_12":
      return "دوازدهم";
    default:
      return null;
  }
}

export function periodRender(period?: Period | null) {
  switch (period) {
    case "first":
      return "نیمسال اول";
    case "second":
      return "نیمسال دوم";
    case "summer":
      return "تابستان";
    default:
      return null;
  }
}
