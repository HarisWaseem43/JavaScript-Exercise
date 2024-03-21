function createMiddleString(str) {
  if (str.length <= 3 || str.length % 2 === 0) {
    return str;
  }
  const middleIndex = Math.floor(str.length / 2);
  const middleThreeCharacters = str.substring(middleIndex - 1, middleIndex + 2);
  return middleThreeCharacters;
}
console.log(createMiddleString("Programmers"));
console.log(createMiddleString("Force"));
console.log(createMiddleString("Bye"));
