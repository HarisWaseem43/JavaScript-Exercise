function countVowels(str) {
  let count = str.match(/[aeiou]/gi).length;

  return count;
}
console.log(countVowels("Programmers Force"));
