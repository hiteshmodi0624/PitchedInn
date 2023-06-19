export function relativeDay(time: Date) {
  const date = new Date(time || ""),
    diff = (new Date().getTime() - date.getTime()) / 1000,
    day_diff = Math.floor(diff / 86400);
  const year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate();

  if (isNaN(day_diff) || day_diff < 0 ) {
    return (
      year.toString() +
      "-" +
      (month < 10 ? "0" + month.toString() : month.toString()) +
      "-" +
      (day < 10 ? "0" + day.toString() : day.toString())
    );
  }
  const dayOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return diff < 86400
    ? "Today"
    : day_diff == 1
    ? "Yesterday"
    : day_diff < 7
    ? dayOfWeek[date.getDay()]!
    : new Date().getFullYear() === year
    ? day +
      " " +
      date.toLocaleString('en-US', { month: 'long' })
    : day +
      " " +
      date.toLocaleString('en-US', { month: 'long' }) +
      " " +
      year;
}
