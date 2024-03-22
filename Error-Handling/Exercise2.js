try {
  const obj = undefined;
  console.log(obj.property);
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Caught Error :", error.message);
  } else {
    throw error;
  }
}
