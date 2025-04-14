export const returnNullIfEmpty = (val: any) =>
  val === "" || val == "none" ? undefined : val;
