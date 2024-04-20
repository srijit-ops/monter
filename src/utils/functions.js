export const formatDate = (isoDate) => {
  const dateObj = new Date(isoDate);

  // Get hours and minutes
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();

  // Convert hours to AM/PM format
  const amPm = hours >= 12 ? "PM" : "AM";
  const displayHours = hours % 12 || 12; // Convert to 12-hour format

  // Get day, month, and year
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1; // January is 0, so add 1
  const year = dateObj.getFullYear();

  return {
    time: `${displayHours}:${minutes.toString().padStart(2, "0")} ${amPm}`,
    date: `${day.toString().padStart(2, "0")}.${month
      .toString()
      .padStart(2, "0")}.${year}`,
  };
};

export function range(start, end) {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}
