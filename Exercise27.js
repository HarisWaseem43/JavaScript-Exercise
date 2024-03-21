function checkWord(str) {
  if (str.substring(0, 4) === "Java") {
    return true;
  } else {
    return false;
  }
}
console.log(checkWord("JavaScript"));
console.log(checkWord("Python"));
