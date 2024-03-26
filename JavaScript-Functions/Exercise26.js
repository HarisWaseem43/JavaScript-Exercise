function longestSubstringWithoutRepeatingChars(str) {
  let maxLength = 0;
  let start = 0;
  let charIndexMap = {};

  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    if (
      charIndexMap[currentChar] !== undefined &&
      charIndexMap[currentChar] >= start
    ) {
      start = charIndexMap[currentChar] + 1;
    }
    charIndexMap[currentChar] = i;
    maxLength = Math.max(maxLength, i - start + 1);
  }
  return maxLength;
}

console.log(longestSubstringWithoutRepeatingChars("abcabcbb"));
