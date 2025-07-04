export default function printOnclick(url: string, ids?: string[]) {
  window.open(
    `${window.location.origin}${url}?selectUnitIds=${ids?.join(",")}`
  );
}
