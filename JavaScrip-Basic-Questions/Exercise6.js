function leapYear(year) {
  if ((year % 4 === 0) & (year % 100 !== 0) || year % 400 === 0) {
    return "This is the Leap Year";
  } else {
    return "This is not";
  }
}

console.log(leapYear(2000));
console.log(leapYear(2001));
console.log(leapYear(2016));
console.log(leapYear(2023));
