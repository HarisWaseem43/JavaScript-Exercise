function checkPositiveNegetiveInteger(number1, number2) {
  return (number1 > 0 && number2 < 0) || (number1 < 0 && number2 > 0);
}
console.log(checkPositiveNegetiveInteger(-9, 10));
console.log(checkPositiveNegetiveInteger(3, -10));
console.log(checkPositiveNegetiveInteger(119, 20));
