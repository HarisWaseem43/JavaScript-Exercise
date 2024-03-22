function elementsLargerThan(arr, number) {
  if (!Array.isArray(arr)) {
    throw new Error("Input is not an array");
  }
  return arr.filter((element) => element > number);
}

const inputArray = [1, 5, 8, 10, 15, 20];
const thresholdNumber = 7;
try {
  const resultArray = elementsLargerThan(inputArray, thresholdNumber);
  console.log(resultArray);
} catch (error) {
  console.error(error.message);
}
