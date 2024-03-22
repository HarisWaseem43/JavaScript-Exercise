function separatedByThree(str) {
  for (let i = 0; i < str.length - 3; i++) {
    if (
      (str[i] === "a" && str[i + 3] === "b") ||
      (str[i] === "b" && str[i + 3] === "a")
    ) {
      return true;
    }
  }
  return false;
}
console.log(separatedByThree("abdc"));
console.log(separatedByThree("accbba"));
console.log(separatedByThree("babbas"));
console.log(separatedByThree("baaa"));
