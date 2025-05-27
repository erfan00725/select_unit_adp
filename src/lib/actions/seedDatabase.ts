"use server";

import bcrypt from "bcryptjs";
import { createSetting, createUser } from "@/lib/actions";
import { Settings } from "@/types/General";
import {
  clearGeneralData,
  GeneralDataType,
  getSettingByKey,
} from "@/lib/actions/general";

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
  const feeSettings: Omit<GeneralDataType, "id">[] = [
    {
      Key: Settings.FixedFee,
      Value: "2000000",
      Title: "هزینه شهریه ثابت",
      Description: null,
    },
    {
      Key: Settings.CertificateFee,
      Value: "300000",
      Title: "هزینه صدور گواهی",
      Description: null,
    },
    {
      Key: Settings.BooksFee,
      Value: "500000",
      Title: "هزینه کتاب‌ها",
      Description: null,
    },
    {
      Key: Settings.PricePerUnit,
      Value: "1000000",
      Title: "هزینه هر واحد",
      Description: null,
    },
    {
      Key: Settings.ExtraClassFee,
      Value: "800000",
      Title: "هزینه کلاس اضافی",
      Description: null,
    },
    {
      Key: Settings.InsuranceFee,
      Value: "500000",
      Title: "هزینه بیمه",
      Description: null,
    },
  ];

  for (const setting of feeSettings) {
    await createSetting(setting);
    console.log(`Created fee setting: ${setting.Key} = ${setting.Value}`);
  }
};

export const seedGeneralSettings = async () => {
  // Initialize fee-related general settings
  const feeSettings: Omit<GeneralDataType, "id">[] = [
    {
      Key: Settings.FixedFee,
      Value: "2000000",
      Title: "هزینه شهریه ثابت",
      Description: null,
    },
    {
      Key: Settings.CertificateFee,
      Value: "300000",
      Title: "هزینه صدور گواهی",
      Description: null,
    },
    {
      Key: Settings.BooksFee,
      Value: "500000",
      Title: "هزینه کتاب‌ها",
      Description: null,
    },
    {
      Key: Settings.PricePerUnit,
      Value: "1000000",
      Title: "هزینه هر واحد",
      Description: null,
    },
    {
      Key: Settings.ExtraClassFee,
      Value: "800000",
      Title: "هزینه کلاس اضافی",
      Description: null,
    },
    {
      Key: Settings.InsuranceFee,
      Value: "500000",
      Title: "هزینه بیمه",
      Description: null,
    },
  ];
  await clearGeneralData().then(async () => {
    for (const setting of feeSettings) {
      const existingSetting = await getSettingByKey(setting.Key);
      if (existingSetting) {
        console.log(`Fee setting already exists: ${setting.Key}`);
        continue;
      }
      await createSetting(setting);
      console.log(`Created fee setting: ${setting.Key} = ${setting.Value}`);
    }
  });
};
