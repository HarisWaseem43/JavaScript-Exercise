function checkNumber(number1, number2) {
  if ((number1 >= 50 && number1 <= 90) || (number2 >= 50 && number2 <= 90)) {
    return true;
  } else {
    return false;
  }
}

console.log(checkNumber(45, 50));
console.log(checkNumber(50, 60));
console.log(checkNumber(60, 80));
console.log(checkNumber(90, 100));
console.log(checkNumber(100, 120));
