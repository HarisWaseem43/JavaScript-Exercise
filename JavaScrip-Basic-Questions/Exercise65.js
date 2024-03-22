const endsWith = (str) => {
  if (str.length >= 6) {
    return str.endsWith("Script");
  } else {
    return false;
  }
};
console.log(endsWith("JavaScript"));
console.log(endsWith("Scripting"));
console.log(endsWith("Developer"));
