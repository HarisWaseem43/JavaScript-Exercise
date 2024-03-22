const throwCustomError = (num1, num2) => {
  if (num2 === 0) {
    throw new Error(`Num-2 valus is Zero`);
  } else {
    return `${num1} and ${num2} is not a Zero`;
  }
};
console.log(throwCustomError(2, 2));
