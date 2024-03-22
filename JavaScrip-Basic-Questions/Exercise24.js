function createStrWithFirstChar(str) {
  if (str.length <= 1) {
    return str;
  } else {
    let firstCharatcer = str.charAt(0);
    return firstCharatcer + str + firstCharatcer;
  }
}
console.log(createStrWithFirstChar("Programmer"));
