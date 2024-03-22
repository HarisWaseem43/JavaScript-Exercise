const throwCustomError = (num) => {
  if (!Number.isInteger(num)) {
    throw new Error(`${num} is not an Integer`);
  } else {
    return `${num} is an Integer`;
  }
};
console.log(throwCustomError("Haris"));
// console.log(throwCustomError(4));
