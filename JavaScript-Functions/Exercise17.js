function countOccurrences(str) {
  const occurrences = {};
  str = str.toLowerCase();
  for (let char of str) {
    if (/[a-z]/.test(char)) {
      occurrences[char] = occurrences[char] ? occurrences[char] + 1 : 1;
    }
  }

  return occurrences;
}
console.log(countOccurrences("Hello World"));
console.log(countOccurrences("Haris Bin Waseem"));
