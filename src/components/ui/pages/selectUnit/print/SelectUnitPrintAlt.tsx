import NotFound from "@/app/not-found";
import { DetailPageConfigs } from "@/constants/configs/DetailPageConfigs";
import { getSelectUnitById } from "@/lib/actions";
import { errorCheck } from "@/lib/errorCheck";
import getAcademicYearJ from "@/lib/utils/getAcademicYearJ";
import { PageType } from "@/types/General";
import { Period } from "@prisma/client";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  id: string;
};

export default async function SelectUnitPrintAlt({ id }: Props) {
  const config = DetailPageConfigs[PageType.SelectUnit];
  if (!config) {
    return notFound();
  }
  const data = await (config.data(id) as ReturnType<typeof getSelectUnitById>);
  const detailConfig = config.config(data);

  if (!detailConfig || !data) {
    return notFound();
  }

  if (detailConfig.error || !detailConfig.config || data.error) {
    errorCheck(detailConfig?.error);
    return <NotFound />;
  }

  const selectUnit = data.selectUnit;

  return (
    <div className="border border-gray-300 p-4 rounded">
      <div className="text-center mb-4">
        <h3 className="font-bold">بسمه تعالی</h3>
        <div className="flex justify-between items-center mt-4">
          <div className="border border-dashed p-2 w-24 h-24 text-center text-xs">
            <p>محل</p>
            <p>الصاق</p>
            <p>عکس</p>
          </div>
          <div>
            <h3 className="font-bold">
              فرم درخواست درس به صورت آموخته‌های خارج از مرکز (آموزش از راه دور)
              دوره راهنمایی تحصیلی
            </h3>
          </div>
          <div className="w-24 h-24 flex items-center justify-center">
            <div className="border border-gray-400 rounded-full w-16 h-16 flex items-center justify-center">
              <span className="text-xs">مهر آموزشگاه</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-right mb-2">سلام علیکم</p>
        <p className="text-right mb-2">
          احتراماً اینجانب{" "}
          <span className="font-bold">
            {`${selectUnit?.student?.FirstName} ${selectUnit?.student?.LastName}`}
          </span>{" "}
          فرزند
          <span className="font-bold">{selectUnit?.student?.Father}</span> به
          شماره دانش آموزی{" "}
          <span className="font-bold">{selectUnit?.student?.id}</span>
          <br />
          ورودی سال تحصیلی
          <span className="font-bold">
            {getAcademicYearJ(Number(selectUnit?.Year))}
          </span>{" "}
          متقاضی انتخاب درس به صورت آموخته‌های خارج از مرکز در درس یا درس‌های
          زیر میباشم خواهشمند است ترتیبی فراهم نمایید تا بتوانم در امتحانات{" "}
          <span className="font-bold">
            {selectUnit?.Period === Period.summer
              ? "دوره تابستان"
              : "پایان سال"}
          </span>{" "}
          برابر ضوابط و مقررات شرکت نماینم.
        </p>
        <div className="mt-4">{detailConfig.children}</div>
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
