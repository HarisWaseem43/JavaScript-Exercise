function checkIncreasingMode(num1, num2, num3) {
  const strictIncreasing = num1 < num2 && num2 < num3;
  const softIncreasing = num1 < num2 && num2 < num3;
  return {
    strict: strictIncreasing,
    soft: softIncreasing,
  };
}
console.log(checkIncreasingMode(10, 15, 31));
console.log(checkIncreasingMode(24, 22, 31));
console.log(checkIncreasingMode(22, 22, 31));
