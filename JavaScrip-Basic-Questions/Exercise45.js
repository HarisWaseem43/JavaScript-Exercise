function checkTwoInteger(num1, num2) {
  if (
    num1 + num2 === 15 ||
    num1 === 15 ||
    num2 === 15 ||
    Math.abs(num1 - num2) === 15
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(checkTwoInteger(10, 4));
console.log(checkTwoInteger(12, 16));
console.log(checkTwoInteger(30, 15));
console.log(checkTwoInteger(7, 8));
