export default function getFarsiDate(date?: Date | string | number) {
  return date ? new Date(date).toLocaleDateString("fa-IR") : "_";
}
