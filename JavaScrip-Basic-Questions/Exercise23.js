function createNewStr(str) {
  if (str.length <= 1) {
    return str;
  } else {
    let firstCharacter = str.charAt(0);

    let lastCharacter = str.charAt(str.length - 1);

    return lastCharacter + str.substring(1, str.length - 1) + firstCharacter;
  }
}
console.log(createNewStr("Hello World"));
console.log(createNewStr("Pr0grammers"));
console.log(createNewStr("Developers"));
