import { faker } from "@faker-js/faker";
import {
  PrismaClient,
  Grade,
  LessonGrade,
  Period,
  UserType,
} from "../src/generated/prisma/index.js";

const prisma = new PrismaClient();

async function main() {
  console.log("Start seeding...");

  // Clear existing data (optional - uncomment if needed)
  // Comment out these lines if you want to keep existing data
  await prisma.selectUnit.deleteMany();
  await prisma.lesson.deleteMany();
  await prisma.student.deleteMany();
  await prisma.teacher.deleteMany();
  await prisma.field.deleteMany();
  await prisma.user.deleteMany();
  await prisma.general.deleteMany();

  console.log("Cleared existing data.");

  // Create Fields
  const fields = [];
  const fieldNames = [
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "Computer Science",
    "Literature",
    "History",
    "Geography",
  ];

  for (const name of fieldNames) {
    const field = await prisma.field.create({
      data: {
        Name: name,
        FixedFee: faker.number.int({ min: 1000000, max: 5000000 }),
      },
    });
    fields.push(field);
    console.log(`Created field: ${field.Name}`);
  }

  // Create Teachers
  const teachers = [];

  // Create at least one teacher per field to ensure proper distribution
  for (const field of fields) {
    const teacher = await prisma.teacher.create({
      data: {
        FirstName: faker.person.firstName(),
        LastName: faker.person.lastName(),
        NationalCode: faker.string.numeric(10),
        PhoneNumber: faker.phone.number("09#########"),
        fieldId: field.id,
        Birth: faker.date.between({ from: "1960-01-01", to: "1990-12-31" }),
      },
    });
    teachers.push(teacher);
    console.log(
      `Created teacher: ${teacher.FirstName} ${teacher.LastName} for field: ${field.Name}`
    );
  }

  // Create additional teachers with random field assignments
  for (let i = 0; i < 7; i++) {
    const teacher = await prisma.teacher.create({
      data: {
        FirstName: faker.person.firstName(),
        LastName: faker.person.lastName(),
        NationalCode: faker.string.numeric(10),
        PhoneNumber: faker.phone.number("09#########"),
        fieldId: faker.helpers.arrayElement(fields).id,
        Birth: faker.date.between({ from: "1960-01-01", to: "1990-12-31" }),
      },
    });
    teachers.push(teacher);
    console.log(`Created teacher: ${teacher.FirstName} ${teacher.LastName}`);
  }

  // Create Lessons
  const lessons = [];
  const lessonNames = [
    "Advanced Mathematics",
    "Calculus",
    "Physics I",
    "Physics II",
    "Organic Chemistry",
    "Inorganic Chemistry",
    "Cell Biology",
    "Programming Fundamentals",
    "Data Structures",
    "Algorithms",
    "Advanced Mathematics",
    "Calculus",
    "Physics I",
    "Physics II",
    "Organic Chemistry",
    "Inorganic Chemistry",
    "Cell Biology",
    "Programming Fundamentals",
    "Data Structures",
    "Algorithms",
    "Advanced Mathematics",
    "Calculus",
    "Physics I",
    "Physics II",
    "Organic Chemistry",
    "Inorganic Chemistry",
    "Cell Biology",
    "Programming Fundamentals",
    "Data Structures",
    "Algorithms",
    "Advanced Mathematics",
    "Calculus",
    "Physics I",
    "Physics II",
    "Organic Chemistry",
    "Inorganic Chemistry",
    "Cell Biology",
    "Programming Fundamentals",
    "Data Structures",
    "Algorithms",
    "Advanced Mathematics",
    "Calculus",
    "Physics I",
    "Physics II",
    "Organic Chemistry",
    "Inorganic Chemistry",
    "Cell Biology",
    "Programming Fundamentals",
    "Data Structures",
    "Algorithms",
  ];

  // Use the enum values directly from Prisma
  const grades: LessonGrade[] = [
    "GENERAL",
    "GRADE_7",
    "GRADE_8",
    "GRADE_9",
    "GRADE_10",
    "GRADE_11",
    "GRADE_12",
  ];

  for (let i = 0; i < lessonNames.length; i++) {
    // Select a field first, then find a teacher in that field for better data consistency
    const field = faker.helpers.arrayElement(fields);
    const fieldTeachers = teachers.filter((t) => t.fieldId === field.id);
    const teacher =
      fieldTeachers.length > 0
        ? faker.helpers.arrayElement(fieldTeachers)
        : faker.helpers.arrayElement(teachers);

    const lesson = await prisma.lesson.create({
      data: {
        TeacherId: teacher.id,
        LessonName: lessonNames[i],
        Unit: faker.number.int({ min: 1, max: 4 }),
        Grade: faker.helpers.arrayElement(grades),
        fieldId: field.id,
        PassCondition: faker.number.int({ min: 10, max: 20 }),
        TheoriHours: faker.number.int({ min: 16, max: 48 }),
        PracticalHours: faker.number.int({ min: 0, max: 32 }),
        NotifCode: faker.number.bigInt({ min: 1000, max: 9999 }),
        ValidFrom: faker.date.past(),
        ValidTill: faker.helpers.maybe(() => faker.date.future(), {
          probability: 0.7,
        }),
        PricePerUnit: faker.number.bigInt({ min: 500000, max: 2000000 }),
        RequireUnit: faker.number.int({ min: 0, max: 20 }),
      },
    });
    lessons.push(lesson);
    console.log(`Created lesson: ${lesson.LessonName}`);
  }

  // Create some lesson requirements
  for (let i = 1; i < lessons.length; i++) {
    if (faker.datatype.boolean()) {
      await prisma.lesson.update({
        where: { id: lessons[i].id },
        data: {
          RequireLesson: lessons[i - 1].id,
        },
      });
      console.log(
        `Set ${lessons[i].LessonName} to require ${lessons[i - 1].LessonName}`
      );
    }
  }

  // Create Students
  const students = [];
  // Use the enum values directly from Prisma
  const gradeValues: Grade[] = [
    "GRADE_7",
    "GRADE_8",
    "GRADE_9",
    "GRADE_10",
    "GRADE_11",
    "GRADE_12",
  ];

  for (let i = 0; i < 50; i++) {
    // Assign students to fields with more realistic distribution
    const field = faker.helpers.arrayElement(fields);
    const grade = faker.helpers.arrayElement(gradeValues);

    // Calculate birth year based on grade (roughly)
    const currentYear = new Date().getFullYear();
    const gradeNumber = parseInt(grade.toString().replace("GRADE_", ""));
    const approximateAge = 6 + gradeNumber; // Assuming grade 7 is around age 13
    const birthYear = currentYear - approximateAge;

    const student = await prisma.student.create({
      data: {
        FirstName: faker.person.firstName(),
        LastName: faker.person.lastName(),
        NationalCode: faker.string.numeric(10),
        Father: faker.person.fullName({ sex: "male" }),
        Birth: faker.date.between({
          from: `${birthYear - 1}-01-01`,
          to: `${birthYear + 1}-12-31`,
        }),
        Address: faker.location.streetAddress(),
        HomeNumber: faker.phone.number("0##########"),
        PhoneNumber: faker.phone.number("09#########"),
        fieldId: field.id,
        Grade: grade,
      },
    });
    students.push(student);
    console.log(`Created student: ${student.FirstName} ${student.LastName}`);
  }

  // Create SelectUnits
  // Use the enum values directly from Prisma
  const periods: Period[] = ["first", "second", "summer"];
  const currentYear = new Date().getFullYear();

  for (const student of students) {
    // Filter lessons that are appropriate for the student's grade and field
    const studentGradeNumber = parseInt(
      student.Grade.toString().replace("GRADE_", "")
    );
    const appropriateLessons = lessons.filter((lesson) => {
      // If lesson is GENERAL grade or matches student's grade
      const lessonGrade = lesson.Grade.toString();
      const isAppropriateGrade =
        lessonGrade === "GENERAL" || lessonGrade === student.Grade.toString();

      // Prefer lessons from the student's field but allow some from other fields
      const isFromSameField = lesson.fieldId === student.fieldId;

      return (
        isAppropriateGrade && (isFromSameField || faker.datatype.boolean(0.3))
      );
    });

    // Each student selects 3-7 lessons, or fewer if not enough appropriate lessons
    const numLessons = Math.min(
      faker.number.int({ min: 3, max: 7 }),
      appropriateLessons.length
    );

    const selectedLessons = faker.helpers.arrayElements(
      appropriateLessons.length > 0 ? appropriateLessons : lessons,
      numLessons
    );

    for (const lesson of selectedLessons) {
      try {
        await prisma.selectUnit.create({
          data: {
            StudentId: student.id,
            LessonId: lesson.id,
            Year: faker.number.int({ min: currentYear - 2, max: currentYear }),
            Period: faker.helpers.arrayElement(periods),
            ExtraFee: faker.number.bigInt({ min: 0, max: 1000000 }),
          },
        });
        console.log(
          `Created selection for student ${student.id} and lesson ${lesson.id}`
        );
      } catch (error) {
        console.log(
          `Skipping duplicate selection for student ${student.id} and lesson ${lesson.id}`
        );
      }
    }
  }

  // Create Users
  // Use the enum values directly from Prisma
  const userTypes: UserType[] = ["admin", "user"];
  // Always create one admin user with a known password for easy access
  const adminUser = await prisma.user.create({
    data: {
      UserName: "admin",
      Password: "admin123", // In a real app, this should be hashed
      Type: "admin",
    },
  });
  console.log(
    `Created admin user: ${adminUser.UserName} with password: admin123`
  );

  // Create additional random users
  for (let i = 0; i < 4; i++) {
    const user = await prisma.user.create({
      data: {
        UserName: faker.internet.userName(),
        Password: faker.internet.password(),
        Type: faker.helpers.arrayElement(userTypes),
      },
    });
    console.log(`Created user: ${user.UserName}`);
  }

  // Create General settings
  const generalKeys = [
    "CurrentYear",
    "CurrentPeriod",
    "RegistrationOpen",
    "SystemName",
    "ContactEmail",
  ];
  const generalValues = [
    currentYear.toString(),
    faker.helpers.arrayElement(periods),
    faker.datatype.boolean().toString(),
    "Educational Management System",
    faker.internet.email(),
  ];

  for (let i = 0; i < generalKeys.length; i++) {
    await prisma.general.create({
      data: {
        Key: generalKeys[i],
        Value: generalValues[i],
      },
    });
    console.log(`Created general setting: ${generalKeys[i]}`);
  }

  console.log("Seeding finished.");
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
