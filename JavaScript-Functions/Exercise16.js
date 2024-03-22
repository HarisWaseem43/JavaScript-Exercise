function extractUniqueCharacters(str) {
  const uniqueChars = {};
  let result = "";

  for (let char of str) {
    if (!uniqueChars[char]) {
      uniqueChars[char] = true;
      result += char;
    }
  }

  return result;
}
console.log(extractUniqueCharacters("thequickbrownfoxjumpsoverthelazydog"));
