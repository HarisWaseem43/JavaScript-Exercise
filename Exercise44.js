function evaluateInteger(num1, num2, num3) {
  let greaterValue = num1 >= 20 || num2 >= 20 || num3 >= 20;
  let lesserValue =
    (num1 < num2 && num1 < num3) ||
    (num2 < num1 && num2 < num3) ||
    (num3 < num2 && num3 < num3);
  return greaterValue && lesserValue;
}
console.log(evaluateInteger(10, 12, 23));
console.log(evaluateInteger(21, 31, 25));
console.log(evaluateInteger(100, 120, 28));
