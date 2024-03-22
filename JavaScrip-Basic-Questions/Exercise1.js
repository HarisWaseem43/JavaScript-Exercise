function getDayDateTime() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date();

  const day = days[date.getDay()];
  // const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();

  const AMnPM = "AM";

  if (hours >= 12) {
    AMnPM = "PM";
    if (hours > 12) {
      hours = hours - 12;
    }
  }
  const convertedMinutes = minutes < 10 ? "0" + minutes : minutes;
  // const convertedSeconds = seconds < 10 ? "0" + seconds : seconds;

  currentTime = hours + " " + convertedMinutes + " " + AMnPM;
  return "Today is : " + day + " " + "Curent Time is : " + currentTime;
}

console.log(getDayDateTime());
