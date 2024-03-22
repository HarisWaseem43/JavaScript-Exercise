function getDate() {
  const currentDate = new Date();

  const getDay = currentDate.getDay();
  const getMonth = currentDate.getMonth() + 1;
  const getYear = currentDate.getFullYear();

  return "Date: " + getDay + "/" + getMonth + "/" + getYear;
}
console.log(getDate());
