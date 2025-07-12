"use client";
import { getLessons, getStudentById } from "@/lib/actions";
import React, { useEffect, useState } from "react";
import Logo from "@/assets/images/Logo.png";
import Image from "next/image";
import { SelectButton } from "@/components/ui/Form/SelectButton";
import { SelectItem } from "@/components/ui/Form/SelectItems";

type Props = {
  data: Awaited<ReturnType<typeof getStudentById>>;
  lessonsData: Awaited<ReturnType<typeof getLessons>>;
};

export default function LearnedForm({ data, lessonsData }: Props) {
  const [year, setYear] = useState("");
  const [learnedLessons, setLearnedLessons] = useState<string[]>(["", "", ""]);
  const [examPeriod, setExamPeriod] = useState(0);

  const student = data?.student;

  const lessons: SelectItem[] = lessonsData.lessons
    ? lessonsData.lessons?.map((lesson) => ({
        id: lesson.id.toString(),
        name: lesson.LessonName,
      }))
    : [];

  useEffect(() => {
    console.log(learnedLessons);
  }, [learnedLessons]);

  return (
    <div className="border border-gray-300 p-4 rounded">
      <div className="text-center mb-4">
        <h3 className="font-bold">بسمه تعالی</h3>
        <div className="flex justify-between items-center mt-4">
          <div className=" rounded-full w-16 flex items-center justify-center">
            <Image src={Logo} alt="logo" />
          </div>

          <div>
            <h3 className="font-bold">
              فرم درخواست درس به صورت آموخته‌های خارج از مرکز (آموزش از راه دور)
              دوره راهنمایی تحصیلی
            </h3>
          </div>
          <div className="border border-dashed p-2 w-24 h-25 text-center text-xs flex flex-col justify-center items-center">
            <p>محل</p>
            <p>الصاق</p>
            <p>عکس</p>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-right mb-2">سلام علیکم</p>
        <p className="text-right mb-2 inline-block">
          احتراماً اینجانب{" "}
          <span className="font-bold">
            {`${student?.FirstName} ${student?.LastName}`}
          </span>{" "}
          فرزند
          <span className="font-bold">{student?.Father}</span> به شماره دانش
          آموزی <span className="font-bold">{student?.NationalCode}</span>
          <br />
          ورودی سال تحصیلی
          <span className="font-bold"> {year} </span>{" "}
          <input
            type="number"
            className="input w-38 h-7 text-base! placeholder:text-sm! print:hidden"
            onChange={(e) => setYear(e.target.value)}
            value={year}
            placeholder="سال تحصیلی"
          />{" "}
          متقاضی انتخاب درس به صورت آموخته‌های خارج از مرکز در درس یا درس‌های
          زیر میباشم خواهشمند است ترتیبی فراهم نمایید تا بتوانم در امتحانات{" "}
        </p>
        <div
          className={`inline-block font-bold ${
            examPeriod != 1 && "print:hidden"
          }`}
        >
          <label htmlFor="firstTier">نیم‌سال اول</label>
          <input
            onChange={(e) => setExamPeriod(1)}
            id="firstTier"
            type="radio"
            name="exam-period"
            className="print:hidden"
          />
        </div>{" "}
        <div
          className={`inline-block font-bold ${
            examPeriod != 2 && "print:hidden"
          }`}
        >
          <label htmlFor="secondTier">نیم‌سال دوم</label>
          <input
            onChange={(e) => setExamPeriod(2)}
            id="secondTier"
            type="radio"
            name="exam-period"
            className="print:hidden"
          />
        </div>{" "}
        <div
          className={`inline-block font-bold ${
            examPeriod != 3 && "print:hidden"
          }`}
        >
          <label htmlFor="tabes">دوره تابستان</label>
          <input
            onChange={(e) => setExamPeriod(3)}
            id="tabes"
            type="radio"
            name="exam-period"
            className="print:hidden"
          />
        </div>{" "}
        <span> برابر ضوابط و مقررات شرکت نماینم.</span>{" "}
      </div>

      <div className="mt-8 flex justify-between">
        <div>
          <p className="font-bold mb-1">نام و نام خانوادگی دانش‌آموز</p>
          <p className="mb-1">امضا</p>
        </div>
        <div className="ml-24">
          <p className="font-bold mb-1">نام و نام خانوادگی مشاور یا معاون</p>
          <p className="mb-1">مهر و امضا</p>
        </div>
      </div>
      <div className="flex justify-center ">
        <table className="min-w-md border border-black divide-y divide-black">
          <thead className="bg-gray-50">
            <tr className="divide-x">
              <th
                scope="col"
                className="px-6 py-3 text-xs font-medium tracking-wider text-right w-20"
              >
                ردیف
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-medium tracking-wider text-right"
              >
                نام درس
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr className="divide-x">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                ۱
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                <SelectButton
                  buttnClassName="print:hidden!"
                  items={lessons}
                  singleSelect
                  key={0}
                  onSelectionChange={(s) => {
                    setLearnedLessons((prev) => {
                      let t = [...prev];
                      if (!s[0]) t[0] = "";
                      else t[0] = s[0].id != "none" ? s[0].name : "";
                      return t;
                    });
                  }}
                />{" "}
                {learnedLessons[0]}
              </td>
            </tr>
            <tr className="divide-x">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                ۲
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                <SelectButton
                  buttnClassName="print:hidden!"
                  items={lessons}
                  singleSelect
                  key={1}
                  onSelectionChange={(s) => {
                    console.log(s);
                    setLearnedLessons((prev) => {
                      let t = [...prev];
                      if (!s[0]) t[1] = "";
                      else t[1] = s[0].id != "none" ? s[0].name : "";
                      return t;
                    });
                  }}
                />{" "}
                {learnedLessons[1]}{" "}
              </td>
            </tr>
            <tr className="divide-x">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                ۳
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                <SelectButton
                  buttnClassName="print:hidden!"
                  items={lessons}
                  singleSelect
                  key={2}
                  onSelectionChange={(s) => {
                    console.log(s);
                    setLearnedLessons((prev) => {
                      console.log(prev);
                      let t = [...prev];
                      if (!s[0]) t[2] = "";
                      else t[2] = s[0].id != "none" ? s[0].name : "";
                      console.log(t);
                      return t;
                    });
                  }}
                />{" "}
                {learnedLessons[2]}{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-8 border-t pt-4">
        <p className="text-right mb-2">بدینوسیله با درخواست دانش آموز</p>
        <div className="flex justify-center mt-4">
          <div className="mx-4">
            <input type="radio" id="agree" name="agreement" className="ml-2" />
            <label htmlFor="agree">موافقت می‌شود</label>
          </div>
          <div className="mx-4">
            <input
              type="radio"
              id="disagree"
              name="agreement"
              className="ml-2"
            />
            <label htmlFor="disagree">موافقت نمی‌شود</label>
          </div>
        </div>

        <div className="mt-8 text-left">
          <p className="font-bold mb-1">نام و نام خانوادگی مدیر مرکز</p>
          <p className="mb-1">مهر و امضا</p>
        </div>
      </div>

      <div className="mt-8 border-t pt-4 text-xs">
        <p className="mb-1">
          تذکر 1: دانش‌آموز با استناد به ماده 68 آیین‌نامه آموزش از راه دور، در
          هر دوره می‌تواند به صورت درس به درس آموخته‌های خارج از مرکز را انتخاب
          نماید.
        </p>
        <p className="mb-1">
          تذکر 2: درس‌هایی که دانش‌آموز می‌تواند به صورت آموخته‌های خارج از مرکز
          انتخاب نماید عبارتند از: زبان انگلیسی - عربی - دینی
        </p>
        <p className="mb-1">
          تذکر 3: رعایت پیش‌نیاز درس‌ها در مورد انتخاب درس‌های خارج از مرکز
          الزامی است.
        </p>
        <p className="mb-1">
          تذکر 4: تعداد درس‌های مربوط به آموخته‌های خارج از مرکز در هر سال حداقل
          1 و حداکثر 3 درس مجاز می‌باشد.
        </p>
        <p className="mb-1">
          تذکر 5: در هر نوبت قبولی در این درس‌ها با نمره بیست ثبت می‌شود.
        </p>
        <p className="mb-1">
          تذکر 6: نمرات این درس‌ها که در امتحانات ارزشیابی می‌شود در معدل نیمسال
          و نمرات کل محاسبه نمی‌شود.
        </p>
      </div>
    </div>
  );
}
