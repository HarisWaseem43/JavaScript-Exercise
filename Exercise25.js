function checkMultipleNum(num) {
  if (num % 3 === 0 || num % 7 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(checkMultipleNum(4));
console.log(checkMultipleNum(21));
console.log(checkMultipleNum(9));
