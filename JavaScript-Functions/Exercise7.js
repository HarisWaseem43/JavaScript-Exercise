const countVowels = (str) => {
  str = str.toLowerCase();

  let vowelCount = 0;

  let vowel = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    if (vowel.includes(str[i]) && str[i] !== "y") {
      vowelCount++;
    }
  }
  return vowelCount;
};

console.log(countVowels("Haris Bin Waseem"));
