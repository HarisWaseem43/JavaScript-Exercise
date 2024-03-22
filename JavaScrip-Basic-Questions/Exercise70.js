const rotateLeft = (arr) => {
  if (arr.length !== 3) {
    return " Array must be 3";
  }
  const rotatedArray = [arr[0], arr[1], arr[2]];
  return rotatedArray;
};
console.log(rotateLeft([1, 5, 8]));
console.log(rotateLeft([12, 54, 87]));
