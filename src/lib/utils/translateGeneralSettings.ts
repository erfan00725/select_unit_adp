import { Settings } from "@/types/General";

export default function translateGeneralSettings(key: Settings) {
  // Returns a Persian label for each Settings enum value
  switch (key) {
    case Settings.FixedFee:
      return "هزینه ثابت کلاس";
    case Settings.CertificateFee:
      return "هزینه صدور گواهی";
    case Settings.BooksFee:
      return "هزینه کتاب‌ها";
    case Settings.PricePerUnit:
      return "قیمت هر واحد";
    case Settings.ExtraClassFee:
      return "هزینه کلاس فوق‌العاده";
    default:
      return key;
  }
}
