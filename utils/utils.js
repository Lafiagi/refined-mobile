import Toast from "react-native-simple-toast";

export function currencyFormat(num) {
  return parseFloat(num)
    .toFixed(2)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export function formatDate(date, formatType) {
  const format = formatType ?? "long";
  if (format === "long") {
    // Format as "November 2, 2023"
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } else if (format === "short") {
    // Format as "30/11/2023"
    const d = new Date(date);
    const year = d.getFullYear();
    const month = `${d.getMonth() + 1}`.padStart(2, "0"); // Adding leading zero if single digit
    const day = `${d.getDate()}`.padStart(2, "0"); // Adding leading zero if single digit
    return `${day}/${month}/${year}`;
  } else {
    return "Invalid formatType";
  }
}

export function extractTimeFromDate(dateTimeString) {
  const date = new Date(dateTimeString);

  const hours = date.getHours();
  const minutes = date.getMinutes();

  // Convert hours to 12-hour format and determine AM/PM
  const period = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;

  // Adding leading zeros to minutes if less than 10
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${formattedHours}:${formattedMinutes} ${period}`;
}

export function computeVAT(num) {
  const VAT = num * 0.075;
  return parseFloat(VAT);
}

export const showToastSuccess = (message) => {
  Toast.show(message, Toast.LONG);
};

export const showToastError = (message) => {
  Toast.showWithGravity(message, Toast.LONG, Toast.BOTTOM);
};