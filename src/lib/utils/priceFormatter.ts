const formatter = new Intl.NumberFormat("fa-IR", {
  style: "currency",
  currency: "IRR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export const priceFormatter = (
  price: string | number,
  haveRial: boolean = false
) => {
  if (!price) {
    return "0";
  }
  return haveRial
    ? `${formatter.format(Number(price)).replace("ریال", "")} ریال`
    : formatter.format(Number(price)).replace("ریال", "");
};
