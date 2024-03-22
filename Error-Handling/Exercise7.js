try {
  const arr = [1, 2, 3, 4];

  const invalidIndex = 6;
  console.log(arr[invalidIndex]);
} catch (error) {
  if (error instanceof RangeError) {
    console.log("Range Error: ", error.message);
  } else {
    throw error;
  }
}
