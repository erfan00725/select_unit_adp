export default function printOnclick(
  url: string,
  ids?: string[],
  paramName: string = "selectUnitIds"
) {
  window.open(`${window.location.origin}${url}?${paramName}=${ids?.join(",")}`);
}
