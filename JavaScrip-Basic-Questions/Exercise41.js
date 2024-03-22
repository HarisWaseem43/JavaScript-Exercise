function checkNumber(num1, num2, num3) {
  if ((num1 === num2) === num3) {
    return 30;
  } else if (num1 === num2 || num2 === num3) {
    return 40;
  } else {
    return 20;
  }
}
console.log(checkNumber(1, 2, 2));
console.log(checkNumber(10, 10, 10));
console.log(checkNumber(2, 9, 4));
