const onNegativeThrowError = (num) => {
  if (num <= 0) {
    throw new Error(`This ${num} is a Negative Number`);
  } else {
    return `${num} is not a Negative Number`;
  }
};
console.log(onNegativeThrowError(-4));
