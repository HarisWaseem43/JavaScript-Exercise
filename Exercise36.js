function findLastDigit(num1, num2, num3) {
  let lastDigit1 = num1 % 10;
  let lastDigit2 = num2 % 10;
  let lastDigit3 = num3 % 10;

  return lastDigit1 === lastDigit2 && lastDigit2 === lastDigit3;
}
console.log(findLastDigit(2, 4, 5));
console.log(findLastDigit(123, 456, 723));
console.log(findLastDigit(35, 45, 25));
