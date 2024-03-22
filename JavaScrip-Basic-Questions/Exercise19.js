function checkInteger(number) {
  if (Math.abs(number - 100) <= 20 || Math.abs(number - 400) <= 20) {
    return true;
  } else {
    return false;
  }
}
console.log(checkInteger(80));
console.log(checkInteger(80));
