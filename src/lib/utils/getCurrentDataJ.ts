export const getCurrentDateJ = (
  get: "year" | "month" | "day" | "full" = "full"
) => {
  const date = new Date();
  switch (get) {
    case "year":
      return new Intl.DateTimeFormat("fa-IR", { year: "numeric" }).format(date);
    case "month":
      return new Intl.DateTimeFormat("fa-IR", { month: "2-digit" }).format(
        date
      );
    case "day":
      return new Intl.DateTimeFormat("fa-IR", { day: "2-digit" }).format(date);
    default:
      return new Intl.DateTimeFormat("fa-IR").format(date);
  }
};

export const getDateJ = (
  date: Date,
  get: "year" | "month" | "day" | "full" = "full"
) => {
  console.log(date);
  switch (get) {
    case "year":
      return new Intl.DateTimeFormat("fa-IR", { year: "numeric" }).format(date);
    case "month":
      return new Intl.DateTimeFormat("fa-IR", { month: "2-digit" }).format(
        date
      );
    case "day":
      return new Intl.DateTimeFormat("fa-IR", { day: "2-digit" }).format(date);
    default:
      return new Intl.DateTimeFormat("fa-IR").format(date);
  }
};
