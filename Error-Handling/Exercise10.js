try {
//   const result = undefined;
  console.log(result);
} catch (error) {
  console.log("This one is throw's an error: ", error.message);
} finally {
  console.log("Code clean up");
}
