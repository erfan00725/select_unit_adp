"use server";

import { getUserByUsername } from "@/lib/actions";
import bcrypt from "bcryptjs";
import { signIn } from "@/auth";
import { homeUrl } from "@/constants/urls";

export async function handleLogin(formData: FormData) {
  try {
    // Get form values - use the correct field names from your form
    const username = formData.get("user") as string;
    const password = formData.get("password") as string;

    console.log("Received username:", username);
    console.log("Received password:", password);

    // Validate inputs directly
    if (!username || !password) {
      return {
        success: false,
        error: "نام کاربری و رمز عبور را وارد کنید",
      };
    }

    // Get user from database
    const userResult = await getUserByUsername(username);
    if (!userResult.user) {
      return {
        success: false,
        error: "1 نام کاربری یا رمز عبور اشتباه است",
      };
    }
    console.log(
      "Received password hashed:",
      `'${bcrypt.hashSync(password, 10)}'`
    );
    console.log("User from database:", `'${userResult.user.Password}'`);

    // Verify password WITHOUT trimming
    const isValidPassword = await bcrypt.compare(
      password,
      userResult.user.Password
    );

    console.log("Password comparison result:", isValidPassword);

    if (!isValidPassword) {
      return {
        success: false,
        error: "2 نام کاربری یا رمز عبور اشتباه است",
      };
    }

    // If validation passes, use signIn for session creation
    // Make sure to use the field names that NextAuth expects
    signIn("credentials", {
      UserName: username,
      Password: password,
      redirect: true,
      redirectTo: homeUrl,
    });

    return {
      success: true,
    };
  } catch (error) {
    console.error("Login error:", error);
    return {
      success: false,
      error: "خطا در ورود به سیستم. لطفا دوباره تلاش کنید.",
    };
  }
}
