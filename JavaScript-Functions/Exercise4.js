const aplhabeticalOrder = (str) => {
  const res = str.split("").sort().join("");
  return res;
};
console.log(aplhabeticalOrder("haris"));
console.log(aplhabeticalOrder("onmlkjihgfedcba"));
