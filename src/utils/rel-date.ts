export function relativeDate(time: Date) {
  const date = new Date(time || ""),
    diff = (new Date().getTime() - date.getTime()) / 1000,
    day_diff = Math.floor(diff / 86400);
  const year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate();

  if (isNaN(day_diff) || day_diff < 0 || day_diff >= 31)
    return (
      year.toString() +
      "-" +
      (month < 10 ? "0" + month.toString() : month.toString()) +
      "-" +
      (day < 10 ? "0" + day.toString() : day.toString())
    );

  return diff < 60
    ? "just now"
    : diff < 120
    ? "1 minute ago"
    : diff < 3600
    ? Math.floor(diff / 60) + " minutes ago"
    : diff < 7200
    ? "1 hour ago"
    : diff < 86400
    ? Math.floor(diff / 3600) + " hours ago"
    : day_diff == 1
    ? "Yesterday"
    : day_diff < 7
    ? day_diff + " days ago"
    : Math.ceil(day_diff / 7) + " weeks ago"
}