function repeatLastThreeChar(str) {
  if (str.length <= 3) {
    return str;
  } else {
    let lastThreeChar = str.slice(-3);
    // console.log(lastThreeChar);
    return lastThreeChar.repeat(4);
  }
}

console.log(repeatLastThreeChar("Programmers"));
