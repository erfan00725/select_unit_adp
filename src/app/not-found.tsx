import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <h2 className="text-xl font-semibold">۴۰۴ - صفحه پیدا نشد</h2>
      <p>صفحه مورد نظر یافت نشد.</p>
      <Link
        href="/dashboard"
        className="mt-4 rounded-md bg-indigo-600 px-4 py-2 text-sm text-white transition-colors hover:bg-indigo-800"
      >
        بازگشت
      </Link>
    </main>
  );
}
