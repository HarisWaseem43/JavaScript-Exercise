function checkNumbers(number1, number2) {
  if (number1 === 50 || number2 === 50 || number1 + number2 === 50) {
    return true;
  } else {
    return false;
  }
}
console.log(checkNumbers(40, 50));
console.log(checkNumbers(40, 100));
console.log(checkNumbers(25, 25));
