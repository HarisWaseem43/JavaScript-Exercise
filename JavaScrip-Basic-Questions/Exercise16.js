function sumOfTwoIntegers(x, y) {
  const sum = x + y;
  if (x === y) {
    return 3 * sum;
  } else {
    return sum;
  }
}
console.log(sumOfTwoIntegers(2, 2));
console.log(sumOfTwoIntegers(4, 6));
console.log(sumOfTwoIntegers(1, 2));
