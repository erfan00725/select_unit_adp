"use server";

import bcrypt from "bcryptjs";
import { createSetting, createUser } from "@/lib/actions";
import { Settings } from "@/types/General";
import { clearGeneralData } from "@/lib/actions/general";

/**
 * Initializes the database with default admin user and fee settings
 */
export const initialDataBase = async () => {
  const adminUserName = "admin";
  const adminPassword = "@dmin113link";
  createUser({
    UserName: adminUserName,
    Password: bcrypt.hashSync(adminPassword, 10),
    Type: "admin",
  });

  // Initialize fee-related general settings
  const feeSettings = [
    { Key: Settings.FixedFee, Value: "2000000" },
    { Key: Settings.CertificateFee, Value: "300000" },
    { Key: Settings.BooksFee, Value: "500000" },
    { Key: Settings.PricePerUnit, Value: "1000000" },
    { Key: Settings.ExtraClassFee, Value: "800000" },
  ];

  for (const setting of feeSettings) {
    await createSetting(setting);
    console.log(`Created fee setting: ${setting.Key} = ${setting.Value}`);
  }
};

export const seedGeneralSettings = async () => {
  clearGeneralData();

  // Initialize fee-related general settings
  const feeSettings = [
    { Key: Settings.FixedFee, Value: "2000000" },
    { Key: Settings.CertificateFee, Value: "300000" },
    { Key: Settings.BooksFee, Value: "500000" },
    { Key: Settings.PricePerUnit, Value: "1000000" },
    { Key: Settings.ExtraClassFee, Value: "800000" },
  ];

  for (const setting of feeSettings) {
    await createSetting(setting);
    console.log(`Created fee setting: ${setting.Key} = ${setting.Value}`);
  }
};
