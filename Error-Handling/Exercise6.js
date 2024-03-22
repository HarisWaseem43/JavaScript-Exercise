const throwEmptyArrayError = (str) => {
  if (str.length === 0) {
    throw new Error("String is Empty");
  } else {
    return str;
  }
};
console.log(throwEmptyArrayError(""));
