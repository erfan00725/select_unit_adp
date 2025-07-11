import { CalenderFarsi } from "@/components/ui/Form/CalenderFarsi";
import { SchoolName } from "@/constants/commonTexts";
import { getSelectUnitById, getSettings } from "@/lib/actions";
import { gradeRender, periodRender } from "@/lib/utils/dataRenderer";
import getAcademicYearJ from "@/lib/utils/getAcademicYearJ";
import { priceFormatter } from "@/lib/utils/priceFormatter";
import { digitsEnToFa, numberToWords } from "@persian-tools/persian-tools";
import { Grade } from "@prisma/client";

type Props = {
  id: string;
  settings: Awaited<ReturnType<typeof getSettings>>;
};

const RenderData = ({ data }: { data?: string | number | null }) => {
  return data ? <span className="font-bold">{data}</span> : "..............";
};

const SelectUnitPrintForm = async ({ id, settings: settingsData }: Props) => {
  const selectUnit = await getSelectUnitById(id);
  const data = selectUnit.selectUnit;
  const settings = settingsData.settings;

  if (!data) return null;

  const regularLessons = data?.selectedLessons.filter((item) => !item.Learned);
  const learnedLessons = data?.selectedLessons.filter((item) => item.Learned);

  const studentGrade = data.student.Grade;
  const firstTierGrades: Grade[] = [
    Grade.GRADE_7,
    Grade.GRADE_8,
    Grade.GRADE_9,
  ];
  const isFirstTier = firstTierGrades.includes(studentGrade);
  const pricePerUnit = isFirstTier
    ? settings.pricePerUnitFirst
    : settings.pricePerUnitSecond;
  const learnedFee = isFirstTier
    ? settings.learnedFeeFirst
    : settings.learnedFeeSecond;

  const calcUnit = (lessons: typeof regularLessons) =>
    lessons?.reduce(
      (acc, item) => acc + item.lesson.TheoriUnit + item.lesson.PracticalUnit,
      0
    );

  const regularLessonPrice = () =>
    regularLessons?.reduce((acc, item) => {
      const lessonPrice = Number(item.lesson.PricePerUnit);
      return (
        acc +
        Number(!!lessonPrice ? lessonPrice : pricePerUnit) *
          (item.lesson.TheoriUnit + item.lesson.PracticalUnit)
      );
    }, 0);

  const learnedLessonPrice = () =>
    learnedLessons?.reduce((acc, item) => {
      const lessonPrice = Number(item.lesson.PricePerUnit);
      return (
        acc +
        Number(learnedFee) *
          (item.lesson.TheoriUnit + item.lesson.PracticalUnit)
      );
    }, 0);

  return (
    <div className="bg-white p-6 print:p-0 font-['Tahoma'] text-sm" dir="rtl">
      <div className="printable-area">
        <div className="text-center mb-2">
          <h1 className="font-bold text-lg ">
            فرم قرارداد پرداخت شهریه ثبت نام دانش آموزان مدرسه آموزش{" "}
            {SchoolName}
          </h1>
        </div>

        <div className="flex flex-col space-y-3 justify-between items-center text-xs mb-3">
          <div>
            <span>
              سال تحصیلی: {<RenderData data={getAcademicYearJ(data?.Year)} />}
            </span>
            {"\t_\t"}
            <RenderData data={periodRender(data?.Period)} />
            {/* <span className="mx-2">نیمسال:</span> */}
            {/* <input type="checkbox" className="ml-1" /> اول */}
            {/* <input type="checkbox" className="ml-1 mx-2" /> دوم */}
            {/* <input type="checkbox" className="ml-1 mx-2" /> تابستانی */}
          </div>
          <div>
            <span>دوره تحصیلی:</span>
            <input type="checkbox" className="ml-1 mr-2" /> دوره اول متوسطه
            <input type="checkbox" className="ml-1 mx-2" /> دوره دوم متوسطه
            <input type="checkbox" className="ml-1 mx-2" /> شاخه نظری
            <input type="checkbox" className="ml-1 mx-2" /> شاخه کارودانش
          </div>
        </div>

        <div className="border border-black p-4">
          <p className="font-bold">ماده ۱- طرفین قرارداد</p>
          <div className="my-2">
            <span>قرارداد زیر در تاریخ</span>{" "}
            <CalenderFarsi className="inline-block font-bold" buttonClassName="print:border-none print:py-1! print:px-1! print:font-bold!" calendarClassName="right-0" name="year" defaultValue={new Date().toISOString()} /> 
            <span>
            بین موسس{" "}
            <RenderData data={settings?.founder} /> با ولی دانش آموز/دانش آموز
            جناب آقای / سرکار خانم{" "}
            <RenderData
              data={`${data?.student.FirstName} ${data?.student.LastName}`}
            />{" "}
            منعقد می گردد.
            </span>
          </div>
          <div className="flex justify-between">
            <span>
              پایه: <RenderData data={gradeRender(data?.student.Grade)} />
            </span>
            <span>
              تلفن منزل: <RenderData data={data?.student.HomeNumber} />
            </span>
            <span>
              تلفن همراه: <RenderData data={data?.student.PhoneNumber} />
            </span>
          </div>
          <p className="mt-2">
            نشانی منزل: <RenderData data={data?.student.Address} />
          </p>

          <p className="font-bold mt-2">ماده ۲- موضوع قرارداد</p>
          <p>پرداخت شهریه ثبت نام دانش آموز آموزش از راه دور</p>

          <p className="font-bold mt-2">
            ماده ۳- مبلغ قرارداد به شرح زیر میباشد.
          </p>

          <table className="w-full border-collapse border border-black mt-2 text-center text-xs">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-black p-1">ردیف</th>
                <th className="border border-black p-1">موارد</th>
                <th className="border border-black p-1">تعداد / جلسه</th>
                <th className="border border-black p-1">مبلغ به ریال</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black p-1">۱</td>
                <td className="border border-black p-1 text-right">
                  شهریه ثابت
                </td>
                <td className="border border-black p-1">---</td>
                <td className="border border-black p-1">
                  <RenderData
                    data={priceFormatter(data?.FixedFee.toString())}
                  />
                </td>
              </tr>
              <tr>
                <td className="border border-black p-1">۲</td>
                <td className="border border-black p-1 text-right">
                  واحد درسی
                </td>
                <td className="border border-black p-1">
                  <RenderData data={calcUnit(regularLessons)} />{" "}
                </td>
                <td className="border border-black p-1">
                  <RenderData data={priceFormatter(regularLessonPrice())} />
                </td>
              </tr>
              <tr>
                <td className="border border-black p-1">۳</td>
                <td className="border border-black p-1 text-right">آموخته</td>
                <td className="border border-black p-1">
                  <RenderData data={calcUnit(learnedLessons)} />
                </td>
                <td className="border border-black p-1">
                  <RenderData data={priceFormatter(learnedLessonPrice())} />
                </td>
              </tr>
              <tr>
                <td className="border border-black p-1">۴</td>
                <td className="border border-black p-1 text-right">
                  عادی / الکترونیکی
                </td>
                <td className="border border-black p-1"></td>
                <td className="border border-black p-1"></td>
              </tr>
              <tr>
                <td className="border border-black p-1">۵</td>
                <td className="border border-black p-1 text-right">
                  هزینه ثبت نمرات مهارت و صدور گواهینامه دیپلم کاردانش (برای
                  کلیه مهارت ها)
                </td>
                <td className="border border-black p-1">---</td>
                <td className="border border-black p-1">
                  {priceFormatter(data?.CertificateFee.toString())}
                </td>
              </tr>
              <tr>
                <td className="border border-black p-1">۶</td>
                <td className="border border-black p-1 text-right">
                  هزینه کلاس اضافه به ازاء هر جلسه
                </td>
                <td className="border border-black p-1"></td>
                <td className="border border-black p-1">
                  {priceFormatter(data?.ExtraClassFee.toString())}
                </td>
              </tr>
              <tr>
                <td className="border border-black p-1">۷</td>
                <td className="border border-black p-1 text-right">
                  هزینه کتاب و سی دی های آموزشی
                </td>
                <td className="border border-black p-1"></td>
                <td className="border border-black p-1">
                  {priceFormatter(data?.BooksFee.toString())}
                </td>
              </tr>
              <tr>
                <td className="border border-black p-1">۸</td>
                <td className="border border-black p-1 text-right">
                  هزینه ارایه خدمات آموزش الکترونیکی
                </td>
                <td className="border border-black p-1"></td>
                <td className="border border-black p-1"></td>
              </tr>
              <tr className="bg-gray-100 font-bold">
                <td colSpan={2} className="border border-black p-1">
                  جمع کل
                </td>
                <td className="border border-black p-1"></td>
                <td className="border border-black p-1">
                  {priceFormatter(data?.totalFee.toString())}
                </td>
              </tr>
            </tbody>
          </table>

          <div className="mt-1 text-[10px]">
            <p>
              <span className="font-bold">تبصره:</span> دانش آموزانی که پس از
              ثبت نام قطعی از ادامه تحصیل در واحد آموزشی در اوایل شروع نیمسال /
              دوره تابستانی منصرف شود معادل ۵ ٪ (پنج درصد) شهریه، قبل از شروع
              امتحانات پایانی ۵۰ ٪ (پنجاه درصد) شهریه و بعد از شروع امتحانات
              پایانی ۱۰۰٪ (صد درصد) شهریه را باید پرداخت نماید.
            </p>
          </div>

          <p className="font-bold mt-2">ماده ۴- تعهدات پرداخت</p>
          <p>
            ولی دانش آموز / دانش آموز متعهد به پرداخت مبلغ{" "}
            <RenderData
              data={priceFormatter(data?.totalFee.toString(), true)}
            />{" "}
            به حروف{" "}
            <RenderData
              data={
                data?.totalFee
                  ? (numberToWords(data?.totalFee) as string)
                  : null
              }
            />{" "}
            ریال مطابق با زمان های مقرر در جدول زیر در وجه واحد آموزشی{" "}
            <span className="font-bold">{SchoolName}</span> به شماره حساب{" "}
            <RenderData data={settings?.bankAccount} /> بانک{" "}
            <RenderData data={settings?.bankName} /> شعبه{" "}
            <RenderData data={settings?.bankBranch} /> کد{" "}
            <RenderData data={settings?.bankCode} /> می باشد.
          </p>

          <table className="w-full border-collapse border border-black mt-2 text-center text-xs">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-black p-1">نوبت پرداخت</th>
                <th className="border border-black p-1">تاریخ پرداخت</th>
                <th className="border border-black p-1">شماره فیش / چک</th>
                <th className="border border-black p-1">بانک</th>
                <th className="border border-black p-1">کد شعبه</th>
                <th className="border border-black p-1">شعبه</th>
                <th className="border border-black p-1">مبلغ به ریال</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(4)].map((_, i) => (
                <tr key={i}>
                  <td className="border border-black p-2 h-7"></td>
                  <td className="border border-black p-2"></td>
                  <td className="border border-black p-2"></td>
                  <td className="border border-black p-2"></td>
                  <td className="border border-black p-2"></td>
                  <td className="border border-black p-2"></td>
                  <td className="border border-black p-2"></td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="mt-2 text-[10px]">
            این قرارداد در دو نسخه تنظیم گردد. (نسخه اول نگهداری در پرونده دانش
            آموز نسخه دوم تحویل به دانش آموز یا ولی)
          </p>

          <div className="flex justify-around mt-8 text-xs">
            <div className="text-center">
              <p>نام و نام خانوادگی</p>
              <p>ولی دانش آموز/دانش آموز</p>
              <p>امضاء و تاریخ</p>
            </div>
            <div className="text-center">
              <p>
                نام و نام خانوادگی <RenderData data={settings.founder} />
              </p>
              <p>
                موسس مدرسه <span className="font-bold">{SchoolName}</span>
              </p>
              <p>مهر، امضاء و تاریخ</p>
            </div>
          </div>
          <p className="mt-6 text-right text-xs">
            در صورت مغایرت دریافتی با پوستر شهریه با شماره ی{" "}
            <RenderData data={digitsEnToFa("02182284232")} /> منطقه / شهرستان
            تماس حاصل فرمایید.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SelectUnitPrintForm;
