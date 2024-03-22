function removeChar(str, position) {
  if (position < 0 || position >= str.length) {
    return "Invalid Position";
  } else {
    return str.substring(0, position) + str.substring(position + 1);
  }
}
console.log(removeChar("How are you", 5));
console.log(removeChar("Hello World", 8));
console.log(removeChar("Programmers Force", 22));
