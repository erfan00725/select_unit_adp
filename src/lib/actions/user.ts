"use server";

import { prisma } from "../prisma";
import { revalidatePath } from "next/cache";
import { UserDataType } from "@/types/Tables";
import bcrypt from "bcryptjs";

// Get all users
export async function getUsers() {
  try {
    const users = await prisma.user.findMany();
    return { users };
  } catch (error) {
    console.error("خطا در دریافت کاربران:", error);
    return { error: "خطا در دریافت کاربران" };
  }
}

// Get a single user by ID
export async function getUserById(id: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      return { error: "کاربر یافت نشد" };
    }

    return { user };
  } catch (error) {
    console.error("خطا در دریافت کاربر:", error);
    return { error: "خطا در دریافت کاربر" };
  }
}

// Create a new user
export async function createUser(data: Omit<UserDataType, "id">) {
  try {
    const existingUser = await prisma.user.findFirst({
      where: { UserName: data.UserName },
    });

    if (existingUser) {
      return { error: "کاربری با این نام کاربری قبلاً ثبت شده است" };
    }

    // In a real application, you would hash the password here
    data.Password = await bcrypt.hash(data.Password, 10);
    const editedData = {
      ...data,
      id: undefined,
    };

    const user = await prisma.user.create({
      data: editedData,
    });

    revalidatePath("/dashboard/users");
    return { user };
  } catch (error) {
    console.error("خطا در ایجاد کاربر:", error);
    return { error: "خطا در ایجاد کاربر" };
  }
}

// Update a user
export async function updateUser(id: string, data: Partial<UserDataType>) {
  try {
    // Check if username is being updated and if it's already in use
    if (data.UserName) {
      const existingUser = await prisma.user.findFirst({
        where: {
          UserName: data.UserName,
          id: { not: id },
        },
      });

      if (existingUser) {
        return { error: "کاربری با این نام کاربری قبلاً ثبت شده است" };
      }
    }

    // In a real application, you would hash the password here if it's being updated
    if (data.Password) {
      data.Password = await bcrypt.hash(data.Password, 10);
    }

    const editedData = {
      ...data,
      id: undefined,
      ConfirmPassword: undefined,
    };

    const user = await prisma.user.update({
      where: { id },
      data: editedData,
    });

    revalidatePath("/dashboard/users");
    revalidatePath(`/dashboard/users/${id}`);
    return { user };
  } catch (error) {
    console.error("خطا در به‌روزرسانی کاربر:", error);
    return { error: "خطا در به‌روزرسانی کاربر" };
  }
}

// Get a user by username
export async function getUserByUsername(username: string) {
  try {
    const user = await prisma.user.findFirst({
      where: { UserName: username },
    });

    if (!user) {
      return { error: "کاربر یافت نشد" };
    }

    return { user };
  } catch (error) {
    console.error("خطا در دریافت کاربر:", error);
    return { error: "خطا در دریافت کاربر" };
  }
}

// Delete a user
export async function deleteUser(id: string) {
  try {
    await prisma.user.delete({
      where: { id },
    });

    revalidatePath("/dashboard/users");
    return { success: true };
  } catch (error) {
    console.error("خطا در حذف کاربر:", error);
    return { error: "خطا در حذف کاربر" };
  }
}
