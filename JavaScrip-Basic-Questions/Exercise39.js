function sumInRange(num1, num2) {
  num3 = num1 + num2;
  if (num3 >= 50 && num3 <= 80) {
    return 65;
  } else {
    return 80;
  }
}
console.log(sumInRange(20, 50));
console.log(sumInRange(55, 75));
console.log(sumInRange(30, 60));
