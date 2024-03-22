const throwEmptyArrayError = (arr) => {
  if (arr.length === 0) {
    throw new Error("Array is Empty");
  } else {
    return arr;
  }
};
console.log(throwEmptyArrayError([1, 2, 3]));
