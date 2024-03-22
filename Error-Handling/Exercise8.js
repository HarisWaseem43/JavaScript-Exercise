try {
  const obj = {};
  console.log(obj.property);
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Caught TypeError: ", error.message);
  } else {
    console.log("Caught Other TypeError: ", error.message);
  }
}
