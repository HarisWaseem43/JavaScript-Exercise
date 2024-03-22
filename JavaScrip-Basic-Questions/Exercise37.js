function convertLowerAndUpperCase(str) {
  if (str.length <= 3) {
    return str.toUpperCase();
  } else {
    let firstThreeChar = str.substring(0, 3).toLowerCase();
    return firstThreeChar + str.substring(3);
  }
}
console.log(convertLowerAndUpperCase("hel"));
console.log(convertLowerAndUpperCase("HELLO"));
console.log(convertLowerAndUpperCase("DEVELOPER"));
console.log(convertLowerAndUpperCase("dev"));
