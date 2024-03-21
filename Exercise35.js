function findPosition(str, char) {
  if (str.length >= 4) {
    let secondChar = str.charAt(1);
    let foutChar = str.charAt(3);
    // console.log(secondChar, "and", foutChar);
    return secondChar === char || foutChar === char;
  } else {
    return false;
  }
}
console.log(findPosition("example", "a"));
console.log(findPosition("programmers", "m"));
console.log(findPosition("developer", "e"));
console.log(findPosition("coder", "o"));
