const generateCombination = (str) => {
  const result = [];
  const generate = (currentChar, remainingChar) => {
    result.push(currentChar);

    for (let i = 0; i < remainingChar.length; i++) {
      generate(currentChar + remainingChar[i], remainingChar.slice(i + 1));
    }
  };
  generate("", str);
  return result;
};

console.log(generateCombination("dog"));
console.log(generateCombination("Programmers"));
