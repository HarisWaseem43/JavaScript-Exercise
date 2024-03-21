function rightMostDigit(num1, num2, num3) {
  let rightmostDigit1 = num1 % 10;
  let rightmostDigit2 = num2 % 10;
  let rightmostDigit3 = num3 % 10;

  return (
    (rightmostDigit1 === rightmostDigit2 &&
      rightmostDigit2 === rightmostDigit3) ||
    rightmostDigit1 === rightmostDigit2 ||
    (rightmostDigit2 === rightmostDigit3) |
      (rightmostDigit3 === rightmostDigit1)
  );
}
console.log(rightMostDigit(123, 456, 789));
console.log(rightMostDigit(22, 32, 42));
console.log(rightMostDigit(25, 35, 45));
console.log(rightMostDigit(11, 22, 33));
console.log(rightMostDigit(12, 22, 32));
