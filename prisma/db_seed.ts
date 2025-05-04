import { PrismaClient, LessonGrade } from "@prisma/client";

const prisma = new PrismaClient();

// Define lesson data based on the provided image
const lessonsData = [
  // Grade 10 (دهم)
  {
    NotifCode: 5099,
    LessonName: "طراحی گرافیکی رنگی",
    TheoriUnit: 0,
    PracticalUnit: 4,
    Grade: LessonGrade.GRADE_10,
    TheoriHours: 0,
    PracticalHours: 7,
  },
  {
    NotifCode: 5051,
    LessonName: "طراحی گرافیکی سیاه و سفید",
    TheoriUnit: 0,
    PracticalUnit: 4,
    Grade: LessonGrade.GRADE_10,
    TheoriHours: 0,
    PracticalHours: 7,
  },
  {
    NotifCode: 6500,
    LessonName: "کاربر رایانه",
    TheoriUnit: 1,
    PracticalUnit: 3,
    Grade: LessonGrade.GRADE_10,
    TheoriHours: 2,
    PracticalHours: 6,
  },
  {
    NotifCode: 5783,
    LessonName: "گرافیک رایانه ای",
    TheoriUnit: 2,
    PracticalUnit: 3,
    Grade: LessonGrade.GRADE_10,
    TheoriHours: 4,
    PracticalHours: 6,
  },
  {
    NotifCode: 1011,
    LessonName: "تعلیمات دینی، اخلاق و قرآن ۱",
    TheoriUnit: 2,
    PracticalUnit: 0,
    Grade: LessonGrade.GRADE_10,
    TheoriHours: 2,
    PracticalHours: 0,
  },
  {
    NotifCode: 1023,
    LessonName: "عربی، زبان قرآن ۱",
    TheoriUnit: 2,
    PracticalUnit: 0,
    Grade: LessonGrade.GRADE_10,
    TheoriHours: 2,
    PracticalHours: 0,
  },
  {
    NotifCode: 1031,
    LessonName: "فارسی ۱",
    TheoriUnit: 2,
    PracticalUnit: 0,
    Grade: LessonGrade.GRADE_10,
    TheoriHours: 2,
    PracticalHours: 0,
  },
  {
    NotifCode: 1083,
    LessonName: "زبان خارجی ۱",
    TheoriUnit: 2,
    PracticalUnit: 0,
    Grade: LessonGrade.GRADE_10,
    TheoriHours: 2,
    PracticalHours: 0,
  },
  {
    NotifCode: 1091,
    LessonName: "تربیت بدنی ۱",
    TheoriUnit: 0,
    PracticalUnit: 1,
    Grade: LessonGrade.GRADE_10,
    TheoriHours: 0,
    PracticalHours: 2,
  },
  {
    NotifCode: 1400,
    LessonName: "جغرافیای عمومی و استان شناسی",
    TheoriUnit: 2,
    PracticalUnit: 0,
    Grade: LessonGrade.GRADE_10,
    TheoriHours: 2,
    PracticalHours: 0,
  },
  {
    NotifCode: 1410,
    LessonName: "انظباط",
    TheoriUnit: 1,
    PracticalUnit: 0,
    Grade: LessonGrade.GRADE_10,
    TheoriHours: 1,
    PracticalHours: 0,
  },
  {
    NotifCode: 8810,
    LessonName: "الزامات محیط کار",
    TheoriUnit: 2,
    PracticalUnit: 0,
    Grade: LessonGrade.GRADE_10,
    TheoriHours: 2,
    PracticalHours: 0,
  },
  // Grade 11 (یازدهم)
  {
    NotifCode: 1111,
    LessonName: "تعلیمات دینی، اخلاق و قرآن ۲",
    TheoriUnit: 2,
    PracticalUnit: 0,
    Grade: LessonGrade.GRADE_11,
    TheoriHours: 2,
    PracticalHours: 0,
  },
  {
    NotifCode: 1123,
    LessonName: "عربی، زبان قرآن ۲",
    TheoriUnit: 1,
    PracticalUnit: 0,
    Grade: LessonGrade.GRADE_11,
    TheoriHours: 1,
    PracticalHours: 0,
  },
  {
    NotifCode: 1131,
    LessonName: "فارسی ۲",
    TheoriUnit: 1,
    PracticalUnit: 0,
    Grade: LessonGrade.GRADE_11,
    TheoriHours: 1,
    PracticalHours: 0,
  },
  {
    NotifCode: 1183,
    LessonName: "زبان خارجی ۲",
    TheoriUnit: 2,
    PracticalUnit: 0,
    Grade: LessonGrade.GRADE_11,
    TheoriHours: 2,
    PracticalHours: 0,
  },
  {
    NotifCode: 1191,
    LessonName: "تربیت بدنی ۲",
    TheoriUnit: 0,
    PracticalUnit: 1,
    Grade: LessonGrade.GRADE_11,
    TheoriHours: 0,
    PracticalHours: 2,
  },
  {
    NotifCode: 11191,
    LessonName: "انسان و محیط زیست",
    TheoriUnit: 2,
    PracticalUnit: 0,
    Grade: LessonGrade.GRADE_11,
    TheoriHours: 2,
    PracticalHours: 0,
  },
  {
    NotifCode: 1311,
    LessonName: "علوم اجتماعی",
    TheoriUnit: 2,
    PracticalUnit: 0,
    Grade: LessonGrade.GRADE_11,
    TheoriHours: 2,
    PracticalHours: 0,
  },
  {
    NotifCode: 1421,
    LessonName: "هنر",
    TheoriUnit: 1,
    PracticalUnit: 0,
    Grade: LessonGrade.GRADE_11,
    TheoriHours: 1,
    PracticalHours: 0,
  },
  {
    NotifCode: 14211,
    LessonName: "تفکر و سواد رسانه ای",
    TheoriUnit: 2,
    PracticalUnit: 0,
    Grade: LessonGrade.GRADE_11,
    TheoriHours: 2,
    PracticalHours: 0,
  },
  {
    NotifCode: 8820,
    LessonName: "کاربرد فناوری های نوین",
    TheoriUnit: 2,
    PracticalUnit: 0,
    Grade: LessonGrade.GRADE_11,
    TheoriHours: 2,
    PracticalHours: 0,
  },
  {
    NotifCode: 8830,
    LessonName: "مدیریت تولید",
    TheoriUnit: 3,
    PracticalUnit: 0,
    Grade: LessonGrade.GRADE_11,
    TheoriHours: 3,
    PracticalHours: 0,
  },
  {
    NotifCode: 8840,
    LessonName: "کارگاه نوآوری و کارآفرینی",
    TheoriUnit: 0,
    PracticalUnit: 2,
    Grade: LessonGrade.GRADE_11,
    TheoriHours: 0,
    PracticalHours: 5,
  },
  {
    NotifCode: 11141,
    LessonName: "آمادگی دفاعی",
    TheoriUnit: 2,
    PracticalUnit: 0,
    Grade: LessonGrade.GRADE_11,
    TheoriHours: 2,
    PracticalHours: 0,
  },
  {
    NotifCode: 11161,
    LessonName: "تاریخ معاصر",
    TheoriUnit: 2,
    PracticalUnit: 0,
    Grade: LessonGrade.GRADE_11,
    TheoriHours: 2,
    PracticalHours: 0,
  },
  // Grade 12 (دوازدهم)
  {
    NotifCode: 1211,
    LessonName: "تعلیمات دینی، اخلاق و قرآن ۳",
    TheoriUnit: 2,
    PracticalUnit: 0,
    Grade: LessonGrade.GRADE_12,
    TheoriHours: 2,
    PracticalHours: 0,
  },
  {
    NotifCode: 1223,
    LessonName: "عربی، زبان قرآن ۳",
    TheoriUnit: 1,
    PracticalUnit: 0,
    Grade: LessonGrade.GRADE_12,
    TheoriHours: 1,
    PracticalHours: 0,
  },
  {
    NotifCode: 1231,
    LessonName: "فارسی ۳",
    TheoriUnit: 2,
    PracticalUnit: 0,
    Grade: LessonGrade.GRADE_12,
    TheoriHours: 2,
    PracticalHours: 0,
  },
  {
    NotifCode: 1291,
    LessonName: "تربیت بدنی ۳",
    TheoriUnit: 0,
    PracticalUnit: 1,
    Grade: LessonGrade.GRADE_12,
    TheoriHours: 0,
    PracticalHours: 2,
  },
  {
    NotifCode: 12131,
    LessonName: "سلامت و بهداشت",
    TheoriUnit: 2,
    PracticalUnit: 0,
    Grade: LessonGrade.GRADE_12,
    TheoriHours: 2,
    PracticalHours: 0,
  },
  {
    NotifCode: 12171,
    LessonName: "مدیریت خانواده و سبک زندگی",
    TheoriUnit: 2,
    PracticalUnit: 0,
    Grade: LessonGrade.GRADE_12,
    TheoriHours: 2,
    PracticalHours: 0,
  },
  {
    NotifCode: 8850,
    LessonName: "اخلاق حرفه ای",
    TheoriUnit: 2,
    PracticalUnit: 0,
    Grade: LessonGrade.GRADE_12,
    TheoriHours: 2,
    PracticalHours: 0,
  },
  // Note: Some fields like TeacherId, fieldId, PassCondition, RequireLesson, etc., are not in the image and are omitted or will use schema defaults.
];

// Define fee settings data
const feeSettingsData = [
  { Key: "FixedFee", Value: "2000000" },
  { Key: "CertificateFee", Value: "300000" },
  { Key: "BooksFee", Value: "500000" },
  { Key: "PricePerUnit", Value: "1000000" },
  { Key: "ExtraClassFee", Value: "800000" },
];

async function main() {
  console.log(`Start seeding ...`);

  // Seed Lessons
  console.log(`Seeding ${lessonsData.length} lessons...`);
  // Clear existing lessons first if needed (optional)
  // await prisma.lesson.deleteMany();
  const createdLessons = await prisma.lesson.createMany({
    data: lessonsData,
    skipDuplicates: true, // Optional: Skip if a lesson with the same unique constraint already exists
  });
  console.log(`Seeded ${createdLessons.count} lessons.`);

  // Seed General Settings (Fees)
  console.log(`Seeding/Updating ${feeSettingsData.length} general settings...`);
  for (const setting of feeSettingsData) {
    await prisma.general.upsert({
      where: { Key: setting.Key },
      update: { Value: setting.Value },
      create: { Key: setting.Key, Value: setting.Value },
    });
  }
  console.log(`Seeded/Updated ${feeSettingsData.length} general settings.`);

  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
