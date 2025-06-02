import { InputValueType } from "@/types/Props";

export function castBigInt(n?: bigint | string | null | number) {
  if (n === null || n === undefined) {
    return n;
  }
  return BigInt(n);
}

export function returnActiveValue(
  input: {
    active?: boolean;
    value?: string | number;
  },
  type?: string | "bigint"
) {
  if (!input || !input.active) {
    return null;
  }

  switch (type) {
    case "bigint":
      return castBigInt(input.value);

    default:
      return input.value;
  }
}
