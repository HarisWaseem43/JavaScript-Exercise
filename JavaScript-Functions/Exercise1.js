const reverseNumber = (number) => {
  const reversedString = String(number).split("").reverse().join("");
  const reversedNumber = parseInt(reversedString);
  return reversedNumber;
};
console.log(reverseNumber(32243));
console.log(reverseNumber(123456));
