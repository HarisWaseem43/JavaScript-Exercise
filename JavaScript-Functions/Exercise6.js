function findLongestWord(str) {
  const words = str.split(" ");

  let longestWord = "";
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      longestWord = words[i];
      maxLength = words[i].length;
    }
  }

  return longestWord;
}

console.log(findLongestWord("Web Development Tutorial"));
console.log(findLongestWord("Haris Bin Waseem"));
