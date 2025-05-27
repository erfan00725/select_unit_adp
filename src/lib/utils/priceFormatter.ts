const formatter = new Intl.NumberFormat("fa-IR", {
  style: "currency",
  currency: "IRR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export const priceFormatter = (
  Initialprice?: number | string,
  haveRial: boolean = false
) => {
  let price = Number(Initialprice);
  if (!price || isNaN(price)) {
    price = 0;
  }
  return haveRial
    ? `${formatter.format(price).replace("ریال", "")}ریال`
    : formatter.format(price).replace("ریال", "");
};
