function checkWord(str) {
  if (str.indexOf("Script") === 4) {
    return str.substring(0, 4) ;
  } else {
    return str;
  }
}

console.log(checkWord("JavaScript"));
console.log(checkWord("Python"));
console.log(checkWord("Django"));
console.log(checkWord("Scripting"));
