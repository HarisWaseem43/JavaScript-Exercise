function differenceNumber(number) {
  const difference = Math.abs(number - 13);

  if (number > 13) {
    return difference * 2;
  } else {
    return difference;
  }
}
console.log(differenceNumber(3));
console.log(differenceNumber(9));
console.log(differenceNumber(11));
