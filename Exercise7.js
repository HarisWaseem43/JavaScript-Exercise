function firstSunday() {
  for (year = 2014; year <= 2050; year++) {
    let date = new Date(year, 0, 1);
    if (date.getDay() === 0) {
      return `The 1st Day of ${year} is s Sunday`;
    }
  }
}
console.log(firstSunday());
