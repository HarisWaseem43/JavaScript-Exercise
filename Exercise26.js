function createNewString(str) {
  if (str.length <= 3) {
    return str;
  } else {
    let firstCharacter = str.substring(0, 3);
    return firstCharacter + str + firstCharacter;
  }
}

console.log(createNewString("Hello World"));
console.log(createNewString("Developers"));
