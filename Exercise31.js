function findLargestNum(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}

console.log(findLargestNum(20, 30, 13));
console.log(findLargestNum(10, 9, 13));
console.log(findLargestNum(81, 100, 9));
