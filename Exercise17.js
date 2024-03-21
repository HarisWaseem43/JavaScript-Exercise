function absoluteDifference(number) {
  const difference = Math.abs(number - 19);

  if (number > 19) {
    return 3 * difference;
  } else {
    return difference;
  }
}
console.log(absoluteDifference(4));
console.log(absoluteDifference(7));
console.log(absoluteDifference(11));
