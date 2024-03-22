try {
  console.log(undefinedVariable);
} catch (error) {
  if (error instanceof ReferenceError) {
    console.log("Caught ReferenceError: ", error.message);
  } else {
    throw error;
  }
}
