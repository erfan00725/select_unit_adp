"use server";

import { prisma } from "../prisma";

export const cleareUserAndSetings = async () => {
  await prisma.user.deleteMany();
  await prisma.general.deleteMany();
};
