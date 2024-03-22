function checkFor8(num1, num2) {
  if (
    num1 === 8 ||
    num2 === 8 ||
    num1 + num2 === 8 ||
    Math.abs(num1 - num2) === 8
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(checkFor8(8, 10));
console.log(checkFor8(5, 3));
console.log(checkFor8(3, 5));
console.log(checkFor8(2, 90));
