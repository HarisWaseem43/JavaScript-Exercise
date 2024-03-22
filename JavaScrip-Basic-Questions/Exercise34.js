function findLargestNumInRange(num1, num2) {
  if (num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60) {
    if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
  } else {
    return "There is no Largest Number";
  }
}

console.log(findLargestNumInRange(40, 30));
console.log(findLargestNumInRange(45, 60));
console.log(findLargestNumInRange(40, 100));
