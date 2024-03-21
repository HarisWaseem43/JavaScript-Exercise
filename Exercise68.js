const newString = (str, n) => {
  if (str.length >= n * 2) {
    const firstCharacter = str.substring(0, n);
    const lastCharacter = str.substring(str.length - 1);
    return firstCharacter + lastCharacter;
  }
};
console.log(newString("JavaScript", 3));
console.log(newString("Programmers", 2));
