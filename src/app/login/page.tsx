"use client";

import React, { useEffect, useState } from "react";
import Logo from "@/components/ui/common/Logo";
import Input from "@/components/ui/common/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { signIn, useSession } from "next-auth/react";
import { homeUrl } from "@/constants/urls";
import Loading from "@/components/common/Loading";
import { useSearchParams } from "@/lib/hooks/useSeachParams";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); // New state for loading
  const { getSearchParam } = useSearchParams();
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    if (session.status === "authenticated") {
      router.push(homeUrl);
    }
  }, [session]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userName === "" || password === "") {
      toast.error("نام کاربری و رمز عبور را وارد کنید");
      return; // Add return to prevent form submission
    }

    setIsLoading(true); // Show loading state

    signIn("credentials", {
      userName,
      password,
      redirect: false,
    })
      .then((response) => {
        // @ts-ignore
        if (response?.error) {
          // Handle the specific error from auth.config.ts
          toast.error("نام کاربری یا رمز عبور اشتباه است");
        } else {
          toast.success("ورود شما با موفقیت انجام شد");
          const callbackUrl = getSearchParam("callbackUrl");
          if (!!callbackUrl) {
            const callbackPath = callbackUrl.split(homeUrl)[1];
            router.push(homeUrl + callbackPath);
          } else {
            router.push(homeUrl);
          }
          // Successful login
        }
      })
      .catch((error) => {
        console.log("Unexpected error:", error);
        toast.error("خطایی رخ داده است");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 space-y-8">
        <div className="flex flex-col items-center">
          <Logo className="mb-6" />
          <h2 className="text-center text-3xl font-bold text-gray-900">
            خوش آمدید
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            لطفاً وارد حساب کاربری خود شوید
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="user"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                نام کاربری <span className="text-red-500">*</span>
              </label>
              <Input
                type="text"
                name="user"
                placeholder="نام کاربری خود را وارد کنید"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                icon={<FontAwesomeIcon icon={faEnvelope} />}
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                رمز عبور <span className="text-red-500">*</span>
              </label>
              <Input
                type="password"
                name="password"
                placeholder="رمز عبور خود را وارد کنید"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                icon={<FontAwesomeIcon icon={faLock} />}
                required
              />
            </div>
          </div>

          {/* <div className="flex items-center justify-between">
            <Checkbox
              label="مرا به خاطر بسپار"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <div className="text-sm">
              <Link
                href="/forgot-password"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </Link>
            </div>
          </div> */}

          <div>
            <button type="submit" className="btn">
              {isLoading ? <Loading /> : "ورود"}
            </button>
          </div>
        </form>

        {/* <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                New to Night School?
              </span>
            </div>
          </div>

          <div className="mt-6">
            <Link href="/signup">
              <Button variant="secondary" fullWidth>
                Create an account
              </Button>
            </Link>
          </div>
        </div> */}
      </div>

      <footer className="mt-8 text-center text-sm text-gray-500">
        © 2024 مدرسه شبانه. تمامی حقوق محفوظ است.
      </footer>
    </div>
  );
}
