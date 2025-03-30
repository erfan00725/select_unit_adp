"use server";

import { prisma } from "../prisma";
import { revalidatePath } from "next/cache";
import { UserDataType } from "@/types/Tables";

// Get all users
export async function getUsers() {
  try {
    const users = await prisma.user.findMany();
    return { users };
  } catch (error) {
    console.error("Failed to fetch users:", error);
    return { error: "Failed to fetch users" };
  }
}

// Get a single user by ID
export async function getUserById(id: bigint) {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      return { error: "User not found" };
    }

    return { user };
  } catch (error) {
    console.error("Failed to fetch user:", error);
    return { error: "Failed to fetch user" };
  }
}

// Create a new user
export async function createUser(data: UserDataType) {
  try {
    const existingUser = await prisma.user.findFirst({
      where: { UserName: data.UserName },
    });

    if (existingUser) {
      return { error: "A user with this username already exists" };
    }

    // In a real application, you would hash the password here
    // For example: data.Password = await bcrypt.hash(data.Password, 10);

    const user = await prisma.user.create({
      data,
    });

    revalidatePath("/dashboard/users");
    return { user };
  } catch (error) {
    console.error("Failed to create user:", error);
    return { error: "Failed to create user" };
  }
}

// Update a user
export async function updateUser(id: bigint, data: Partial<UserDataType>) {
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
        return { error: "A user with this username already exists" };
      }
    }

    // In a real application, you would hash the password here if it's being updated
    // if (data.Password) {
    //   data.Password = await bcrypt.hash(data.Password, 10);
    // }

    const user = await prisma.user.update({
      where: { id },
      data,
    });

    revalidatePath("/dashboard/users");
    revalidatePath(`/dashboard/users/${id}`);
    return { user };
  } catch (error) {
    console.error("Failed to update user:", error);
    return { error: "Failed to update user" };
  }
}

// Delete a user
export async function deleteUser(id: bigint) {
  try {
    await prisma.user.delete({
      where: { id },
    });

    revalidatePath("/dashboard/users");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete user:", error);
    return { error: "Failed to delete user" };
  }
}
