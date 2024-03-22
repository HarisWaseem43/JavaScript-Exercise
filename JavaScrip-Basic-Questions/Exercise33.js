function findRange(num1, num2) {
  if (
    ((num1 >= 40 && num1 <= 60) || (num1 >= 70 && num1 <= 100)) &&
    ((num2 >= 40 && num2 <= 60) || (num2 >= 70 && num2 <= 100))
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(findRange(45, 55));
console.log(findRange(80, 95));
console.log(findRange(35, 65));
console.log(findRange(25, 105));
