const palindromeWord = (str) => {
  const reverse = str.split("").reverse().join("");

  //   return console.log(reverse, str === reverse);
  return str === reverse;
};

console.log(palindromeWord("madam"));
console.log(palindromeWord("nurse run"));
console.log(palindromeWord("civic"));
console.log(palindromeWord("Honda"));
